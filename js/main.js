/**
 * Dr Food - Podgorica
 * Dynamic Multi-language Data & Interactive Script
 */

const translations = {
    sr: {
        nav_menu: "Meni",
        nav_about: "O nama",
        nav_reviews: "Utisci",
        nav_contact: "Kontakt",
        call_now: "Pozovi",
        hero_title: "Svježe, toplo i ukusno u srcu Podgorice",
        hero_subtitle: "Hrskave pice, tradicionalni bureci i pite, bogati sendviči i vrhunska kafa. Pripremljeno za vas svakog dana na Ljubljanskoj.",
        hero_btn_menu: "Pogledaj Meni",
        hours_label: "Radno vrijeme:",
        hours_val: "Pon-Pet: 07-18h | Sub: 07-17h",
        address_label: "Lokacija:",
        hero_float_title: "Pice & Bureci",
        hero_float_desc: "Pečeno sa pažnjom svakog jutra",
        showcase_tagline: "Naša Ponuda",
        showcase_title: "Zašto nas Podgorica voli od 2015. godine",
        sc_1_title: "🍕 Pice po vašoj mjeri",
        sc_1_desc: "Pripremljene po receptu sa bogatim sastojcima i hrskavom koricom u veličinama 180g i 360g.",
        sc_2_title: "🥟 Domaći Burek & Pite",
        sc_2_desc: "Sveže pečen burek i pite sa sirom, mesom, spanaćem ili krompirom. Idealan doručak uz domaći jogurt.",
        sc_3_title: "🥪 Sendviči & Tortilje",
        sc_3_desc: "Pršut, kulen, piletina, tunjevina ili povrće sa finim kremastim kajmakom i svežom salatom.",
        sc_4_title: "☕ Kafa & Osveženja",
        sc_4_desc: "Vrhunski espresso, cappuccino, Deutch kafa, domaća kuvana kafa, kao i prirodni cijeđeni sokovi.",
        menu_tagline: "Kompletan Jelovnik",
        menu_title: "Dr Food Meni",
        menu_search_ph: "Pretraži meni (npr. Capricciosa, Burek...)",
        reviews_tagline: "Gostoprimstvo & Kvalitet",
        reviews_title: "Šta kažu naši gosti",
        reviews_google: "na Google recenzijama",
        contact_heading: "Radno Vrijeme & Lokacija",
        contact_address_label: "Adresa:",
        contact_phone_label: "Telefon za narudžbe & informacije:",
        contact_hours_label: "Radno vrijeme:",
        mon_fri: "Ponedjeljak — Petak:",
        sat: "Subota:",
        sun: "Nedjelja:",
        closed: "Zatvoreno",
        call_btn_text: "Pozovi za dostavu / preuzimanje",
        open_gmaps: "Otvori u Google Mapama ↗",
        footer_sub: "Brza hrana & pekara sa tradicijom od 2015. godine u Podgorici.",
        float_call: "Pozovi +382 69 015 666",
        cat_all: "Sve"
    },
    en: {
        nav_menu: "Menu",
        nav_about: "About",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        call_now: "Call",
        hero_title: "Fresh, warm & delicious in the heart of Podgorica",
        hero_subtitle: "Crispy pizzas, traditional burek and pies, hearty sandwiches, and rich coffee. Freshly prepared for you every day on Ljubljanska.",
        hero_btn_menu: "View Menu",
        hours_label: "Working Hours:",
        hours_val: "Mon-Fri: 07-18h | Sat: 07-17h",
        address_label: "Location:",
        hero_float_title: "Pizzas & Bureks",
        hero_float_desc: "Baked with care every morning",
        showcase_tagline: "Our Specialties",
        showcase_title: "Why Podgorica has loved us since 2015",
        sc_1_title: "🍕 Crafted Pizzas",
        sc_1_desc: "Prepared with delicious toppings and crispy crust in 180g and 360g portions.",
        sc_2_title: "🥟 Homemade Burek & Pies",
        sc_2_desc: "Freshly baked burek and pies filled with cheese, meat, spinach, or potatoes. Perfect breakfast with local yogurt.",
        sc_3_title: "🥪 Sandwiches & Tortillas",
        sc_3_desc: "Prosciutto, kulen sausage, chicken, tuna, or fresh vegetables with creamy kajmak.",
        sc_4_title: "☕ Coffee & Refreshments",
        sc_4_desc: "Premium espresso, cappuccino, Deutch coffee, traditional Turkish coffee, and natural juices.",
        menu_tagline: "Complete Selection",
        menu_title: "Dr Food Menu",
        menu_search_ph: "Search menu (e.g. Capricciosa, Burek...)",
        reviews_tagline: "Hospitality & Quality",
        reviews_title: "What Our Guests Say",
        reviews_google: "on Google reviews",
        contact_heading: "Opening Hours & Location",
        contact_address_label: "Address:",
        contact_phone_label: "Phone for orders & info:",
        contact_hours_label: "Working hours:",
        mon_fri: "Monday — Friday:",
        sat: "Saturday:",
        sun: "Sunday:",
        closed: "Closed",
        call_btn_text: "Call for order / pickup",
        open_gmaps: "Open in Google Maps ↗",
        footer_sub: "Fast food & bakery tradition since 2015 in Podgorica.",
        float_call: "Call +382 69 015 666",
        cat_all: "All"
    },
    ru: {
        nav_menu: "Меню",
        nav_about: "О нас",
        nav_reviews: "Отзывы",
        nav_contact: "Контакты",
        call_now: "Позвонить",
        hero_title: "Свежо, тепло и вкусно в самом сердце Подгорицы",
        hero_subtitle: "Хрустящая пицца, традиционные буреки и пироги, сытные сэндвичи и отличный кофе. Готовим для вас каждый день на Люблянской.",
        hero_btn_menu: "Смотреть меню",
        hours_label: "Часы работы:",
        hours_val: "Пн-Пт: 07-18h | Сб: 07-17h",
        address_label: "Локация:",
        hero_float_title: "Пицца и Буреки",
        hero_float_desc: "Выпекаем с заботой каждое утро",
        showcase_tagline: "Наша Выпечка",
        showcase_title: "Почему Подгорица выбирает нас с 2015 года",
        sc_1_title: "🍕 Аппетитная Пицца",
        sc_1_desc: "Приготовленная из богатых ингредиентов с хрустящей корочкой. Порции 180г и 360г.",
        sc_2_title: "🥟 Домашний Бурек и Пироги",
        sc_2_desc: "Свежевыпеченный бурек и пироги с сыром, мясом, шпинатом или картофелем. Идеальный завтрак с йогуртом.",
        sc_3_title: "🥪 Сэндвичи и Тортильи",
        sc_3_desc: "Пршут, кулен, курица, тунец или овощи с нежным каймаком и свежими листьями салата.",
        sc_4_title: "☕ Кофе и Напитки",
        sc_4_desc: "Отличный эспрессо, капучино, Deutch kafa, кофе по-турецки и свежевыжатые соки.",
        menu_tagline: "Полное Меню",
        menu_title: "Меню Dr Food",
        menu_search_ph: "Поиск по меню (напр. Капричоза, Бурек...)",
        reviews_tagline: "Гостеприимство и Качество",
        reviews_title: "Отзывы наших гостей",
        reviews_google: "на Google Отзывах",
        contact_heading: "Часы работы и Адрес",
        contact_address_label: "Адрес:",
        contact_phone_label: "Телефон для заказов:",
        contact_hours_label: "Часы работы:",
        mon_fri: "Понедельник — Пятница:",
        sat: "Суббота:",
        sun: "Воскресенье:",
        closed: "Выходной",
        call_btn_text: "Позвонить для заказа / самовывоза",
        open_gmaps: "Открыть в Google Картах ↗",
        footer_sub: "Быстрое питание и пекарня с традицией с 2015 года в Подгорице.",
        float_call: "Позвонить +382 69 015 666",
        cat_all: "Все"
    }
};

