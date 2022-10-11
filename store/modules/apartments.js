import { isObject } from "lodash";

export default{
    namespaced  : true,
    actions : {
        async httpFetch(context, payload){
            console.log("apartments.httpFetch");
            let query = "?";
            if(isObject(payload)){
                if(payload.sort){
                    query += 'sort=' + payload.sort;       
                }
                if(payload.sortBy){
                    query += '&sortBy=' + payload.sortBy;
                }
            }
            const res = await fetch("/api/v1/realty/list" + query);
            const data = await res.json();
            context.commit('updateState', data);
        }
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
            console.log("apartments.getters.records", state.items);
            return state.items;
        }
    },
}