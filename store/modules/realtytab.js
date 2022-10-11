
export default{
    namespaced : true,
    actions : {
        async fetchRealtyTabs(context, payload){
            let res = await fetch("/api/v1/address/locality/list");
            const regions = await res.json();
            context.commit('updateList', regions);
        },
        async fetchRegeons(context, payload){
            let res = await fetch("/api/v1/address/locality/list");
            const regions = await res.json();
            context.commit('updateRegeons', regions);
        },
        async fetchDistricts(context, payload){
            let res = await fetch("api/v1/address/locality/list");
            const data = await res.json();
            context.commit('updateDistricts', data);
        },
        async fetchStreets(context, payload){
            if(payload.tab < 2 && payload.filterIndex === 1){
                let res = await fetch(`api/v1/address/street/list?district=${payload.id}`);
                const streets = await res.json();
                context.commit('updateStreets', streets);
            }
            if(payload.tab >= 2 && payload.filterIndex === 0){
                let res = await fetch(`api/v1/address/street/list?district=${payload.id}`);
                const streets = await res.json();
                context.commit('updateStreets', streets);
            }
        },
        async loadFilter(context, payload){
            console.log("realtytab.url", payload.url);
            const res = await fetch("api/v1/" + payload.url);
            const data = await res.json();
            context.commit('updateInnerFilters', { data : data, filterParent : payload.filterParent, filterChild: payload.filterChild});
        },
    },
    state : {
        tabs: [],
        filters: [
            {
                name: 'Квартиры',
                route : '/kvartiry',
                image: '<svg width="39" height="39" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><g transform="translate(-314.000000, -104.000000)"><path d="M314.4,104 C315.266667,104 316.133333,104 317,104 C317,108.866667 317,113.733333 317,118.6 C317,118.820914 317.179086,119 317.4,119 L317.6,119 C317.820914,119 318,118.820914 318,118.6 L318,104.4 C318,104.179086 318.179086,104 318.4,104 C320.6,104 322.8,104 325,104 C325,107.866667 325,111.733333 325,115.6 C325,115.820914 325.179086,116 325.4,116 L329.6,116 C329.820914,116 330,116.179086 330,116.4 L330,119.6 C330,119.820914 329.820914,120 329.6,120 L314.4,120 C314.179086,120 314,119.820914 314,119.6 L314,104.4 C314,104.179086 314.179086,104 314.4,104 Z M315,115 L315,117 L316,117 L316,115 L315,115 Z M319,115 L319,117 L320,117 L320,115 L319,115 Z M321,117 L321,119 L322,119 L322,117 L321,117 Z M323,115 L323,117 L324,117 L324,115 L323,115 Z M315,112 L315,114 L316,114 L316,112 L315,112 Z M319,112 L319,114 L320,114 L320,112 L319,112 Z M321,114 L321,116 L322,116 L322,114 L321,114 Z M323,112 L323,114 L324,114 L324,112 L323,112 Z M315,109 L315,111 L316,111 L316,109 L315,109 Z M319,109 L319,111 L320,111 L320,109 L319,109 Z M321,111 L321,113 L322,113 L322,111 L321,111 Z M323,109 L323,111 L324,111 L324,109 L323,109 Z M315,106 L315,108 L316,108 L316,106 L315,106 Z M319,106 L319,108 L320,108 L320,106 L319,106 Z M321,108 L321,110 L322,110 L322,108 L321,108 Z M323,106 L323,108 L324,108 L324,106 L323,106 Z M326.4,113 L328.6,113 C328.820914,113 329,113.179086 329,113.4 L329,114.6 C329,114.820914 328.820914,115 328.6,115 L326.4,115 C326.179086,115 326,114.820914 326,114.6 L326,113.4 C326,113.179086 326.179086,113 326.4,113 Z M326.4,110 L328.6,110 C328.820914,110 329,110.179086 329,110.4 L329,111.6 C329,111.820914 328.820914,112 328.6,112 L326.4,112 C326.179086,112 326,111.820914 326,111.6 L326,110.4 C326,110.179086 326.179086,110 326.4,110 Z M326.4,107 L328.6,107 C328.820914,107 329,107.179086 329,107.4 L329,108.6 C329,108.820914 328.820914,109 328.6,109 L326.4,109 C326.179086,109 326,108.820914 326,108.6 L326,107.4 C326,107.179086 326.179086,107 326.4,107 Z" transform="translate(322.000000, 112.000000) scale(-1, 1) translate(-322.000000, -112.000000) "></path></g></g></svg>',
                filters: [
                    {
                        name : 'Город',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [{ id : 1, name : 'Город 1' },],
                        seletedItems: [],
                    },
                    {
                        name : 'Район',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [{ id : 1, name : 'Район 1' }],
                        seletedItems: [],
                    },
                    {
                        name : 'Улица',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [/*{ id : 1, name : 'Улица 1' },*/],
                        seletedItems: [],
                    },
                    {
                        name : 'Комнат',
                        more: false,
                        staticFiltersItem: [ 'студия', '1', '2', '3', '4', '5+', 'комната', 'пентхаус', 'Апартаменты' ],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Стоимость',
                        more: false,
                        staticFiltersItem: ['price'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Площадь',
                        more : false,
                        staticFiltersItem:
                            [
                                'space'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Этаж',
                        more : true,
                        staticFiltersItem: ['floor'],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Ремонт',
                        more : true,
                        staticFiltersItem: ['с ремонтом', 'без ремонта'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Балкон',
                        more : true,
                        staticFiltersItem: ['застеклен', 'не застеклен', 'несколько', 'лоджия', 'балкон + лоджия', 'балкон', 'нет' ],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Типы комнат',
                        more : true,
                        staticFiltersItem: ['смежные', 'изолированные' ],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Материал стен',
                        more : true,
                        staticFiltersItem: ['кирпичный', 'монолитно-кирпиный', 'монолитный', 'блочный' , 'панельный', 'саманный', 'металл', 'деревянный', 'другой' ],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },

                ],
                seletedItems: {},
                checkedInputs: [],
           },
            {
                name: 'Новостройки',
                route : '/kvartiry',
                image: '<svg width="39" height="39" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><g transform="translate(-314.000000, -104.000000)"><path d="M314.4,104 C315.266667,104 316.133333,104 317,104 C317,108.866667 317,113.733333 317,118.6 C317,118.820914 317.179086,119 317.4,119 L317.6,119 C317.820914,119 318,118.820914 318,118.6 L318,104.4 C318,104.179086 318.179086,104 318.4,104 C320.6,104 322.8,104 325,104 C325,107.866667 325,111.733333 325,115.6 C325,115.820914 325.179086,116 325.4,116 L329.6,116 C329.820914,116 330,116.179086 330,116.4 L330,119.6 C330,119.820914 329.820914,120 329.6,120 L314.4,120 C314.179086,120 314,119.820914 314,119.6 L314,104.4 C314,104.179086 314.179086,104 314.4,104 Z M315,115 L315,117 L316,117 L316,115 L315,115 Z M319,115 L319,117 L320,117 L320,115 L319,115 Z M321,117 L321,119 L322,119 L322,117 L321,117 Z M323,115 L323,117 L324,117 L324,115 L323,115 Z M315,112 L315,114 L316,114 L316,112 L315,112 Z M319,112 L319,114 L320,114 L320,112 L319,112 Z M321,114 L321,116 L322,116 L322,114 L321,114 Z M323,112 L323,114 L324,114 L324,112 L323,112 Z M315,109 L315,111 L316,111 L316,109 L315,109 Z M319,109 L319,111 L320,111 L320,109 L319,109 Z M321,111 L321,113 L322,113 L322,111 L321,111 Z M323,109 L323,111 L324,111 L324,109 L323,109 Z M315,106 L315,108 L316,108 L316,106 L315,106 Z M319,106 L319,108 L320,108 L320,106 L319,106 Z M321,108 L321,110 L322,110 L322,108 L321,108 Z M323,106 L323,108 L324,108 L324,106 L323,106 Z M326.4,113 L328.6,113 C328.820914,113 329,113.179086 329,113.4 L329,114.6 C329,114.820914 328.820914,115 328.6,115 L326.4,115 C326.179086,115 326,114.820914 326,114.6 L326,113.4 C326,113.179086 326.179086,113 326.4,113 Z M326.4,110 L328.6,110 C328.820914,110 329,110.179086 329,110.4 L329,111.6 C329,111.820914 328.820914,112 328.6,112 L326.4,112 C326.179086,112 326,111.820914 326,111.6 L326,110.4 C326,110.179086 326.179086,110 326.4,110 Z M326.4,107 L328.6,107 C328.820914,107 329,107.179086 329,107.4 L329,108.6 C329,108.820914 328.820914,109 328.6,109 L326.4,109 C326.179086,109 326,108.820914 326,108.6 L326,107.4 C326,107.179086 326.179086,107 326.4,107 Z" transform="translate(322.000000, 112.000000) scale(-1, 1) translate(-322.000000, -112.000000) "></path></g></g></svg>',
                filters: [
                    {
                        name : 'Город',
                        more : false,
                        staticFiltersItem:[],
                        fetchedFiltersItem:
                        [
                            { id : 1, name : 'Город 1' },
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Район',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            { id : 1, name : 'Район 1' },
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Улица',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            { id : 1, name : 'Улица 1' },
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Комнат',
                        more: false,
                        staticFiltersItem: [
                            'студия', '1', '2', '3', '4', '5+', 'комната', 'пентхаус', 'Апартаменты'
                        ],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Стоимость',
                        more: false,
                        staticFiltersItem:['price'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Площадь',
                        more : false,
                        staticFiltersItem: ['space'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Этаж',
                        more : true,
                        staticFiltersItem: ['floor'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Ремонт',
                        more : true,
                        staticFiltersItem: ['с ремонтом', 'без ремонта'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Балкон',
                        more : true,
                        staticFiltersItem: ['застеклен', 'не застеклен', 'несколько', 'лоджия', 'балкон + лоджия', 'балкон', 'нет'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Типы комнат',
                        more : true,
                        staticFiltersItem: ['смежные', 'изолированные'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Материал стен',
                        more : true,
                        staticFiltersItem: ['кирпичный', 'монолитно-кирпиный', 'монолитный', 'блочный' , 'панельный', 'саманный', 'металл', 'деревянный', 'другой'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },

                ],
                fetchedFiltersItem: [],
                staticFiltersItem: [],
                seletedItems: {},
                checkedInputs: [],
            },
            {
                name: 'Дома',
                route : '/kvartiry',
                image: '<svg width="39px" height="39px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons--2" transform="translate(-269.000000, -104.000000)"><path d="M269,120 L269,119.4 C269,119.179086 269.179086,119 269.4,119 L269.6,119 C269.820914,119 270,118.820914 270,118.6 L270,114.4 C270,114.179086 270.179086,114 270.4,114 L274.6,114 C274.820914,114 275,113.820914 275,113.6 L275,109.4 C275,109.179086 275.179086,109 275.4,109 L279.6,109 C279.820914,109 280,109.179086 280,109.4 L280,118.6 C280,118.820914 280.179086,119 280.4,119 L280.6,119 C280.820914,119 281,118.820914 281,118.6 L281,109.4 C281,109.179086 281.179086,109 281.4,109 L283.6,109 C283.820914,109 284,109.179086 284,109.4 L284,118.6 C284,118.820914 284.179086,119 284.4,119 L284.6,119 C284.820914,119 285,119.179086 285,119.4 L285,119.6 C285,119.820914 284.820914,120 284.6,120 L269,120 Z M273,116 L273,119 L275,119 L275,116 L273,116 Z M276,115 L276,118 L277,118 L277,115 L276,115 Z M271,115 L271,118 L272,118 L272,115 L271,115 Z M276,111 L276,114 L277,114 L277,111 L276,111 Z M278,115 L278,118 L279,118 L279,115 L278,115 Z M282,115 L282,118 L283,118 L283,115 L282,115 Z M278,111 L278,114 L279,114 L279,111 L278,111 Z M282,111 L282,114 L283,114 L283,111 L282,111 Z M273.6,113 L269.323607,113 C269.21315,113 269.123607,112.910457 269.123607,112.8 C269.123607,112.768951 269.130836,112.738328 269.144721,112.710557 L270.834164,109.331672 C270.935799,109.128401 271.143557,109 271.37082,109 L273.6,109 C273.820914,109 274,109.179086 274,109.4 L274,112.6 C274,112.820914 273.820914,113 273.6,113 Z M274.144721,107.710557 L275.834164,104.331672 C275.935799,104.128401 276.143557,104 276.37082,104 L280.676393,104 C280.78685,104 280.876393,104.089543 280.876393,104.2 C280.876393,104.231049 280.869164,104.261672 280.855279,104.289443 L279.165836,107.668328 C279.064201,107.871599 278.856443,108 278.62918,108 L274.323607,108 C274.21315,108 274.123607,107.910457 274.123607,107.8 C274.123607,107.768951 274.130836,107.738328 274.144721,107.710557 Z M280.144721,107.710557 L281.834164,104.331672 C281.935799,104.128401 282.143557,104 282.37082,104 L282.62918,104 C282.856443,104 283.064201,104.128401 283.165836,104.331672 L284.855279,107.710557 C284.904676,107.809353 284.864632,107.929488 284.765836,107.978885 C284.738065,107.992771 284.707442,108 284.676393,108 L280.323607,108 C280.21315,108 280.123607,107.910457 280.123607,107.8 C280.123607,107.768951 280.130836,107.738328 280.144721,107.710557 Z" id="house"></path></g></svg>',
                filters: [
                    {
                        name : 'Район',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            { id : 1, name : 'Район 1' },
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Улица',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            /*{ id : 1, name : 'Улица 1' },*/
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Тип',
                        more: false,
                        staticFiltersItem: ['студия', '1', '2', '3', '4', '5+', 'комната', 'пентхаус', 'Апартаменты'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Этажность',
                        more : false,
                        staticFiltersItem: ['1 этаж', '2 этажа', '3 этажа', '4 этажа'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Стоимость',
                        more: false,
                        staticFiltersItem: ['price'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Площадь',
                        more : false,
                        staticFiltersItem: ['space'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Участок',
                        more : true,
                        staticFiltersItem: ['area'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Ремонт',
                        more : true,
                        staticFiltersItem: ['с ремонтом', 'без ремонта'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Материал',
                        more : true,
                        staticFiltersItem: ['кирпичный', 'монолитно-кирпиный', 'монолитный', 'блочный' , 'панельный', 'саманный', 'металл', 'деревянный', 'другой'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Санузел',
                        more : true,
                        staticFiltersItem: ['совмещенный', 'раздельный', 'несколько', 'нет', 'на улице', 'общий', 'на этаже'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Комнат',
                        more : true,
                        staticFiltersItem: ['1', '2', '3', '4', '5', '6'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Газоснабжение',
                        more : true,
                        staticFiltersItem: ['отсутствует', 'центральный', 'в баллонах'],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },
                    {
                        name : 'Гараж',
                        more : true,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [],
                        seletedItems: [],
                    },

                ],
                seletedItems: {},
                checkedInputs: [],
            },
            {
                name: 'Участки',
                route : '/kvartiry',
                image: '<svg width="39px" height="39px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons--3" transform="translate(-290.000000, -104.000000)"><path d="M300,115.969053 L300,118.6 C300,118.820914 300.179086,119 300.4,119 L306,119 L306,119.6 C306,119.820914 305.820914,120 305.6,120 L290.4,120 C290.179086,120 290,119.820914 290,119.6 L290,119 L298.6,119 C298.820914,119 299,118.820914 299,118.6 L299,115.969053 C297.026844,115.723004 295.5,114.039809 295.5,112 C295.5,110.541928 296.280143,109.266067 297.445782,108.567064 C297.170552,108.295127 297,107.917481 297,107.5 C297,106.808266 297.468234,106.225894 298.105045,106.05254 C298.037257,105.881546 298,105.695124 298,105.5 C298,104.671573 298.671573,104 299.5,104 C300.328427,104 301,104.671573 301,105.5 C301,105.695124 300.962743,105.881546 300.894955,106.05254 C301.531766,106.225894 302,106.808266 302,107.5 C302,107.917481 301.829448,108.295127 301.554218,108.567064 C302.719857,109.266067 303.5,110.541928 303.5,112 C303.5,114.039809 301.973156,115.723004 300,115.969053 Z M290,118 C290,116.666667 290.666667,116 292,116 C294,116 294,118 294,118 C294,118 292.666667,118 290,118 Z M302,118 C302,116.666667 302.666667,116 304,116 C306,116 306,118 306,118 C306,118 304.666667,118 302,118 Z M295,118 C295,117.333333 295.333333,117 296,117 C297,117 297,118 297,118 C297,118 296.333333,118 295,118 Z M292.5,109 C291.119288,109 290,107.880712 290,106.5 C290,105.119288 291.119288,104 292.5,104 C293.880712,104 295,105.119288 295,106.5 C295,107.880712 293.880712,109 292.5,109 Z" id="earth"></path></g></svg>',
                filters: [
                    {
                        name : 'Район',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            /*{ id : 1, name : 'Район 1' },*/
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Улица',
                        more : false,
                        staticFiltersItem: [],
                        fetchedFiltersItem: [
                            /*{ id : 1, name : 'Улица 1' },*/
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Тип',
                        more: false,
                        staticFiltersItem:
                            [
                                'ИЖС', 'Дачный'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Стоимость',
                        more: false,
                        staticFiltersItem:
                            [
                                'price'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Площадь',
                        more : false,
                        staticFiltersItem:
                            [
                                'space'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Фасад',
                        more : false,
                        staticFiltersItem:
                            [
                                'facade'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                ],
                seletedItems: {},
                checkedInputs: [],
            },
            {
                name: 'Коммерция',
                route : '/kvartiry',
                image: '<svg width="39px" height="39px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons--4" transform="translate(-246.000000, -104.000000)"><path d="M260,107 L260,106.4 C260,106.179086 259.820914,106 259.6,106 L248.4,106 C248.179086,106 248,105.820914 248,105.6 L248,104.4 C248,104.179086 248.179086,104 248.4,104 L261.6,104 C261.820914,104 262,104.179086 262,104.4 L262,107 L262,119.6 C262,119.820914 261.820914,120 261.6,120 L246.4,120 C246.179086,120 246,119.820914 246,119.6 L246,119.4 C246,119.179086 246.179086,119 246.4,119 L247.6,119 C247.820914,119 248,118.820914 248,118.6 L248,117.4 C248,117.179086 248.179086,117 248.4,117 L249.6,117 C249.820914,117 250,117.179086 250,117.4 L250,118.6 C250,118.820914 250.179086,119 250.4,119 L251.6,119 C251.820914,119 252,118.820914 252,118.6 L252,117.4 C252,117.179086 252.179086,117 252.4,117 L259.6,117 C259.820914,117 260,116.820914 260,116.6 L260,107 Z M256,112 C255.333333,112 255,112.333333 255,113 C255,113.666667 255.333333,114 256,114 C254.666667,114 254,114.666667 254,116 L253,116 C253,114.666667 252.333333,114 251,114 C251.666667,114 252,113.666667 252,113 C252,112.333333 251.666667,112 251,112 C250.333333,112 250,112.333333 250,113 C250,113.666667 250.333333,114 251,114 C249.666667,114 249,114.666667 249,116 L248.4,116 C248.179086,116 248,115.820914 248,115.6 L248,111.4 C248,111.179086 248.179086,111 248.4,111 L251,111 L253,111 L256,111 L258.6,111 C258.820914,111 259,111.179086 259,111.4 L259,115.6 C259,115.820914 258.820914,116 258.6,116 L258,116 C258,114.666667 257.333333,114 256,114 C256.666667,114 257,113.666667 257,113 C257,112.333333 256.666667,112 256,112 Z M246.207293,109.68906 L247.82188,107.26718 C247.93316,107.100261 248.120498,107 248.32111,107 L258.626297,107 C258.736754,107 258.826297,107.089543 258.826297,107.2 C258.826297,107.239485 258.814609,107.278087 258.792707,107.31094 L257.17812,109.73282 C257.06684,109.899739 256.879502,110 256.67889,110 L246.373703,110 C246.263246,110 246.173703,109.910457 246.173703,109.8 C246.173703,109.760515 246.185391,109.721913 246.207293,109.68906 Z" id="commercial"></path></g></svg>',
                filters: [
                    {
                        name : 'Район',
                        more : false,
                        staticFiltersItem:[
                        ],
                        fetchedFiltersItem:
                        [
                            /*{ id : 1, name : 'Район 1' },*/
                        ],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Улица',
                        more : false,
                        staticFiltersItem:[
                        ],
                        fetchedFiltersItem:
                        [
                            /*{ id : 1, name : 'Улица 1' },*/
                        ],
                        seletedItems: [],
                    },
                    {
                        name : 'Сделка',
                        more: false,
                        staticFiltersItem:
                            [
                                'Купить', 'Снять'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Категория',
                        more: false,
                        staticFiltersItem:[],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Стоимость',
                        more: false,
                        staticFiltersItem:
                            [
                                'price'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                    {
                        name : 'Площадь',
                        more : true,
                        staticFiltersItem:
                            [
                                'space'
                            ],
                        fetchedFiltersItem: [],
                        seletedItems: [

                        ],
                    },
                ],
                seletedItems: {},
                checkedInputs: [],
            }
        ],
    },
    mutations : {
        updateList(state, data){

        },
        updateRegeons(state , regeons){
            state.filters[0].filters[0]["fetchedFiltersItem"] = regeons;
            state.filters[1].filters[0]["fetchedFiltersItem"] = regeons;
        },
        updateDistricts(state, districts){
            state.filters.forEach(
                (filter , index)=>{
                    if(index > 1 ){
                        filter.filters[0]["fetchedFiltersItem"] = districts;
                    }else{
                        filter.filters[1]["fetchedFiltersItem"] = districts;
                    }
                    return filter;
                }
            );
        },
        updateStreets(state, streets){
            state.filters.forEach(
                (filter , index)=>{
                    if(index > 1 ){
                        filter.filters[1]["fetchedFiltersItem"] = streets;
                    }else{
                        filter.filters[2]["fetchedFiltersItem"] = streets;
                    }
                    return filter;
                }
            );
        },
        updateInnerFilters(state, list){
            let split_indexes = [];
            state.filters.forEach(filter=>{
                let splits = [];
                if(list.filterParent){
                    splits = list.filterParent.split(",");
                    let index = 0;
                    splits.forEach(item=>{
                        if(filter.name.includes(item.trim())){
                            split_indexes.push(index);
                            filter.filters.forEach(item=>{
                                if(item.name.includes(list.filterChild)){
                                    item.staticFiltersItem = list.data;
                                }
                            });
                            return item.trim();
                        }
                        index++;
                        return item.trim();
                    });
                }
                else{
                    filter.filters.forEach(item=>{
                        if(item.name.includes(list.filterChild)){
                            item.staticFiltersItem = list.data;
                        }
                    });
                }
            });
        }

    },
    getters : {
        realtyTabs(state){
            console.log("getters.realtyTabs: data computed 2");
            return state.tabs;
        },

        filters(state){
            return state.filters;
        }
    },
}
