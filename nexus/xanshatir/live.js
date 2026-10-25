/* Live channel between the table menu and the admin panel, for the demo.
   Messages go through ntfy.sh (public pub/sub, no account). Anyone who knows the topic
   can read and post to it and ntfy keeps messages for about 12 hours, so this is
   only for showing the flow; the real system will use a database.
   Message kinds: {k:"order", id, table, items:[[nameRu, qty, price]], sum}
                  {k:"waiter", id, table}
                  {k:"status", id, s:"accepted"|"paid"|"cancel"|"done"} */
const LIVE = {
  url: "https://ntfy.sh/nexus-xanshatir-afb4baf69d5b",
  id: () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6),

  async send(data){
    const r = await fetch(LIVE.url, { method: "POST", body: JSON.stringify(data) });
    if (!r.ok) throw new Error("ntfy " + r.status);
  },

  // onData(message, timeMs) for every message, history of the last 12 h first; onState(connected)
  listen(onData, onState){
    const seen = new Set();   // EventSource reconnects replay the history, skip what we already have
    const es = new EventSource(LIVE.url + "/sse?since=12h");
    es.onopen = () => onState(true);
    es.onerror = () => onState(false);
    es.onmessage = e => {
      try {
        const m = JSON.parse(e.data);
        if (m.event !== "message" || seen.has(m.id)) return;
        seen.add(m.id);
        onData(JSON.parse(m.message), m.time * 1000);
      } catch (err) {}
    };
    return es;
  }
};
