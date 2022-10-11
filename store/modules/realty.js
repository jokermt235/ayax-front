export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("realty.list");
            const u = "?" + new URLSearchParams(payload).toString();
            const res = await fetch(`/api/v1/realty/list/${u}`);
            const data = await res.json();
            context.commit('updateList', data);
        },
        async send(context, payload){
            if(localStorage.getItem("api_token"))
                payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/request/realty/sale/add",
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
        updateList(state, data){
            state.items = data;
        }
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log("realty.records", state.items);
            return state.items;
        }
    },
}