export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("certificates.list");
            const res = await fetch("/api/v1/certificate/list");
            const data = await res.json();
            context.commit('updateList', data);
        },
    },
    mutations : {
        updateList(state, data){
            state.items = data;
        },
    },
    state : {
        items : [],
        item : {}
    },
    getters : {
        records(state){
            console.log("certificate.records", state.items);
            return state.items;
        }
    },
}