// FULL MENU DATA WITH MULTI-LANG DESCRIPTION AND CATEGORY NAMES
const menuData = [
    {
        category_id: "pizze",
        names: { sr: "🍕 Pizze", en: "🍕 Pizzas", ru: "🍕 Пицца" },
        items: [
            {
                name: "Capricciosa",
                desc: { sr: "pelat, sir, šunka, šampinjoni, origano", en: "tomato sauce, cheese, ham, mushrooms, oregano", ru: "пелат, сыр, ветчина, шампиньоны, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Margarita",
                desc: { sr: "pelat, sir, origano", en: "tomato sauce, cheese, oregano", ru: "пелат, сыр, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Diavolo",
                desc: { sr: "pelat, sir, kulen, šampinjoni, origano", en: "tomato sauce, cheese, spicy kulen sausage, mushrooms, oregano", ru: "пелат, сыр, кулен, шампиньоны, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Napolitana",
                desc: { sr: "pelat, sir, tunjevina, šampinjoni, origano", en: "tomato sauce, cheese, tuna, mushrooms, oregano", ru: "пелат, сыр, тунец, шампиньоны, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Vegetariana",
                desc: { sr: "pelat, sir, povrće, origano", en: "tomato sauce, cheese, vegetables, oregano", ru: "пелат, сыр, овощи, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Polo",
                desc: { sr: "pelat, sir, piletina, šampinjoni, origano", en: "tomato sauce, cheese, chicken, mushrooms, oregano", ru: "пелат, сыр, курица, шампиньоны, орегано" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Piroška",
                desc: { sr: "pelat, sir, šunka, šampinjoni, kajmak/pavlaka, origano", en: "tomato sauce, cheese, ham, mushrooms, kajmak cream, oregano", ru: "пелат, сыр, ветчина, шампиньоны, каймак/сливки, орегано" },
                price: "4.20 / 8.40 €",
                size: "180g / 360g"
            }
        ]
    },
    {
        category_id: "sendvici",
        names: { sr: "🥪 Sendviči", en: "🥪 Sandwiches", ru: "🥪 Сэндвичи" },
        items: [
            {
                name: "Sendvič sa pršutom",
                desc: { sr: "pršut, sir, zelena salata, paradajz, kajmak", en: "prosciutto, cheese, lettuce, tomato, kajmak cream", ru: "пршут, сыр, зеленый салат, помидор, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Sendvič sa kulenom",
                desc: { sr: "kulen, sir, zelena salata, paradajz, kajmak", en: "spicy kulen sausage, cheese, lettuce, tomato, kajmak", ru: "кулен, сыр, зеленый салат, помидор, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Sendvič sa tunjevinom",
                desc: { sr: "tunjevina, sir, zelena salata, paradajz, kajmak", en: "tuna, cheese, lettuce, tomato, kajmak cream", ru: "тунец, сыр, зеленый салат, помидор, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Sendvič sa piletinom",
                desc: { sr: "piletina, sir, zelena salata, paradajz, kajmak", en: "chicken, cheese, lettuce, tomato, kajmak cream", ru: "курица, сыр, зеленый салат, помидор, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Sendvič sa šunkom",
                desc: { sr: "šunka, sir, zelena salata, paradajz, kajmak", en: "ham, cheese, lettuce, tomato, kajmak cream", ru: "ветчина, сыр, зеленый салат, помидор, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            },
            {
                name: "Sendvič sa povrćem",
                desc: { sr: "povrće, sir, kajmak", en: "fresh vegetables, cheese, kajmak cream", ru: "овощи, сыр, каймак" },
                price: "3.60 / 7.20 €",
                size: "180g / 360g"
            }
        ]
    },
    {
        category_id: "omleti",
        names: { sr: "🍳 Omleti", en: "🍳 Omelettes", ru: "🍳 Омлеты" },
        items: [
            {
                name: "Omlet u lepinji",
                desc: { sr: "2 jaja, po izboru: pršut / kulen / šunka / povrće, sir", en: "2 eggs in flatbread, choice of: prosciutto / kulen / ham / veggies, cheese", ru: "2 яйца в лепешке, на выбор: пршут / кулен / ветчина / овощи, сыр" },
                price: "3.60 €",
                size: "200g"
            }
        ]
    },
    {
        category_id: "tortilje",
        names: { sr: "🌯 Tortilje", en: "🌯 Tortillas", ru: "🌯 Тортильи" },
        items: [
            {
                name: "Tortilja",
                desc: { sr: "pršut / kulen / šunka / piletina / povrće, sir, kajmak", en: "prosciutto / kulen / ham / chicken / veggies, cheese, kajmak", ru: "пршут / кулен / ветчина / курица / овощи, сыр, каймак" },
                price: "4.00 €",
                size: "180g"
            }
        ]
    },
    {
        category_id: "bureci",
        names: { sr: "🥟 Bureci i Pite", en: "🥟 Bureks & Pies", ru: "🥟 Буреки и Пироги" },
        items: [
            {
                name: "Burek",
                desc: { sr: "sa sirom, mesom, spanaćem, krompirom", en: "filled with cheese, meat, spinach, or potato", ru: "с сыром, мясом, шпинатом, картофелем" },
                price: "2.00 €",
                size: "250g"
            },
            {
                name: "Pite",
                desc: { sr: "sa sirom, mesom, spanaćem, krompirom", en: "filled with cheese, meat, spinach, or potato", ru: "с сыром, мясом, шпинатом, картофелем" },
                price: "6.00 €",
                size: "750g"
            }
        ]
    },
    {
        category_id: "priganice",
        names: { sr: "🥞 Priganice", en: "🥞 Priganice (Fritters)", ru: "🥞 Приганицы" },
        items: [
            {
                name: "Priganice",
                desc: { sr: "sa sirom, medom", en: "traditional Montenegrin dough fritters served with cheese & honey", ru: "традиционные пончики с сыром и медом" },
                price: "4.50 €",
                size: "10 kom / 10 pcs"
            }
        ]
    },
    {
        category_id: "palacinke",
        names: { sr: "🥞 Palačinke", en: "🥞 Pancakes", ru: "🥞 Блинчики" },
        items: [
            {
                name: "Slane palačinke",
                desc: { sr: "sa šunkom i sirom", en: "savory pancake with ham & cheese", ru: "соленые с ветчиной" },
                price: "4.80 €",
                size: "250g"
            },
            {
                name: "Slatka palačinka",
                desc: { sr: "krem, plazma keks", en: "sweet crepe with chocolate cream & Plazma biscuit", ru: "сладкие с кремом и печеньем Плазма" },
                price: "2.00 €",
                size: "120g"
            }
        ]
    },
    {
        category_id: "ostalo",
        names: { sr: "🍟 Ostalo", en: "🍟 Sides & Extras", ru: "🍟 Разное" },
        items: [
            {
                name: "Pomfrit",
                desc: { sr: "hrskavi krompirići", en: "crispy french fries", ru: "хрустящий картофель фри" },
                price: "2.20 €",
                size: "200g"
            },
            {
                name: "Jogurt",
                desc: { sr: "tečni jogurt", en: "liquid yogurt", ru: "йогурт" },
                price: "0.70 €",
                size: "0.18l"
            },
            {
                name: "Prilog",
                desc: { sr: "dodatni sos / dodatak", en: "extra topping / side sauce", ru: "добавка / соус" },
                price: "0.70 €",
                size: ""
            }
        ]
    },
    {
        category_id: "topli_napici",
        names: { sr: "☕ Topli Napici", en: "☕ Hot Drinks", ru: "☕ Горячие Напитки" },
        items: [
            { name: "Espresso", desc: { sr: "čisti espresso", en: "single espresso", ru: "эспрессо" }, price: "1.60 €", size: "" },
            { name: "Espresso sa mlijekom", desc: { sr: "espresso sa toplim mlijekom", en: "espresso with milk", ru: "эспрессо с молоком" }, price: "1.80 €", size: "" },
            { name: "Cappuccino", desc: { sr: "kremasti cappuccino", en: "creamy cappuccino", ru: "капучино" }, price: "1.90 €", size: "" },
            { name: "Deutch kafa", desc: { sr: "deutch kafa", en: "Deutch coffee", ru: "кофе по-немецки" }, price: "1.90 €", size: "" },
            { name: "Nescafe", desc: { sr: "instant kafa", en: "nescafe coffee", ru: "нескафе" }, price: "2.40 €", size: "" },
            { name: "Latte coffee", desc: { sr: "kafa sa dosta mlijeka", en: "caffè latte", ru: "латте" }, price: "2.50 €", size: "" },
            { name: "Kuvana kafa", desc: { sr: "tradicijska domaća kuvana kafa", en: "traditional Turkish style coffee", ru: "кофе по-турецки" }, price: "1.60 €", size: "" },
            { name: "Topla čokolada", desc: { sr: "gusta topla čokolada", en: "hot chocolate", ru: "горячий шоколад" }, price: "2.70 €", size: "" },
            { name: "Čokoladno mlijeko", desc: { sr: "čokoladno mlijeko", en: "chocolate milk", ru: "шоколадное молоко" }, price: "1.90 €", size: "" },
            { name: "Mlijeko", desc: { sr: "toplo mlijeko", en: "warm milk", ru: "молоко" }, price: "1.60 €", size: "" },
            { name: "Čaj", desc: { sr: "izbor čajeva", en: "assorted tea", ru: "чай в ассортименте" }, price: "2.00 €", size: "" }
        ]
    },
    {
        category_id: "sokovi",
        names: { sr: "🧃 Sokovi", en: "🧃 Soft Drinks", ru: "🧃 Соки и Газировка" },
        items: [
            { name: "Coca Cola", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" },
            { name: "Coca Cola Zero", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" },
            { name: "Fanta", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" },
            { name: "Sprite", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" },
            { name: "Schweppes Bitter Lemon", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" },
            { name: "Cocta", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.25l" },
            { name: "Nektar sokovi", desc: { sr: "voćni sokovi", en: "fruit juices", ru: "фруктовые соки" }, price: "2.90 €", size: "0.20l" },
            { name: "Ledeni čaj", desc: { sr: "hladni čaj", en: "ice tea", ru: "холодный чай" }, price: "2.90 €", size: "0.20l" },
            { name: "Cedevita", desc: { sr: "vitaminski napitak", en: "vitamin drink", ru: "витаминный напиток" }, price: "2.50 €", size: "0.20l" },
            { name: "Oranžina", desc: { sr: "", en: "", ru: "" }, price: "3.20 €", size: "0.25l" },
            { name: "Ivi", desc: { sr: "", en: "", ru: "" }, price: "2.90 €", size: "0.33l" }
        ]
    },
    {
        category_id: "prirodni_sokovi",
        names: { sr: "🍊 Prirodni Sokovi", en: "🍊 Fresh Juices", ru: "🍊 Свежевыжатые Соки" },
        items: [
            { name: "Limunada", desc: { sr: "svježa limunada", en: "fresh lemonade", ru: "свежий лимонад" }, price: "3.20 €", size: "0.25l" },
            { name: "Cijeđena pomorandža", desc: { sr: "100% cijeđeni narandžin sok", en: "freshly squeezed orange juice", ru: "свежевыжатый апельсиновый сок" }, price: "3.80 €", size: "0.25l" }
        ]
    },
    {
        category_id: "vode",
        names: { sr: "💧 Vode", en: "💧 Water", ru: "💧 Вода" },
        items: [
            { name: "Gazirana voda", desc: { sr: "mineralna voda", en: "sparkling water", ru: "газированная вода" }, price: "1.50 €", size: "0.25l" },
            { name: "Negazirana voda", desc: { sr: "izvorska voda", en: "still water", ru: "негазированная вода" }, price: "1.50 €", size: "0.50l" }
        ]
    },
    {
        category_id: "energetski",
        names: { sr: "⚡ Energetski Napici", en: "⚡ Energy Drinks", ru: "⚡ Энергетики" },
        items: [
            { name: "Red Bull", desc: { sr: "", en: "", ru: "" }, price: "4.00 €", size: "0.25l" },
            { name: "Guarana", desc: { sr: "", en: "", ru: "" }, price: "3.00 €", size: "0.25l" }
        ]
    },
    {
        category_id: "piva",
        names: { sr: "🍻 Piva", en: "🍻 Beers", ru: "🍻 Пиво" },
        items: [
            { name: "Nikšićko", desc: { sr: "domaće pivo", en: "local Montenegrin beer", ru: "местное пиво" }, price: "3.00 €", size: "0.33l" },
            { name: "Jelen", desc: { sr: "", en: "", ru: "" }, price: "3.00 €", size: "0.33l" },
            { name: "Bavaria", desc: { sr: "", en: "", ru: "" }, price: "3.40 €", size: "0.25l" },
            { name: "Stella Artois", desc: { sr: "", en: "", ru: "" }, price: "3.80 €", size: "0.33l" },
            { name: "Staropramen", desc: { sr: "", en: "", ru: "" }, price: "3.20 €", size: "0.33l" }
        ]
    },
    {
        category_id: "vina",
        names: { sr: "🍷 Vina", en: "🍷 Wines", ru: "🍷 Вина" },
        items: [
            { name: "Bijelo Vino", desc: { sr: "kvalitetno bijelo vino", en: "quality white wine", ru: "белое вино" }, price: "4.50 €", size: "0.187l" },
            { name: "Crno Vino", desc: { sr: "kvalitetno crno vino", en: "quality red wine", ru: "красное вино" }, price: "4.50 €", size: "0.187l" }
        ]
    },
    {
        category_id: "rakije",
        names: { sr: "🥃 Rakije i Likeri", en: "🥃 Spirits & Liqueurs", ru: "🥃 Крепкий Алкоголь" },
        items: [
            { name: "Loza", desc: { sr: "tradicijska lozovača", en: "traditional grape brandy", ru: "виноградная ракия" }, price: "2.20 €", size: "0.03l" },
            { name: "Vinjak", desc: { sr: "domaći vinjak", en: "brandy vinjak", ru: "виньяк" }, price: "2.20 €", size: "0.03l" },
            { name: "Gorki list", desc: { sr: "biljni liker", en: "herbal liqueur", ru: "травяной ликер" }, price: "2.40 €", size: "0.03l" }
        ]
    }
];

// REVIEWS DATA
const reviewsData = [
    {
        author: "Marko M.",
        stars: "⭐⭐⭐⭐⭐",
        text: {
            sr: "Sjajna hrana i brza usluga! Burek i pite su uvijek svježi i hrskavi, a pice ubedljivo najbolje u ovom dijelu Podgorice.",
            en: "Great food and fast service! The burek and pies are always fresh and crispy, and the pizzas are definitely the best in this part of Podgorica.",
            ru: "Отличная еда и быстрое обслуживание! Бурек и пироги всегда свежие и хрустящие, а пицца — безусловно лучшая в этой части Подгорицы."
        }
    },
    {
        author: "Elena V.",
        stars: "⭐⭐⭐⭐⭐",
        text: {
            sr: "Odličan doručak svakog jutra! Omlet u lepinji i domaća kafa su savršen početak radnog dana na Ljubljanskoj.",
            en: "Excellent breakfast every morning! Omelette in flatbread and local coffee are the perfect start to a workday on Ljubljanska.",
            ru: "Отличный завтрак каждое утро! Омлет в лепешке и домашний кофе — идеальное начало рабочего дня на Люблянской."
        }
    },
    {
        author: "Nikola P.",
        stars: "⭐⭐⭐⭐",
        text: {
            sr: "Obilne porcije i veoma pristupačne cijene. Sendvič sa pršutom i kajmakom je fantastičan!",
            en: "Generous portions and very affordable prices. The prosciutto and kajmak sandwich is fantastic!",
            ru: "Щедрые порции и очень доступные цены. Сэндвич с пршутом и каймаком — просто фантастика!"
        }
    },
    {
        author: "Sarah T.",
        stars: "⭐⭐⭐⭐⭐",
        text: {
            sr: "Sjajno mjesto za brzi ručak! Priganice sa sirom i medom su me oduševile, pravi ukus Crne Gore.",
            en: "Awesome spot for a quick bite! The priganice with cheese and honey blew me away, true taste of Montenegro.",
            ru: "Замечательное место для быстрого обеда! Приганицы с сыром и медом меня просто покорили, настоящий вкус Черногории."
        }
    }
];

// STATE MANAGEMENT
let currentLang = "sr";
let currentCategory = "all";
let searchQuery = "";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    
    setupNavigation();
    setupLanguageSwitcher();
    setupSearch();
    renderPills();
    renderMenu();
    renderReviews();
});

// MOBILE MENU & SCROLL HANDLING
function setupNavigation() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileClose = document.getElementById("mobileClose");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    mobileClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}

// LANGUAGE SWITCHER
function setupLanguageSwitcher() {
    const langBtns = document.querySelectorAll(".lang-btn");
    
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang === currentLang) return;

            langBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            currentLang = selectedLang;
            updateLanguageUI();
        });
    });
}

function updateLanguageUI() {
    // Translate static UI elements
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Translate input placeholders
    const placeholders = document.querySelectorAll("[data-i18n-ph]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Re-render Pills, Menu and Reviews
    renderPills();
    renderMenu();
    renderReviews();
}

// SEARCH
function setupSearch() {
    const searchInput = document.getElementById("menuSearch");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderMenu();
    });
}

// CATEGORY PILLS RENDER
function renderPills() {
    const pillsContainer = document.getElementById("categoryPills");
    pillsContainer.innerHTML = "";

    // "ALL" pill
    const allPill = document.createElement("button");
    allPill.className = `cat-pill ${currentCategory === 'all' ? 'active' : ''}`;
    allPill.textContent = translations[currentLang].cat_all || "Sve";
    allPill.addEventListener("click", () => {
        currentCategory = "all";
        renderPills();
        renderMenu();
    });
    pillsContainer.appendChild(allPill);

    // Dynamic category pills
    menuData.forEach(cat => {
        const pill = document.createElement("button");
        pill.className = `cat-pill ${currentCategory === cat.category_id ? 'active' : ''}`;
        pill.textContent = cat.names[currentLang] || cat.names['sr'];
        pill.addEventListener("click", () => {
            currentCategory = cat.category_id;
            renderPills();
            renderMenu();
        });
        pillsContainer.appendChild(pill);
    });
}

// RENDER MENU ITEMS
function renderMenu() {
    const menuContainer = document.getElementById("menuDisplay");
    menuContainer.innerHTML = "";

    let hasItems = false;

    menuData.forEach(cat => {
        if (currentCategory !== "all" && currentCategory !== cat.category_id) {
            return;
        }

        // Filter items by search query
        const filteredItems = cat.items.filter(item => {
            if (!searchQuery) return true;
            const nameMatch = item.name.toLowerCase().includes(searchQuery);
            const descMatch = (item.desc[currentLang] || "").toLowerCase().includes(searchQuery);
            return nameMatch || descMatch;
        });

        if (filteredItems.length === 0) return;

        hasItems = true;

        const catBlock = document.createElement("div");
        catBlock.className = "menu-category-block";

        const catTitle = document.createElement("h3");
        catTitle.className = "category-title-bar";
        catTitle.textContent = cat.names[currentLang] || cat.names['sr'];
        catBlock.appendChild(catTitle);

        const grid = document.createElement("div");
        grid.className = "menu-items-grid";

        filteredItems.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "menu-item-card";

            const descText = item.desc[currentLang] || item.desc['sr'] || "";
            const sizeBadge = item.size ? ` <span style="font-size: 0.75rem; color: #6B7280; font-weight: normal;">(${item.size})</span>` : "";

            itemCard.innerHTML = `
                <div>
                    <div class="item-top">
                        <span class="item-name">${item.name}${sizeBadge}</span>
                        <span class="item-price">${item.price}</span>
                    </div>
                    ${descText ? `<p class="item-desc">${descText}</p>` : ''}
                </div>
            `;
            grid.appendChild(itemCard);
        });

        catBlock.appendChild(grid);
        menuContainer.appendChild(catBlock);
    });

    if (!hasItems) {
        menuContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #6B7280;">
                <p>Nije pronađena hrana za vašu pretragu.</p>
            </div>
        `;
    }
}

// RENDER REVIEWS
function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    grid.innerHTML = "";

    reviewsData.forEach(rev => {
        const card = document.createElement("div");
        card.className = "review-card";
        card.innerHTML = `
            <div class="review-header">
                <span class="review-author">${rev.author}</span>
                <span class="review-stars">${rev.stars}</span>
            </div>
            <p class="review-text">"${rev.text[currentLang] || rev.text['sr']}"</p>
        `;
        grid.appendChild(card);
    });
}