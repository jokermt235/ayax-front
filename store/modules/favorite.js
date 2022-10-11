import { add } from "lodash";

export default{
    namespaced  : true,
    actions : {
        async list(context, payload){
            console.log("favorite.list");
            const res = await fetch("/api/v1/realty/favorite/list");
            const data = await res.json();
            context.commit('updateList', data);
        },
        async add(context, payload){
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/realty/favorite/add",{
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
        async remove(context, payload){
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("/api/v1/realty/favorite/remove",{
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
        },
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
            console.log("favorite.records", state.items);
            return state.items;
        },
        result(){
            return state.result;
        }
    },
}