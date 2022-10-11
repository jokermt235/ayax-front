export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("estate.lsit");
            const res = await fetch("/api/v1/realty/type/estate/list");
            const data = await res.json();
            context.commit('updateState', data);
        },
        async httpFetch(context, payload){
            console.log("fastabs.httpFetch");
            var params = '';
            if(payload.best === 1){
                params = "?best=1";
            }
            console.log("estate.httpFetch");
            const res = await fetch("/api/v1/realty/type/estate/list" + params);
            const data = await res.json();

            var tabs = [];
            data.forEach(async function(element){
                var url = "/api/v1/realty/list?best=1&estate=" + element.name_plural;
                var urlCount = "/api/v1/realty/count?best=1&estate=" + element.name_plural;
                var cnt = await fetch(urlCount);
                if(!cnt){
                    cnt = 0;
                }
                var res1 = await fetch(url);
                let data1 = await res1.json();
                let product = data1.map((item)=>{
                    return {
                        name: item.title,
                        price: item.price,
                        cost: item.price_per_square,
                        mortgage: 'В базе нет', // В Базе создай колонку с  мортагом
                        square: item.area_total,
                        floor:  item.floor,
                        place:  item.locality.type.name + " " + item.locality.name +  " " + item.locality.name + " " + item.district.name  + " " +
                        item.street.type.name + " " + item.street.name,
                        photos: item.photo
                    };
                });

                tabs.push(
                    {
                        prod : product,
                        totalItems : cnt
                    }
                );
            });
            context.commit('updateState', data);
            context.commit('updateTabs', tabs);
        },
        
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        },
        updateTabs(state, data){
            state.tabs = data;
        },
    },
    state : {
        items : [],
        tabs  : []
    },
    getters : {
        records(state){
            console.log("estate.getters.records", state.items);
            return state.items;
        },
        tabs(state){
            return state.items;
        }
    },
}