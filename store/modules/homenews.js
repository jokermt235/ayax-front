export default{
    namespaced  : true,
    actions : {
        async httpFetch(context){
            console.log("homenews.httpFetch");
            const res = await fetch("/api/v1/news/list");
            const data = await res.json();
            let months = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
            let news = [];
            let date = new Date();
            if(data){
                data.forEach(element => {
                    var date = new Date(element.updated_at);
                    news.push(
                        {
                            day    : date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
                            month  : months[date.getMonth()],
                            title  : element.title,
                            text   : element.text,
                            href   : element.url
                        }
                    );
                });
            }
            context.commit('updateState', news);
        },
        async getOneByUrl(context, payload){
            console.log("homenews.getOneByUrl");
            const res = await fetch("/api/v1/news/item?url" + payload);
            const data = await res.json();
            context.commit('updateItem', data);
        }
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        },
        updateItem(state, data){
            state.item = data;
        }
    },
    state : {
        items : [],
        item : {}
    },
    getters : {
        record(state){
            console.log("homenews.record", state.item);
            return state.item;
        },
        records(state){
            console.log("homenews.getters.records", state.items);
            return state.items;
        }
    },
}