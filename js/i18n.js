/* CinnaRolls — internacionalización ES/EN
   Detecta el idioma del dispositivo, recuerda la preferencia del usuario
   y traduce todo el contenido marcado con data-i18n / data-i18n-caption /
   data-i18n-placeholder. */
window.CinnaI18n = (function () {
  "use strict";

  var dict = {
    /* ================= ESPAÑOL ================= */
    es: {
      "nav.home": "Inicio",
      "nav.about": "Nosotros",
      "nav.menu": "Menú",
      "nav.gallery": "Galería",
      "nav.visit": "Visítanos",
      "nav.reserve": "Reservar",

      "hero.title": "El placer de lo<br><em>recién horneado</em>,<br>frente al mar",
      "hero.sub": "Roles de canela que salen del horno cada mañana, café de especialidad y cocina fresca y balanceada. Un rincón dulce en el corazón del malecón para empezar bien el día… o terminarlo mejor.",
      "hero.btnMenu": "Explorar el menú",
      "hero.btnReserve": "Reservar mesa",
      "hero.chipHours": "Todos los días · 7:00 am – 10:30 pm",
      "hero.chipBranches": "2 sucursales en el Centro",
      "hero.cardA.t": "Horneado diario",
      "hero.cardA.s": "Del horno a tu mesa",
      "hero.cardB.t": "Café de especialidad",
      "hero.cardB.s": "Caliente o frío, como te gusta",

      "mq.1": "Roles de canela",
      "mq.2": "Café de especialidad",
      "mq.3": "Desayunos",
      "mq.4": "Postres",
      "mq.5": "Comida balanceada",
      "mq.6": "Frappes",

      "about.eyebrow": "Lo que nos hace únicos",
      "about.title": "Cada platillo, una pequeña<br><em>obra de arte</em>",
      "about.lead": "En CinnaRolls creemos que comer rico y cuidarte no están peleados. Por eso cuidamos cada detalle: del glaseado del rol a la presentación del plato.",
      "about.f1.t": "Roles horneados cada mañana",
      "about.f1.p": "Original, manzana, nuez, guayaba, Nutella… masa suave, canela generosa y glaseado que se derrite. Nunca del día anterior.",
      "about.f2.t": "Café con vista al malecón",
      "about.f2.p": "Espresso, latte helado o frappe: tu bebida perfecta con la brisa del Mar de Cortés a unos pasos de tu mesa.",
      "about.f3.t": "Sano y balanceado, también",
      "about.f3.p": "Avocado toast, omelettes, ensaladas y hot cakes veganos. Opciones frescas y ligeras sin sacrificar ni una pizca de sabor.",
      "about.f4.t": "Un rincón para quedarse",
      "about.f4.p": "Ladrillo, luz cálida y aroma a canela. El ambiente perfecto para desayunar en familia, trabajar o platicar sin prisa.",
      "about.quote": "“Un rol de canela calientito, un buen café<br>y el atardecer del malecón. <em>Así sabe La Paz.</em>”",
      "about.btnFind": "Encuéntranos",

      "menu.eyebrow": "Nuestro menú",
      "menu.title": "Antojos para <em>cada hora</em> del día",
      "menu.lead": "Desayunos de 7:00 am a 1:00 pm · Comidas de 1:00 pm a 9:30 pm · Roles y café, todo el día.",
      "menu.tabRoles": "🥐 Roles &amp; Postres",
      "menu.tabBreakfast": "🍳 Desayunos",
      "menu.tabLunch": "🥪 Comidas",
      "menu.tabDrinks": "🥤 Bebidas",
      "menu.note": "Precios en pesos mexicanos, pueden variar sin previo aviso · Encuentra el menú completo en sucursal.",

      "badge.fav": "El favorito",
      "badge.flag": "Insignia",
      "badge.light": "Ligero",
      "badge.vegan": "Vegano",
      "badge.top": "Top",
      "badge.fresh": "Fresca",
      "badge.refresh": "Refrescante",
      "badge.natural": "Natural",

      "menu.figRoles": "Rol con Nutella, el consentido de la casa",
      "menu.r1.n": "Rol de Canela Original",
      "menu.r1.d": "Nuestra receta clásica: masa suave, canela y glaseado cremoso. Horneado del día, siempre.",
      "menu.r2.n": "Roles de sabor",
      "menu.r2.d": "Manzana, nuez, plátano, guayaba, Nutella o chocolate. Elige tu espiral favorita.",
      "menu.r3.n": "Rol de Canela Deli",
      "menu.r3.d": "La versión salada: relleno de jamón, tocino, queso crema y queso chihuahua.",
      "menu.r4.n": "Rol de canela y tocino",
      "menu.r4.d": "Dulce y salado en su punto: rol con tocino y miel, acompañado de fruta.",
      "menu.r5.n": "Pasteles",
      "menu.r5.d": "Cheesecake de fresa, Oreo o brownie · zanahoria · tiramisú · chocolate · Nutella · pay de manzana.",
      "menu.r6.n": "Panqués",
      "menu.r6.d": "Dátil, zanahoria, limón o brownie. Perfectos para acompañar tu café.",
      "menu.r7.n": "Galletas",
      "menu.r7.d": "De avena o de mantequilla decorada.",

      "menu.figBreakfast": "Chilaquiles verdes con el toque de la casa",
      "menu.b1.n": "Desayuno CinnaRolls",
      "menu.b1.d": "Rol de canela estilo “francés” con par de huevos, tocino, jamón, papa y fruta.",
      "menu.b2.n": "Desayuno de la Costa",
      "menu.b2.d": "Guiso de machaca de marlín con chilaquiles, par de huevos al gusto y frijol.",
      "menu.b3.n": "Desayuno Sin Culpa",
      "menu.b3.d": "Huevos revueltos con morrón y queso fresco, ensalada y quesadilla de maíz en salsa verde o roja.",
      "menu.b4.n": "Chilaquiles",
      "menu.b4.d": "Naturales con queso, con pollo, con huevos, con arrachera o chicharrón prensado. Salsa verde o roja.",
      "menu.b5.n": "Omelette al gusto",
      "menu.b5.d": "Tres ingredientes a elegir, acompañado de frijol y papa. También en versión de claras.",
      "menu.b6.n": "Hot cakes veganos",
      "menu.b6.d": "Hechos con avena, leche de soya y plátano, acompañados de fruta fresca.",
      "menu.b7.n": "Avocado toast",
      "menu.b7.d": "Pan integral de la casa con guacamole, parmesano y huevo estrellado, con ensalada.",

      "menu.figLunch": "Burritos de machaca, sabor de Baja",
      "menu.l1.n": "Panini de arrachera",
      "menu.l1.d": "Arrachera, queso chihuahua, tocino, queso fresco, tomate, espinaca y morrón.",
      "menu.l2.n": "Panini pollo pesto",
      "menu.l2.d": "Pollo a la plancha, queso chihuahua, queso fresco, parmesano, pesto y espinaca.",
      "menu.l3.n": "Baguette arrachera BBQ",
      "menu.l3.d": "Con lechuga, espinaca, tomate, pepino, morrón, germinado y vinagreta.",
      "menu.l4.n": "Club sándwich",
      "menu.l4.d": "Pollo, jamón, queso chihuahua, lechuga, espinaca, tomate, germinado, mayonesa y mostaza.",
      "menu.l5.n": "Quesadillas de marlín",
      "menu.l5.d": "Tres quesadillas con machaca de marlín, servidas con frijoles refritos.",
      "menu.l6.n": "Burritos de machaca",
      "menu.l6.d": "Tres burritos de machaca de res en tortilla de harina con frijoles refritos.",
      "menu.l7.n": "Ensalada de manzana",
      "menu.l7.d": "Lechugas, espinaca, manzana verde, queso fresco, aguacate, cacahuates garapiñados y vinagreta.",

      "menu.figDrinks": "Frappe de Oreo, dulzura bien fría",
      "menu.d1.n": "Frappes con café",
      "menu.d1.d": "Original, caramelo, cajeta, cereza, moka, Oreo o chocolate blanco. Ferrero, coco y mazapán $82 / $88.",
      "menu.d2.n": "Frappe chai",
      "menu.d2.d": "Especias, vainilla, manzana o matcha.",
      "menu.d3.n": "Ice latte",
      "menu.d3.d": "Con sabor extra (CinnaRolls, caramelo, moka, cajeta, irlandés, Nutella o coco) $75 / $85.",
      "menu.d4.n": "Smoothies",
      "menu.d4.d": "Base de leche: fresa, mango, piña, plátano o moras.",
      "menu.d5.n": "Soda italiana",
      "menu.d5.d": "Fresa, cereza, frambuesa, kiwi, arándano, maracuyá, durazno, manzana verde y más.",
      "menu.d6.n": "Tisanas y tés",
      "menu.d6.d": "Verde, menta, chai herbal, manzanilla, frutos rojos, maracuyá, ponche de guayaba…",
      "menu.d7.n": "Jugos y limonadas",
      "menu.d7.d": "Jugo de naranja, jugo verde, limonada o naranjada natural o mineral.",

      "gal.eyebrow": "Para antojarte",
      "gal.title": "Se ve rico… <em>y sabe mejor</em>",
      "gal.lead": "Un vistazo a lo que sale de nuestro horno y de nuestra barra todos los días.",
      "gal.c1": "Vitrina de roles recién glaseados — llegan calientitos cada mañana",
      "gal.c2": "Rol clásico con lattes helados, en la barra",
      "gal.c3": "Chilaquiles verdes con crema y queso fresco",
      "gal.c4": "Desayuno americano: huevos, tocino y rol espolvoreado",
      "gal.c5": "Nuestro rol coronado con Nutella",
      "gal.c6": "Omelette con ensalada fresca y fruta de temporada",
      "gal.c7": "Frappes de Oreo y caramelo, bien fríos",
      "gal.c8": "Avocado toast con huevo estrellado y ensalada",
      "gal.c9": "Rol de canela con corazón — hecho con amor",
      "gal.c10": "Burritos de machaca con frijoles refritos",
      "gal.c11": "Café para llevar y caminar el malecón",
      "gal.c12": "Nuestra barra: pasteles, muffins y roles del día",

      "res.eyebrow": "Reserva tu visita",
      "res.title": "Tu mesa te espera,<br><em>a un WhatsApp</em> de distancia",
      "res.lead": "Cuéntanos cuándo vienes y cuántos son. Nosotros nos encargamos de que tu lugar esté listo, con aroma a canela incluido.",
      "res.s1": "<strong>1.</strong> Llena los datos de tu visita",
      "res.s2": "<strong>2.</strong> Envíanos el mensaje por WhatsApp",
      "res.s3": "<strong>3.</strong> Llega y disfruta 🥐",
      "form.title": "Agenda tu mesa",
      "form.name": "Nombre",
      "form.namePh": "Tu nombre",
      "form.people": "Personas",
      "form.date": "Fecha",
      "form.time": "Hora",
      "form.branch": "Sucursal",
      "form.submit": "Reservar por WhatsApp",
      "form.hint": "Se abrirá WhatsApp con tu mensaje listo para enviar.",

      "visit.eyebrow": "Visítanos",
      "visit.title": "Dos rincones con aroma<br>a canela <em>en La Paz</em>",
      "visit.hours": "<strong>Todos los días</strong>&nbsp;·&nbsp;7:00 am – 10:30 pm",
      "visit.loc1.name": "Sucursal Malecón",
      "visit.loc1.addr": "Paseo Álvaro Obregón 550, Centro,<br>frente al malecón de La Paz",
      "visit.loc2.name": "Sucursal Centro Cultural",
      "visit.loc2.addr": "16 de Septiembre 120, esq. Belisario Domínguez, Centro",
      "visit.directions": "Cómo llegar",
      "map.hours": "Todos los días · 7:00 am – 10:30 pm",
      "map.fallback": "No pudimos mostrar el mapa en este dispositivo. Abre la ubicación en Google Maps:",

      "footer.tagline": "Roles de canela, café y cocina fresca frente al Mar de Cortés. Hechos con calma, servidos con cariño.",
      "footer.explore": "Explora",
      "footer.reservations": "Reservaciones",
      "footer.hoursH": "Horario",
      "footer.hoursP": "Todos los días<br>7:00 am – 10:30 pm",
      "footer.resH": "Reservaciones",
      "footer.branchesH": "Sucursales",
      "footer.made": "— Hecho con <span class=\"heart\">♥</span> y mucha canela.",

      "wa.hero": "¡Hola CinnaRolls! 🥐 Me gustaría reservar una mesa.",
      "wa.greeting": "¡Hola CinnaRolls! 🥐 Me gustaría reservar una mesa.",
      "wa.name": "Nombre",
      "wa.people": "Personas",
      "wa.date": "Fecha",
      "wa.time": "Hora",
      "wa.branch": "Sucursal",
      "wa.closing": "¿Me confirman disponibilidad? ¡Gracias!"
    },

    /* ================= ENGLISH ================= */
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.visit": "Visit Us",
      "nav.reserve": "Book",

      "hero.title": "The pleasure of<br><em>fresh-baked</em> goodness,<br>by the sea",
      "hero.sub": "Cinnamon rolls straight out of the oven every morning, specialty coffee, and fresh, balanced cooking. A sweet corner in the heart of the malecón to start your day right… or end it even better.",
      "hero.btnMenu": "Explore the menu",
      "hero.btnReserve": "Book a table",
      "hero.chipHours": "Open daily · 7:00 am – 10:30 pm",
      "hero.chipBranches": "2 locations downtown",
      "hero.cardA.t": "Baked daily",
      "hero.cardA.s": "From our oven to your table",
      "hero.cardB.t": "Specialty coffee",
      "hero.cardB.s": "Hot or iced, your way",

      "mq.1": "Cinnamon rolls",
      "mq.2": "Specialty coffee",
      "mq.3": "Breakfast",
      "mq.4": "Desserts",
      "mq.5": "Balanced food",
      "mq.6": "Frappes",

      "about.eyebrow": "What makes us unique",
      "about.title": "Every dish, a little<br><em>work of art</em>",
      "about.lead": "At CinnaRolls we believe eating well and treating yourself go hand in hand. That's why we care for every detail — from the glaze on the roll to the plating of each dish.",
      "about.f1.t": "Rolls baked every morning",
      "about.f1.p": "Original, apple, pecan, guava, Nutella… soft dough, generous cinnamon and icing that melts in your mouth. Never day-old.",
      "about.f2.t": "Coffee with a malecón view",
      "about.f2.p": "Espresso, iced latte or frappe: your perfect drink with the Sea of Cortez breeze just steps from your table.",
      "about.f3.t": "Healthy & balanced, too",
      "about.f3.p": "Avocado toast, omelettes, salads and vegan pancakes. Fresh, light options without giving up an ounce of flavor.",
      "about.f4.t": "A corner worth staying in",
      "about.f4.p": "Brick walls, warm light and the scent of cinnamon. The perfect spot for a family breakfast, remote work or a long, easy chat.",
      "about.quote": "“A warm cinnamon roll, a good coffee<br>and the malecón sunset. <em>That's how La Paz tastes.</em>”",
      "about.btnFind": "Find us",

      "menu.eyebrow": "Our menu",
      "menu.title": "Cravings for <em>every hour</em> of the day",
      "menu.lead": "Breakfast 7:00 am – 1:00 pm · Lunch & dinner 1:00 pm – 9:30 pm · Rolls and coffee, all day long.",
      "menu.tabRoles": "🥐 Rolls &amp; Desserts",
      "menu.tabBreakfast": "🍳 Breakfast",
      "menu.tabLunch": "🥪 Lunch",
      "menu.tabDrinks": "🥤 Drinks",
      "menu.note": "Prices in Mexican pesos, subject to change without notice · Full menu available in store.",

      "badge.fav": "The favorite",
      "badge.flag": "Signature",
      "badge.light": "Light",
      "badge.vegan": "Vegan",
      "badge.top": "Top pick",
      "badge.fresh": "Fresh",
      "badge.refresh": "Refreshing",
      "badge.natural": "Natural",

      "menu.figRoles": "Nutella roll, the house favorite",
      "menu.r1.n": "Original Cinnamon Roll",
      "menu.r1.d": "Our classic recipe: soft dough, cinnamon and creamy icing. Baked fresh daily, always.",
      "menu.r2.n": "Flavored rolls",
      "menu.r2.d": "Apple, pecan, banana, guava, Nutella or chocolate. Pick your favorite swirl.",
      "menu.r3.n": "Deli Cinnamon Roll",
      "menu.r3.d": "The savory version: filled with ham, bacon, cream cheese and Chihuahua cheese.",
      "menu.r4.n": "Cinnamon & bacon roll",
      "menu.r4.d": "Sweet and savory at its best: roll with bacon and honey, served with fruit.",
      "menu.r5.n": "Cakes",
      "menu.r5.d": "Strawberry, Oreo or brownie cheesecake · carrot · tiramisu · chocolate · Nutella · apple pie.",
      "menu.r6.n": "Loaf cakes",
      "menu.r6.d": "Date, carrot, lemon or brownie. Perfect with your coffee.",
      "menu.r7.n": "Cookies",
      "menu.r7.d": "Oatmeal or decorated butter cookies.",

      "menu.figBreakfast": "Green chilaquiles with our house touch",
      "menu.b1.n": "CinnaRolls Breakfast",
      "menu.b1.d": "French-toast-style cinnamon roll with two eggs, bacon, ham, potatoes and fruit.",
      "menu.b2.n": "Coastal Breakfast",
      "menu.b2.d": "Marlin machaca stew with chilaquiles, two eggs any style and beans.",
      "menu.b3.n": "Guilt-Free Breakfast",
      "menu.b3.d": "Scrambled eggs with bell pepper and fresh cheese, salad and a corn quesadilla in green or red salsa.",
      "menu.b4.n": "Chilaquiles",
      "menu.b4.d": "Plain with cheese, or with chicken, eggs, arrachera steak or pressed chicharrón. Green or red salsa.",
      "menu.b5.n": "Build-your-own omelette",
      "menu.b5.d": "Three fillings of your choice, served with beans and potatoes. Egg-white version available.",
      "menu.b6.n": "Vegan pancakes",
      "menu.b6.d": "Made with oats, soy milk and banana, served with fresh fruit.",
      "menu.b7.n": "Avocado toast",
      "menu.b7.d": "House whole-grain bread with guacamole, parmesan and a fried egg, served with salad.",

      "menu.figLunch": "Machaca burritos, a taste of Baja",
      "menu.l1.n": "Arrachera steak panini",
      "menu.l1.d": "Arrachera steak, Chihuahua cheese, bacon, fresh cheese, tomato, spinach and bell pepper.",
      "menu.l2.n": "Chicken pesto panini",
      "menu.l2.d": "Grilled chicken, Chihuahua cheese, fresh cheese, parmesan, pesto and spinach.",
      "menu.l3.n": "BBQ arrachera baguette",
      "menu.l3.d": "With lettuce, spinach, tomato, cucumber, bell pepper, sprouts and vinaigrette.",
      "menu.l4.n": "Club sandwich",
      "menu.l4.d": "Chicken, ham, Chihuahua cheese, lettuce, spinach, tomato, sprouts, mayo and mustard.",
      "menu.l5.n": "Marlin quesadillas",
      "menu.l5.d": "Three quesadillas filled with marlin machaca, served with refried beans.",
      "menu.l6.n": "Machaca burritos",
      "menu.l6.d": "Three beef machaca burritos in flour tortillas with refried beans.",
      "menu.l7.n": "Apple salad",
      "menu.l7.d": "Mixed greens, spinach, green apple, fresh cheese, avocado, candied peanuts and vinaigrette.",

      "menu.figDrinks": "Oreo frappe, sweetness served cold",
      "menu.d1.n": "Coffee frappes",
      "menu.d1.d": "Original, caramel, cajeta, cherry, mocha, Oreo or white chocolate. Ferrero, coconut and mazapán $82 / $88.",
      "menu.d2.n": "Chai frappe",
      "menu.d2.d": "Spices, vanilla, apple or matcha.",
      "menu.d3.n": "Iced latte",
      "menu.d3.d": "Add an extra flavor (CinnaRolls, caramel, mocha, cajeta, Irish, Nutella or coconut) $75 / $85.",
      "menu.d4.n": "Smoothies",
      "menu.d4.d": "Milk-based: strawberry, mango, pineapple, banana or berries.",
      "menu.d5.n": "Italian soda",
      "menu.d5.d": "Strawberry, cherry, raspberry, kiwi, blueberry, passion fruit, peach, green apple and more.",
      "menu.d6.n": "Teas & tisanes",
      "menu.d6.d": "Green, mint, herbal chai, chamomile, red berries, passion fruit, guava punch…",
      "menu.d7.n": "Juices & lemonades",
      "menu.d7.d": "Orange juice, green juice, still or sparkling lemonade and orangeade.",

      "gal.eyebrow": "To whet your appetite",
      "gal.title": "Looks delicious… <em>tastes even better</em>",
      "gal.lead": "A peek at what comes out of our oven and coffee bar every single day.",
      "gal.c1": "A case full of freshly iced rolls — warm out of the oven every morning",
      "gal.c2": "Classic roll with iced lattes at the bar",
      "gal.c3": "Green chilaquiles with cream and fresh cheese",
      "gal.c4": "American breakfast: eggs, bacon and a sugar-dusted roll",
      "gal.c5": "Our roll crowned with Nutella",
      "gal.c6": "Omelette with fresh salad and seasonal fruit",
      "gal.c7": "Oreo and caramel frappes, ice cold",
      "gal.c8": "Avocado toast with fried egg and salad",
      "gal.c9": "Cinnamon roll with a heart — made with love",
      "gal.c10": "Machaca burritos with refried beans",
      "gal.c11": "Coffee to go for a stroll along the malecón",
      "gal.c12": "Our counter: cakes, muffins and today's rolls",

      "res.eyebrow": "Book your visit",
      "res.title": "Your table awaits,<br>just <em>one WhatsApp</em> away",
      "res.lead": "Tell us when you're coming and how many of you there are. We'll have your spot ready — cinnamon aroma included.",
      "res.s1": "<strong>1.</strong> Fill in your visit details",
      "res.s2": "<strong>2.</strong> Send us the message on WhatsApp",
      "res.s3": "<strong>3.</strong> Show up and enjoy 🥐",
      "form.title": "Book your table",
      "form.name": "Name",
      "form.namePh": "Your name",
      "form.people": "Guests",
      "form.date": "Date",
      "form.time": "Time",
      "form.branch": "Location",
      "form.submit": "Book via WhatsApp",
      "form.hint": "WhatsApp will open with your message ready to send.",

      "visit.eyebrow": "Visit us",
      "visit.title": "Two cinnamon-scented<br>corners <em>in La Paz</em>",
      "visit.hours": "<strong>Open daily</strong>&nbsp;·&nbsp;7:00 am – 10:30 pm",
      "visit.loc1.name": "Malecón Branch",
      "visit.loc1.addr": "Paseo Álvaro Obregón 550, Centro,<br>right on the La Paz malecón",
      "visit.loc2.name": "Centro Cultural Branch",
      "visit.loc2.addr": "16 de Septiembre 120, corner of Belisario Domínguez, Centro",
      "visit.directions": "Get directions",
      "map.hours": "Open daily · 7:00 am – 10:30 pm",
      "map.fallback": "We couldn't display the map on this device. Open the location in Google Maps:",

      "footer.tagline": "Cinnamon rolls, coffee and fresh cooking by the Sea of Cortez. Made slowly, served with love.",
      "footer.explore": "Explore",
      "footer.reservations": "Reservations",
      "footer.hoursH": "Hours",
      "footer.hoursP": "Open daily<br>7:00 am – 10:30 pm",
      "footer.resH": "Reservations",
      "footer.branchesH": "Locations",
      "footer.made": "— Made with <span class=\"heart\">♥</span> and lots of cinnamon.",

      "wa.hero": "Hi CinnaRolls! 🥐 I'd like to book a table.",
      "wa.greeting": "Hi CinnaRolls! 🥐 I'd like to book a table.",
      "wa.name": "Name",
      "wa.people": "Guests",
      "wa.date": "Date",
      "wa.time": "Time",
      "wa.branch": "Location",
      "wa.closing": "Could you confirm availability? Thank you!"
    }
  };

  function apply(lang) {
    var t = dict[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.innerHTML = t[key];
    });
    document.querySelectorAll("[data-i18n-caption]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-caption");
      if (t[key] != null) el.setAttribute("data-caption", t[key]);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] != null) el.setAttribute("placeholder", t[key]);
    });

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("cinnarolls-lang", lang); } catch (e) { /* modo privado */ }

    document.dispatchEvent(new CustomEvent("cinna:lang", { detail: { lang: lang } }));
  }

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem("cinnarolls-lang"); } catch (e) { /* modo privado */ }
    if (saved === "es" || saved === "en") return saved;

    // Idioma del dispositivo: español → ES; cualquier otro → EN
    var device = (navigator.language || (navigator.languages && navigator.languages[0]) || "es").toLowerCase();
    return device.indexOf("es") === 0 ? "es" : "en";
  }

  function init() {
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
    });
    apply(detect());
  }

  init();

  return {
    apply: apply,
    t: function (key) {
      var lang = document.documentElement.lang;
      return (dict[lang] || dict.es)[key];
    },
    get lang() { return document.documentElement.lang; }
  };
})();
