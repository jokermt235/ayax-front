import { isObject, stubString } from "lodash";

export default{
    namespaced  : true,
    actions : {
        async fetchAll(context, payload){
            const res = await fetch("/api/v1/cottage/list");
            const data = await res.json();
            context.commit('updateState', data);
        },

        async fetchItemByCode(context, payload){
            const res = await fetch("/api/v1/cottage/item?code=" + payload);
            const data = await res.json();
            context.commit('updateItem', data);
        },
        async book(context, payload){
            payload.api_token = localStorage.getItem("api_token");
            const res = await fetch("api/v1/request/cottage/add", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateBookResult', data);
        }
    },
    mutations : {
        updateBookResult(state, data){
            state.book = data;
        },
        updateState(state, data){
            state.items = data;
        },
        updateItem(state, data){
            state.item = data;
        }
    },
    state : {
        items : [],
        item : {},
        book : {}
    },
    getters : {
        record(state){
            return state.item;
        },
        records(state){
            /*
                The records collection should look like this :
                [{
                    head_photo: 'https://www.ayax.ru/upload/resize_cache/iblock/296/379_241_2/2964ed3c43eae6ed141d919dcd74ef94.JPG',
                    name: 'Золотой город',
                    commission: '0',
                    yt_link: '#',
                    price: 'от 3,1 млн. ₽',
                },
                {
                    head_photo: 'https://www.ayax.ru/upload/resize_cache/iblock/296/379_241_2/2964ed3c43eae6ed141d919dcd74ef94.JPG',
                    name: 'Золотой город',
                    commission: '0',
                    yt_link: '#',
                    price: 'от 3,1 млн. ₽',
            }]*/
            return state.items;
        }
    },
}