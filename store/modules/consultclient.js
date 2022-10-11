export default{
    namespaced  : true,
    actions : {
        async httpFetch(context){
            console.log("consultypes.httpFetch");
            const res = await fetch("api/v1/request/consultation/category/list");
            const data = await res.json();
            context.commit('updateState', data);
        },
        async add(context, payload){
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("api/v1/request/consultation/add", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateResult', data);
        }
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        },
        updateResult(state, data){
            state.result = data;
        }
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log("consultypes.getters.records", state.items);
            return state.items;
        }
    },
}