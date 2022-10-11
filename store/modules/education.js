export default{
    namespaced  : true,
    actions : {
        async send(context, payload){
            console.log("education.send");
            if(localStorage.getItem("api_token"))
                payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/request/education/add",
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
            console.log("education.getters", state.items);
            return state.items;
        }
    },
}