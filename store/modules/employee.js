export default{
    namespaced  : true,
    actions : {
        async storyList(context, payload){
            console.log("employee.story");
            const res = await fetch("/api/v1/employee/story/list?category=" + payload);
            const data = await res.json();
            context.commit('updateState', data);
        },
        async list(context, payload){
            let query =  "";
            if(payload) {
                query = new URLSearchParams(payload).toString();
                query = "?" + query;
            }
            const res = await fetch(`/api/v1/employee/list${query}`);
            const data = await res.json();
            context.commit('updateList', data);
            context.commit('updateSelects', data);
            context.commit('updateControls', data);
            context.commit('updateAppraisals', data);
        },
        async reviewList(context, payload){
            console.log("employee.store");
            let query =  "";
            if(payload) {
                query = "?" + payload;
            }
            const res = await fetch(`api/v1/employee/review/list${query}`);
            const data = await res.json();
            context.commit('updateReviewList', data);
        },
    },
    mutations : {
        updateControls(state, data){
            let items = [];
            data.forEach(element => {
                if(element.office){
                    if(element.office.name.includes("Отдел контроля качества")){
                        items.push(
                            {
                                src: element.image,
                                name: element.full_name,
                                post: element.office.name,
                                tel:  element.phone,
                            },
                        );
                    }
                } 
            });
            state.controls = items;
        },
        updateState(state, data){
            state.items = data;
        },
        updateSelects(state, data){
            state.selects = data;
        },
        updateList(state, data){
            let offices = data.map(item => {
                if(item.office){
                    return item.office.name;
                }
            }).filter(Boolean);

            let unique = [...new Set(offices)];

            let items = unique.map(item => {
                return {
                    label : item,
                    options : data.map(item1=>{
                        if(item1.office){
                            if(item1.office.name == item){
                                return  {
                                    text : item1.full_name ?? 'Пусто',
                                    value : item1.id
                                }
                            }
                        }
                    }).filter(Boolean)
                }   
            }).filter(Boolean);
            console.log('store.employee.upldateList items', items);
            state.selects = items;
            state.list = data;
            state.directors = data.map(item1=>{
                if(item1.position){
                    if(item1.position.name.includes('иректор')){
                        return item1;
                    }
                }
            }).filter(Boolean);
        },
        updateAppraisals(state, data){
            let items = [];
            data.forEach(element => {
                if(element.position){
                    if(element.position.name.includes("оценк")){
                        items.push(
                            {
                                src: "/" + element.image,
                                name: element.full_name,
                                post: element.office.name,
                                tel:  element.phone,
                            },
                        );
                    }
                } 
            });
            console.log("updateAppraisals", items);
            state.appraisals = items;
        },
        updateReviewList(state, data){
            state.reviewList = data;
        }

    },
    state : {
        items : [],
        list  : [],
        realtors : [],
        reviewList : [],
        selects : [],
        directors : [],
        controls : [],
        selects : [],
        appraisals : [],
    },
    getters : {
        records(state){
            return state.items;
        },
        items(state){
            return state.list;
        },
        reviewList(state){
            return state.reviewList;
        },
        selects(state){
            return state.selects;
        },
        directors(state){
            return state.directors;
        },
        controls(state){
            return state.controls;
        },
        selects(state){
            return state.selects;
        },
        appraisals(state){
            return state.appraisals;
        }
    },
}