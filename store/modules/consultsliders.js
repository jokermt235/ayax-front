export default{
    namespaced  : true,
    actions : {
        async httpFetch(context){
            console.log("consultsliders.httpFetch");
            const res = await fetch("api/v1/request/consultation/employee/list");
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
            console.log("consultsliders.getters.records", state.items);
            return state.items;
        }
    },
}