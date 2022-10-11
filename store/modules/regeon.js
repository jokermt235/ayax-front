export default{
    namespaced  : true,
    actions : {
        async fetchRegeons(context){
            console.log("Regions fetch  action");
            const res = await fetch("/api/v1/address/locality/list");
            const regeons = await res.json();
            context.commit('updateRegeons', regeons);
        }
    },
    mutations : {
        updateRegeons(state, regeons){
            state.regeons = regeons;
        }
    },
    state : {
        regeons : []
    },
    getters : {
        regeonList(state){
            console.log("getters.regeonList", state.regeons);
            return state.regeons;
        }
    },
}
