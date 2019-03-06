 import axios from "axios";

const api = {
    user: {
        login: ( credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        signup: (data) => axios.post("/api/user", {data}).then(res => res.data.user),
        confirm: token => axios.post("/api/user/confirmation", {token}).then(res => res.data.user)
    }
}

export default api;