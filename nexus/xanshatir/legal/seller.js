/* The restaurant's legal details, shown at the bottom of the delivery site and in the legal pages.
   Fill them in from the owner's documents; an empty field shows as ________ . */
const SELLER = {
  brand: "Xan Shatir",
  name: "",          // e.g. "YaTT Familiya Ism" or "\"XAN SHATIR\" MChJ"
  inn: "",           // STIR / ИНН
  address: "",       // legal address
  phone: "+998 95 837 88 08",
  email: "",
  operator: "",      // number in the register of personal data operators (my.gov.uz)
  updated: "2026-10-29"
};
const blank = v => v || "________";
