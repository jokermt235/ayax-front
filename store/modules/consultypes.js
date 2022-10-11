import { testing } from "laravel-mix/src/Log";

export default{
    namespaced  : true,
    actions : {
        async httpFetch(context){
            console.log("consultypes.httpFetch");
            const res = await fetch("api/v1/request/consultation/category/employee/list");
            const data = await res.json();
            context.commit('updateSlides', data);
        },
    },
    mutations : {
        updateSlides(state, data){
            state.slides = data;
        },
    },
    state : {
        slides : []
    },
    getters : {
        slides(state){
            console.log('store.module.consultypes', state.slides);
            return state.slides;
        }
    },
}