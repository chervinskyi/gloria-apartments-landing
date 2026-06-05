export type Lang = "uk" | "en"

export const translations = {
  uk: {
    nav: {
      rooms: "Номери",
      about: "Про нас",
      location: "Локація",
      reviews: "Відгуки",
      contacts: "Контакти",
      book: "Забронювати",
    },
    hero: {
      title: "Сучасні апартаменти у Східниці",
      subtitle:
        "Затишні студіо з власною кухнею, терасою та доступом до саду — за кілька хвилин від мінеральних джерел. Безкоштовний Wi-Fi і паркінг.",
      rating: "9,8",
      ratingWord: "Відмінно",
      ratingCount: "94 відгуки",
      checkin: "Заїзд",
      checkout: "Виїзд",
      guests: "Гості",
      guest: "гість",
      guests2to4: "гостей",
      check: "Перевірити наявність",
      booking: "Забронювати на Booking.com",
    },
    features: {
      title: "Усе для комфортного відпочинку",
      subtitle: "Зручності, які гості оцінили на 9,7",
      items: [
        {
          title: "Власна кухня",
          text: "Холодильник, плита, чайник і посуд — готуйте, як удома, у будь-який час.",
        },
        {
          title: "Тераса та сад",
          text: "Власна тераса з виходом у сад — ідеально для ранкової кави на свіжому повітрі.",
        },
        {
          title: "Безкоштовний паркінг",
          text: "Приватна парковка прямо біля будинку — без зайвого клопоту з місцем.",
        },
        {
          title: "Безкоштовний Wi-Fi",
          text: "Інтернет на всій території помешкання, у кожному номері.",
        },
      ],
    },
    rooms: {
      title: "Наші апартаменти",
      subtitle: "Світлі сучасні студіо з усім необхідним для відпочинку",
      from: "від",
      perNight: "грн / ніч",
      capacity: "Місткість",
      details: "Деталі та бронювання",
      booking: "Дивитися на Booking.com",
      priceNote: "Актуальну ціну дивіться на Booking.com",
      list: [
        {
          name: "Студіо",
          desc: "Світла студія з двоспальним ліжком, диваном і повністю обладнаною кухнею. Окрема ванна кімната з душем. Затишний простір для пари.",
          capacity: "До 2–3 гостей · 1 двоспальне ліжко + диван",
          amenities: ["Власна кухня", "Душ", "Телевізор", "Безкоштовний Wi-Fi"],
          price: "950",
        },
        {
          name: "Студіо з терасою",
          desc: "Простора студія з виходом на власну терасу й до саду. Двоспальне ліжко, диван, кухонна зона та сучасна ванна кімната з душем.",
          capacity: "До 2–3 гостей · 1 двоспальне ліжко + диван",
          amenities: ["Тераса", "Доступ до саду", "Власна кухня", "Душ"],
          price: "1 200",
        },
      ],
    },
    about: {
      label: "Про апартаменти",
      title: "Дім, де хочеться залишитися довше",
      text1:
        "У помешканні Gloria Apartments, розташованому в місті Східниця, до послуг гостей сучасні номери з доступом до саду. На території доступні приватна парковка та безкоштовний Wi-Fi на всій території.",
      text2:
        "Гостям пропонують варіанти розміщення з терасою та телевізором. Окрему ванну кімнату з душем укомплектовано феном. Для зручності в номерах є холодильник, плита та чайник — усе для комфортного відпочинку біля мінеральних джерел Східниці.",
      stats: [
        { value: "9,8", label: "оцінка на Booking" },
        { value: "94", label: "відгуки гостей" },
        { value: "9,6", label: "за розташування" },
      ],
    },
    gallery: {
      title: "Фотогалерея",
      subtitle: "Реальні світлини апартаментів Gloria",
    },
    reviews: {
      title: "Оцінка гостей",
      subtitle: "Реальні оцінки з Booking.com",
      score: "9,8",
      scoreWord: "Відмінно",
      scoreCount: "На основі 94 відгуків",
      categories: [
        { label: "Персонал", value: 9.8 },
        { label: "Зручності", value: 9.7 },
        { label: "Чистота", value: 9.7 },
        { label: "Співвідношення ціна/якість", value: 9.7 },
        { label: "Розташування", value: 9.6 },
        { label: "Комфорт", value: 9.5 },
      ],
      cta: "Читати всі відгуки на Booking.com",
      list: [
        {
          name: "Олена",
          rating: 5,
          text: "Чудові апартаменти! Дуже чисто, все продумано до дрібниць. Тераса з виходом у сад — окрема насолода: пили ранкову каву під шум карпатського лісу. Господарі надзвичайно привітні та завжди на зв'язку. Обов'язково повернемося!",
        },
        {
          name: "Андрій",
          rating: 5,
          text: "Відмінне місце для відпочинку біля мінеральних джерел. Кухня повністю обладнана — варили їжу самі, як удома. Wi-Fi стабільний, паркінг зручний. До центру Східниці — кілька хвилин пішки. Дуже рекомендую!",
        },
        {
          name: "Марія",
          rating: 5,
          text: "Зупинялися на п'ять ночей усією родиною. Простора, світла студія, ідеальна чистота. Дуже тихо та спокійно — відпочили на повну. Господарі допомогли з маршрутами по окрузі. Найкращий варіант у Східниці!",
        },
      ],
    },
    booking: {
      title: "Забронюйте свій відпочинок",
      subtitle:
        "Надішліть заявку — ми зв'яжемося з вами та підтвердимо наявність протягом дня.",
      name: "Ім'я",
      phone: "Телефон",
      email: "Email",
      checkin: "Дата заїзду",
      checkout: "Дата виїзду",
      guests: "Кількість гостей",
      comment: "Коментар",
      commentPlaceholder: "Побажання, час заїзду тощо",
      submit: "Надіслати заявку",
      success: "Дякуємо! Вашу заявку надіслано. Ми зв'яжемося з вами найближчим часом.",
      contactsTitle: "Контакти",
      address: "м. Східниця, Львівська обл., Україна",
      checkTimes: "Заїзд після 14:00 · Виїзд до 11:00",
      bookingBtn: "Забронювати на Booking.com",
      mapTitle: "Карта розташування — Східниця",
    },
    footer: {
      tagline: "Сучасні апартаменти у Східниці · 9,8 на Booking",
      menu: "Меню",
      contacts: "Контакти",
      social: "Соцмережі",
      rights: "Усі права захищено.",
    },
  },
  en: {
    nav: {
      rooms: "Rooms",
      about: "About",
      location: "Location",
      reviews: "Reviews",
      contacts: "Contacts",
      book: "Book now",
    },
    hero: {
      title: "Modern apartments in Skhidnytsia",
      subtitle:
        "Cozy studios with a private kitchen, terrace and garden access — minutes from the mineral springs. Free Wi-Fi and parking.",
      rating: "9.8",
      ratingWord: "Excellent",
      ratingCount: "94 reviews",
      checkin: "Check-in",
      checkout: "Check-out",
      guests: "Guests",
      guest: "guest",
      guests2to4: "guests",
      check: "Check availability",
      booking: "Book on Booking.com",
    },
    features: {
      title: "Everything for a comfortable stay",
      subtitle: "Facilities our guests rated 9.7",
      items: [
        {
          title: "Private kitchen",
          text: "Fridge, stove, kettle and dishware — cook like home, any time you like.",
        },
        {
          title: "Terrace & garden",
          text: "Your own terrace with garden access — perfect for morning coffee in the fresh air.",
        },
        {
          title: "Free parking",
          text: "Private parking right by the house — no hassle finding a spot.",
        },
        {
          title: "Free Wi-Fi",
          text: "Internet throughout the property, in every room.",
        },
      ],
    },
    rooms: {
      title: "Our apartments",
      subtitle: "Bright, modern studios with everything you need to relax",
      from: "from",
      perNight: "UAH / night",
      capacity: "Capacity",
      details: "Details & booking",
      booking: "View on Booking.com",
      priceNote: "See current rates on Booking.com",
      list: [
        {
          name: "Studio",
          desc: "A bright studio with a double bed, sofa and a fully equipped kitchen. Private bathroom with shower. A cozy space for a couple.",
          capacity: "Up to 2–3 guests · 1 double bed + sofa",
          amenities: ["Private kitchen", "Shower", "TV", "Free Wi-Fi"],
          price: "950",
        },
        {
          name: "Studio with Terrace",
          desc: "A spacious studio opening onto its own terrace and the garden. Double bed, sofa, kitchen area and a modern bathroom with shower.",
          capacity: "Up to 2–3 guests · 1 double bed + sofa",
          amenities: ["Terrace", "Garden access", "Private kitchen", "Shower"],
          price: "1,200",
        },
      ],
    },
    about: {
      label: "About the apartments",
      title: "A home you'll want to stay in longer",
      text1:
        "Set in Skhidnytsia, Gloria Apartments offers modern rooms with garden access. The property features private parking and free Wi-Fi throughout.",
      text2:
        "Accommodation options come with a terrace and a TV. The private bathroom with shower is fitted with a hairdryer. For your convenience the rooms have a fridge, stove and kettle — everything for a comfortable stay near the mineral springs of Skhidnytsia.",
      stats: [
        { value: "9.8", label: "rating on Booking" },
        { value: "94", label: "guest reviews" },
        { value: "9.6", label: "for location" },
      ],
    },
    gallery: {
      title: "Photo gallery",
      subtitle: "Real photos of the Gloria apartments",
    },
    reviews: {
      title: "Guest rating",
      subtitle: "Real scores from Booking.com",
      score: "9.8",
      scoreWord: "Excellent",
      scoreCount: "Based on 94 reviews",
      categories: [
        { label: "Staff", value: 9.8 },
        { label: "Facilities", value: 9.7 },
        { label: "Cleanliness", value: 9.7 },
        { label: "Value for money", value: 9.7 },
        { label: "Location", value: 9.6 },
        { label: "Comfort", value: 9.5 },
      ],
      cta: "Read all reviews on Booking.com",
      list: [
        {
          name: "Olena",
          rating: 5,
          text: "Wonderful apartments! Very clean and thoughtfully arranged. The terrace with garden access is a special treat — we had morning coffee listening to the Carpathian forest. The hosts are incredibly warm and always in touch. We'll definitely be back!",
        },
        {
          name: "Andriy",
          rating: 5,
          text: "An excellent place to relax near the mineral springs. The kitchen is fully equipped — we cooked our own meals just like home. Stable Wi-Fi, convenient parking. A few minutes' walk to the centre of Skhidnytsia. Highly recommend!",
        },
        {
          name: "Maria",
          rating: 5,
          text: "We stayed for five nights with the whole family. Spacious, bright studio, perfectly clean. Very quiet and peaceful — we rested completely. The hosts helped with local routes and tips. Best option in Skhidnytsia!",
        },
      ],
    },
    booking: {
      title: "Book your getaway",
      subtitle:
        "Send a request — we'll get in touch and confirm availability within the day.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      checkin: "Check-in date",
      checkout: "Check-out date",
      guests: "Number of guests",
      comment: "Comment",
      commentPlaceholder: "Requests, arrival time, etc.",
      submit: "Send request",
      success: "Thank you! Your request has been sent. We'll contact you shortly.",
      contactsTitle: "Contacts",
      address: "Skhidnytsia, Lviv region, Ukraine",
      checkTimes: "Check-in after 2:00 PM · Check-out by 11:00 AM",
      bookingBtn: "Book on Booking.com",
      mapTitle: "Location map — Skhidnytsia",
    },
    footer: {
      tagline: "Modern apartments in Skhidnytsia · 9.8 on Booking",
      menu: "Menu",
      contacts: "Contacts",
      social: "Social",
      rights: "All rights reserved.",
    },
  },
} as const

export const BOOKING_URL =
  "https://www.booking.com/hotel/ua/gloria-skhidnitsia1.uk.html"

export const galleryImages = [
  { src: "/images/booking/photo-1.jpg", altUk: "Студіо: кухня, ліжко та диван", altEn: "Studio: kitchen, bed and sofa" },
  { src: "/images/booking/photo-5.jpg", altUk: "Спальна зона з диваном", altEn: "Sleeping area with sofa" },
  { src: "/images/booking/photo-7.jpg", altUk: "Номер з виходом на терасу", altEn: "Room with terrace access" },
  { src: "/images/booking/photo-3.jpg", altUk: "Обладнана кухня", altEn: "Equipped kitchen" },
  { src: "/images/booking/photo-8.jpg", altUk: "Ванна кімната з душем", altEn: "Bathroom with shower" },
  { src: "/images/booking/photo-6.jpg", altUk: "Тераса та сад", altEn: "Terrace and garden" },
]
