export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("loyalty.list");
            const res = await fetch("/api/v1/partner/loyalty/list");
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
            console.log("loyalty.getters.records", state.items);
            return state.items;
        }
    },
}