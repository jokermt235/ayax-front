export default{
    namespaced  : true,
    actions : {
        async send(context, payload){
            console.log("partner.send");
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/request/partner/add",
                {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateResult', data);
        },
        async listLoyalty(context, payload){
            const res = await fetch("/api/v1/partner/loyalty/list");
            const data = await res.json();
            context.commit('updateLoyalty', data);   
        },
        async list(context, payload){
            let params = "";
            if(payload){
                const searchParams = new URLSearchParams(payload);
                params = searchParams.toString();
                params = "?" + params;
            }
            const res = await fetch("/api/v1/partner/list" + params);
            const data = await res.json();
            context.commit('updateRecords', data);   
        },
    },
    mutations : {
        updateResult(state, data){
            state.result = data;
        },
        updateRecords(state, data){
            state.regionals  = data;
            let options = {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".swiper-button-next[data-button-id='0']",
                    prevEl: ".swiper-button-prev[data-button-id='0']"
                },
                breakpoints: {
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    }
                }

            };
            let _data = [];
            _data.push({
                title: 'Профессиональные сообщества',
                sliderOptions: options, 
                partners : data.filter(item=>item.professional_community == true) 
            });    
            _data.push({
                title: 'Офис недвижемости',
                sliderOptions: options, 
                partners : data.filter(item=>item.mortgage_office == true)
            });
            _data.push({
                title: 'Офис продаж',
                sliderOptions: options, 
                partners : data.filter(item=>item.evaluation_office == true)
            });
            _data.push({
                title: 'Региональные',
                sliderOptions: options, 
                partners : data.filter(item=>item.regional == true)
            });
            state.items = _data;
        }
    },
    state : {
        items : [],
        loyalties : [],
        result : {},
        regionals : [],
    },
    getters : {
        partners(state){
            console.log("partner.getters", state.items);
            return state.items;
        },
        partnersLoyalty(state){
            console.log("partnersLoyalty.getters", state.items);
            return state.loyalties;
        },
        regionals(state){
            return state.regionals;
        }
    },
}