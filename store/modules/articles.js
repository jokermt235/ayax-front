export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("article.httpFetch");
            let page = '';
            if(payload){
                if(payload.page){
                    page = '?' + page;
                }
            }
            const res = await fetch("/api/v1/article/list" + page);
            const data = await res.json();
            context.commit('updateAll', data);
        },
        async getOneByUrl(context, payload){
            console.log("article.getOneByUrl");
            const res = await fetch("/api/v1/article/item?url" + payload);
            const data = await res.json();
            context.commit('updateItem', data);
        }
    },
    mutations : {
        updateAll(state, data){
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
            console.log("article.record", state.item);
            return state.item;
        },
        records(state){
            console.log("article.getters.records", state.items);
            return state.items;
        }
    },
}