export default{
    namespaced  : true,
    actions : {
        async register(context, payload){
            console.log("user.register", payload);
            const res = await fetch("api/v1/user/register", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateState', data);
        },
        async login(context, payload){
            console.log("user.login");
            const res = await fetch("api/v1/user/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateApiToken', data);
        },
        async logout(context){
            console.log("user.login");
            const res = await fetch("api/v1/user/logout");
            const data = await res.json();
            context.commit('updateState', data);
        },
        async subscribe(context, payload){
            console.log("user.subscribe");
            const res = await fetch("api/v1/request/subscription/add", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateState', data);
        },
        async send(context, payload){
            console.log("user.recover");
            const res = await fetch("api/v1/user/recover/password/send", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateCodeResult', data);
        },
        async recover(context, payload){
            console.log("user.recover");
            const res = await fetch("api/v1/user/recover/password", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateRecoverResult', data);
        },
        async  getOne(context, payload){
            console.log("user.getOne");
            const res = await fetch("api/v1/user/item");
            const data = await res.json();
            context.commit('updateUser', data);
        },
        async update(context, payload){
            console.log("user.update");
            const res = await fetch("api/v1/user/update", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            });
            const data = await res.json();
            context.commit('updateUserResult', data);
        }
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        },
        updateCodeResult(state, data){
            state.recoverResult = data;
        },
        updateRecoverResult(state, data){
            state.recoverResult = data;
        },
        updateApiToken(state, data){
            state.api_token = data.api_token;
            localStorage.setItem("api_token", data.api_token);
        },
        updateUser(state, data){
            state.user = data;
        },
        updateUserResult(state, data){
            state.user = data;
        }
    },
    state : {
        items : [],
        recoverResult : {},
        recoverPasswordResult : {},
        api_token : "",
        user : {},
    },
    getters : {
        codeResult(state){
            if(state.recoverResult.success){
                return true;
            }
            return false;
        },
        records(state){
            console.log("register.getters.records", state.items);
            return state.items;
        },
        getApiToken(){
            return localStorage.setItem("api_token", api_token);
        },
        getUser(state){
            return state.user;
        }
    },
}