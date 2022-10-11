export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("module.reviews", "request...");
            let queryString = "";
            if(payload){
                queryString = new URLSearchParams(payload).toString();
                queryString = "?" + queryString;
            }
    
            const res = await fetch("/api/v1/employee/review/list" + queryString);
            const data = await res.json();
            context.commit('updateItems', data);
        }
    },
    mutations : {
        updateItems(state, data){
            state.items = data;
        }
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log("module.reviews", state.items); 
            return state.items;
        }
    },
}