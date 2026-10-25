/* Real menu from the restaurant's Instagram "Menyu" stories (18.10). img: photo in img/, no img = icon */
const S = (uz, ru, en) => ({ uz, ru, en });
const MENU = [
  { id:"milliy", icon:"fa-crown", n:S("Milliy taomlar","Национальные блюда","National dishes"), items:[
    { n:S("Beshbarmoq","Бешбармак","Beshbarmak"), d:S("Go'sht, xamir va piyoz, sorpa bilan","Мясо, тесто и лук, с сорпой","Meat, noodles and onion, with broth"), p:115000, tag:"hit", ic:"fa-bowl-food" },
    { n:S("Manti","Манты","Manti"), d:S("Qaymoqli sous bilan","Со сметанным соусом","With sour cream sauce"), p:60000, ic:"fa-cloud" },
    { n:S("Bo'yin","Буйин","Buyin"), d:S("Kartoshka va sabzavotlar bilan, katta tovoq","С картофелем и овощами, большое блюдо","With potatoes and vegetables, large platter"), p:200000, w:S("1 kg","1 кг","1 kg"), ic:"fa-drumstick-bite" },
    { n:S("Jiz","Жиз","Jiz"), d:S("Qovurilgan go'sht, sabzavotlar va sous","Жареное мясо, овощи и соус","Fried meat, vegetables and sauce"), p:80000, ic:"fa-fire-flame-curved" },
    { n:S("Qozon kabob","Казан-кебаб","Kazan kebab"), d:S("Go'sht va kartoshka, piyoz bilan","Мясо и картофель, с луком","Meat and potatoes, with onion"), p:80000, ic:"fa-fire-flame-curved" },
    { n:S("Do'lma","Долма","Dolma"), d:S("Tok bargida, sous bilan","В виноградных листьях, с соусом","In vine leaves, with sauce"), p:45000, ic:"fa-leaf" }
  ]},
  { id:"issiq", icon:"fa-drumstick-bite", n:S("Issiq taomlar","Горячие блюда","Hot dishes"), items:[
    { n:S("Guruchli pishirilgan son","Запечённое бедро с рисом","Baked chicken thigh with rice"), d:S("Sabzavotlar va sous bilan","С овощами и соусом","With vegetables and sauce"), p:50000, ic:"fa-drumstick-bite" },
    { n:S("Tovuq tayoqchalari","Куриные палочки","Chicken strips"), d:S("Fri kartoshka va sous bilan","С картофелем фри и соусом","With fries and sauce"), p:45000, ic:"fa-drumstick-bite" }
  ]},
  { id:"assorti", icon:"fa-users", n:S("Xan assorti","Хан ассорти","Khan platters"), items:[
    { n:S("Xan assorti — 6 kishilik","Хан ассорти на 6 человек","Khan platter for 6"), d:S("Shashlik, qanotlar, lyulya, sabzavotlar, kartoshka","Шашлык, крылышки, люля, овощи, картофель","Kebabs, wings, lyulya, vegetables, potatoes"), p:550000, img:"assorti-6" },
    { n:S("Xan assorti — 8 kishilik","Хан ассорти на 8 человек","Khan platter for 8"), d:S("Shashlik, qanotlar, sabzavotlar, kartoshka","Шашлык, крылышки, овощи, картофель","Kebabs, wings, vegetables, potatoes"), p:750000, img:"assorti-8" },
    { n:S("Xan assorti — 10 kishilik","Хан ассорти на 10 человек","Khan platter for 10"), d:S("Katta to'y tovog'i: shashlik, lyulya, qanotlar, sabzavotlar","Большое блюдо: шашлык, люля, крылышки, овощи","Feast platter: kebabs, lyulya, wings, vegetables"), p:950000, tag:"hit", img:"assorti-10" }
  ]},
  { id:"shashlik", icon:"fa-fire-flame-curved", n:S("Shashlik","Шашлык","Kebabs"), items:[
    { n:S("Tovuq shashlik","Куриный шашлык","Chicken kebab"), d:S("Ko'mirda, piyoz bilan","На углях, с луком","Charcoal grilled, with onion"), p:22000, img:"shashlyk-kuriny" },
    { n:S("Qanotchalar","Крылышки","Chicken wings"), d:S("Ko'mirda, piyoz bilan","На углях, с луком","Charcoal grilled, with onion"), p:22000, img:"krylyshki" },
    { n:S("Rulet","Рулет","Rulet"), d:S("Qiymali shashlik, piyoz bilan","Шашлык из фарша, с луком","Minced meat kebab, with onion"), p:25000, img:"rulet" }
  ]},
  { id:"shorva", icon:"fa-mug-hot", n:S("Sho'rvalar","Супы","Soups"), items:[
    { n:S("Sho'rva","Шурпа","Shurpa"), d:S("Go'sht va kartoshka","Мясо и картофель","Meat and potatoes"), p:45000, ic:"fa-mug-hot" },
    { n:S("Norin","Нарын","Naryn"), d:S("Sorpa bilan","С бульоном","With broth"), p:35000, w:S("kichik","малый","small"), ic:"fa-bowl-food" },
    { n:S("Norin","Нарын","Naryn"), d:S("Sorpa bilan","С бульоном","With broth"), p:40000, w:S("katta","большой","large"), ic:"fa-bowl-food" },
    { n:S("Chuchvara","Пельмени","Pelmeni"), d:S("Ko'katlar bilan","С зеленью","With herbs"), p:35000, ic:"fa-bowl-food" },
    { n:S("Frikadelkali sho'rva","Суп с фрикадельками","Meatball soup"), d:S("Ugra va sabzavotlar","Лапша и овощи","Noodles and vegetables"), p:40000, ic:"fa-mug-hot" },
    { n:S("Okroshka","Окрошка","Okroshka"), d:S("Sovuq sho'rva","Холодный суп","Cold soup"), p:null, ic:"fa-snowflake" }
  ]},
  { id:"salat", icon:"fa-leaf", n:S("Salatlar","Салаты","Salads"), items:[
    { n:S("Grekcha","Греческий","Greek"), d:S("Sabzavotlar, pishloq, zaytun","Овощи, сыр, маслины","Vegetables, cheese, olives"), p:55000, img:"grecheskiy" },
    { n:S("Sezar","Цезарь","Caesar"), d:S("Tovuq, pishloq, bedana tuxumi","Курица, сыр, перепелиные яйца","Chicken, cheese, quail eggs"), p:50000, tag:"hit", img:"tsezar" },
    { n:S("Julia","Джулия","Julia"), d:S("","",""), p:45000, img:"julia" },
    { n:S("Pod vodochku","Под водочку","Pod vodochku"), d:S("Go'sht va qo'ziqorin","Мясо и грибы","Meat and mushrooms"), p:50000, img:"pod-vodochku" },
    { n:S("Chiroqchi","Чирокчи","Chirokchi"), d:S("","",""), p:35000, img:"chirokchi" },
    { n:S("Pikantniy","Пикантный","Piquant"), d:S("","",""), p:45000, img:"pikantnyy" },
    { n:S("Xan","Хан","Khan"), d:S("Restoranning nomdosh salati","Фирменный салат ресторана","The house salad"), p:45000, img:"xan" },
    { n:S("Prints","Принц","Prince"), d:S("","",""), p:45000, img:"prints" },
    { n:S("Smak","Смак","Smak"), d:S("","",""), p:45000, img:"smak" },
    { n:S("Chen-son","Чен-сон","Chen-son"), d:S("","",""), p:50000, ic:"fa-pepper-hot" },
    { n:S("Rukkolali salat","Салат с рукколой","Arugula salad"), d:S("","",""), p:50000, ic:"fa-leaf" },
    { n:S("Sharqona","Восточный","Oriental"), d:S("","",""), p:45000, ic:"fa-leaf" },
    { n:S("Mujskoy kapriz","Мужской каприз","Men's Caprice"), d:S("","",""), p:45000, ic:"fa-leaf" },
    { n:S("Gnezdo gluxarya","Гнездо глухаря","Grouse's Nest"), d:S("","",""), p:45000, ic:"fa-leaf" },
    { n:S("Go'shtli olivye","Оливье с мясом","Olivier with meat"), d:S("","",""), p:45000, ic:"fa-leaf" }
  ]},
  { id:"ichimlik", icon:"fa-glass-water", n:S("Ichimliklar","Напитки","Drinks"), items:[
    { n:S("Qimiz","Кымыз","Kumis"), d:S("Biya sutidan milliy ichimlik","Национальный напиток из кобыльего молока","Traditional fermented mare's milk"), p:50000, img:"kymyz" }
  ]}
];
