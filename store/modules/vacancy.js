export default{
    namespaced  : true,
    actions : {
        async add(context, payload){
            payload.api_token = localStorage.getItem("api_token");
            let doc = document.querySelector("input[name=file]").files[0];
            let formData = new FormData();
            formData.append("file", doc);
            let keys = Object.keys(payload);
            keys.forEach(key=>{
                formData.append(key, payload[key]);
            });
            console.log("vacancy.add", formData);
            const res = await fetch("api/v1/request/vacancy/add",{ 
                method: 'POST',
                body : formData
            });
            const data = await res.json();
            context.commit('updateAddResult', data);
        },
        
    },
    mutations : {
        updateAddResult(state, data){
            state.addResult = data;
        }
    },
    state : {
        items : [],
        resulst : {}
    },
    getters : {
        records(state){
            console.log("employee.storyList", state.items);
            return state.items;
        }
    },
}