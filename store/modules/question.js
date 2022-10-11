export default{
    namespaced  : true,
    actions : {
        async send(context, payload){
            console.log("question.send");
            if(localStorage.getItem("api_token"))
                payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/request/question/add",
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
        async list(context, payload){
            const res = await fetch("api/v1/question/list");
            const data = await res.json();
            context.commit('updateItems', data);
        }
    },
    mutations : {
        updateResult(state, data){
            state.result = data;
        },
        updateItems(state, data){
            state.items = data;
        }
    },
    state : {
        items : [],
        result : {}
    },
    getters : {
        records(state){
            console.log("request.records", state.items);
            return state.items;
        }
    },
}


