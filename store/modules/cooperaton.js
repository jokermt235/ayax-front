export default{
    namespaced  : true,
    actions : {
        async send(context, payload){
            console.log("cooperation.send");
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/request/cooperation/add",
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
        
    },
    mutations : {
        updateResult(state, data){
            state.result = data;
        }
    },
    state : {
        items : [],
        result : {}
    },
    getters : {
        records(state){
            console.log("cooperation.getters", state.items);
            return state.items;
        }
    },
}