export default{
    namespaced  : true,
    actions : {
        async officeList(context, payload){
            console.log("office.officeList");
            const res = await fetch("api/v1/office/list");
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
            console.log("office.records", state.items);
            return state.items;
        }
    },
}