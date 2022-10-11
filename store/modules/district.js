import apartments from "./apartments";

export default{
    namespaced  : true,
    actions : {
        async list(context){
            console.log("consultypes.httpFetch");
            const res = await fetch("api/v1/address/district/list");
            const data = await res.json();
            context.commit('updateItems', data);
        },
    },
    mutations : {
        updateItems(state, data){
            let alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'C', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
            let pushItems = [];
            const N = 9;
            for(var i = 1; i <= N; i++) {
                let districts = [];
                data.forEach(element => {
                    if(element.name[0].includes(i)){
                        districts.push(element);
                    }
                });
                if(districts.length > 0){
                    pushItems.push(
                        {
                            letter : i,
                            items : districts
                        }
                    )
                }
            }
            alphabet.forEach(item=>{
                let districts = [];
                data.forEach(element => {
                    if(element.name[0].includes(item)){
                        districts.push(element);
                    }
                });

                if(districts.length > 0){
                    pushItems.push(
                        {
                            letter : item,
                            items : districts
                        }
                    )
                }
            });
            state.items = pushItems;
        },
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log('store.district', state.items);
            return state.items;
        }
    },
}