export default{
    namespaced  : true,
    actions : {
        async httpFetch(context, payload){
            console.log("hometab.httpFetch");
            const res = await fetch("/api/v1/realty/list/?best=1&estate=" + payload);
            const data = await res.json();
            context.commit('updateState', data);
        }
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
            console.log("hometab.getters.records", state.items);
            return state.items;
        }
    },
}