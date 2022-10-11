export default{
    namespaced  : true,
    actions : {
        async httpFetch(context, payload){
            console.log("fastabs.httpFetch");
            var params = '';
            if(payload.best === 1){
                params = "?best=1";
            }
            const res = await fetch("/api/v1/realty/filter/tab/list" + params);
            const data = await res.json();
            context.commit('updateState', data);
        },
        
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        }
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log("fastabs.getters.records", state.items);
            return state.items;
        }
    },
}