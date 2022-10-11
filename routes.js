const routeOptions = [
    {
        name: "Недвижимость",
        path: "/kupitzhilye",
        items: [
            {
                path: "/kvartiry",
                name: "Квартиры",
                classes: "header-icons-additional ",
                icon: "kvartiry",
                items: [
                    {
                        name: "Студии",
                        path: "#path",
                    },
                    {
                        name: "Комнаты",
                        path: "#path",
                    },
                    {
                        name: "1-комнатные",
                        path: "#path",
                    },
                    {
                        name: "2-комнатные",
                        path: "#path",
                    },
                    {
                        name: "3-комнатные",
                        path: "#path",
                    },
                    {
                        name: "4-комнатные",
                        path: "#path",
                    },
                    {
                        name: "5-комнатные",
                        path: "#path",
                    },
                    {
                        name: "Пентхаусы",
                        path: "#path",
                    },
                    {
                        name: "Жилые комплексы",
                        path: "#path",
                    },
                    {
                        name: "По районам",
                        path: "#path",
                    },
                    {
                        name: "По улицам",
                        path: "#path",
                    },
                ],
            },
            {
                path: "/snyatzhilye",
                name: "Аренда недвижимости",
                classes: "header-icons-additional ",
                icon: "kvartiry",
                items: [
                    {
                        name: "Аренда квартир",
                        path: "#path",
                    },
                    {
                        name: "Аренда домов",
                        path: "#path",
                    },
                    {
                        name: "Аренда офисов",
                        path: "#path",
                    },
                    {
                        name: "Аренда складов",
                        path: "#path",
                    },
                    {
                        name: "Аренда коммерческой земли",
                        path: "#path",
                    },
                    {
                        name: "Аренда бизнеса",
                        path: "#path",
                    },
                    {
                        name: "Аренда гостиниц",
                        path: "#path",
                    },
                    {
                        name: "Аренда СТО",
                        path: "#path",
                    },
                ],
            },
            {
                path: "/kottedzhnyeposelki",
                icon: "kottedzh",
                name: "Коттеджные посёлки",
            },
        ],
    },
    {
        name: "Услуги",
        items: [
            {
                path: "/rieltorskie-uslugi",
                icon: "rieltor",
                name: "Риэлторские услуги",
            },
            {
                path: "/prodat-nedvizhimost",
                icon: "prodatnedvizhimost",
                name: "Продать недвижимость",
            },
            {
                path: "/ipoteka-krasnodare",
                icon: "ipotekakrasnodare",
                name: "Сопровождение ипотеки",
            },
            {
                path: "/yuridicheskie-uslugi-krasnodare",
                icon: "yuridicheskieuslugi",
                name: "Юридические услуги",
            },
            {
                path: "/otsenka-krasnodare",
                icon: "otsenkakrasnodare",
                name: "Оценка",
            },
            {
                path: "/kadastr-geodeziya",
                icon: "kadastr",
                name: "Кадастр и геодезия",
            },
        ],
    },
    {
        name: "Клиентам",
        items: [
            {
                path: "/skidki-nedvizhimost-krasnodara",
                icon: "skidkinedvizhimost",
                name: "Акции",
            },
            {
                path: "/programma-loyalnosti",
                icon: "programmaloyalnosti",
                name: "Программа лояльности",
            },
            {
                path: "/kachestvo-obsluzhivaniya-klientov-krasnodare",
                icon: "kontrolkachestvo",
                name: "Контроль качества",
            },
            {
                path: "/obrabotka-personalnyh-dannyh",
                icon: "obrabotkapersonalnyhdannyh",
                name: "Обработка персональных данных",
            },
            {
                path: "/karta-rayonov-krasnodara",
                icon: "kartarayonovkrasnodara",
                name: "Карта районов Краснодара",
            },
            {
                path: "/vopros-otvet",
                icon: "voprosotvet",
                name: "Вопрос - ответ",
            },
        ],
    },
    {
        name: "Карьера",
        items: [
            {
                path: "/vakansii-nedvizhimosti-krasnodara",
                icon: "vakansiinedvizhimosti",
                name: "Вакансии",
            },
            {
                path: "/rabota-rieltorom-krasnodare",
                icon: "rabotarieltorom",
                name: "Работа риэлтором",
            },
            {
                path: "/obuchenie-rieltorov-krasnodare",
                icon: "obuchenierieltorov",
                name: "Обучение",
            },
            {
                path: "/istorii-uspekha",
                icon: "istoriiuspekha",
                name: "Истории успеха                ",
            },
            {
                path: "/istorii-vozvrashcheniya",
                icon: "istoriivozvrashcheniya",
                name: "Истории возвращения",
            },
        ],
    },
    {
        name: "О Компании",
        items: [
            {
                name: "История компании",
                icon: "about",
                path: "/agentstvo-nedvizhimosti-krasnodar",
            },
            {
                path: "/novosti-nedvizhimosti-krasnodara",
                icon: "newsnedvizhimost",
                name: "Новости",
            },
            // {
            //     path: '/poleznyestati',
            //     icon: 'poleznyestati',
            //     name: 'Полезные статьи'
            // },
            {
                path: "/stati",
                icon: "poleznyestati",
                name: "Полезные статьи",
            },
            {
                path: "/rieltory-krasnodara",
                icon: "rieltors",
                name: "Риэлторы",
            },
            {
                path: "/sotrudniki",
                icon: "sotrudniki",
                name: "Сотрудники",
            },
            {
                path: "/otzyvy-ayaks-rielt-krasnodar",
                icon: "reviews",
                name: "Отзывы о нашей работе",
            },
            {
                path: "/partnery-kompanii-nedvizhimosti-krasnodara",
                icon: "partners",
                name: "Партнёры",
            },
            {
                path: "/sertifikaty-agentstva-nedvizhimosti-krasnodara",
                icon: "sertificates",
                name: "Сертификаты и награды",
            },
            {
                path: "/partnerstvo-agentstvom-nedvizhimosti-krasnodara",
                icon: "agenstva",
                name: "Региональное партнёрство",
            },
            {
                path: "/standards-of-ethics",
                icon: "standarts",
                name: "Стандарты этики и взаимодействия",
            },
        ],
    },
    {
        name: "Контакты",
        path: "/kontakty",
    },
];

export default routeOptions
