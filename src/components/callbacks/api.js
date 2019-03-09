 import axios from "axios";

const api = {
    user: {
        login: ( credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        signup: (data) => axios.post("/api/user", {data}).then(res => res.data.user),
        confirm: token => axios.post("/api/user/confirmation", {token}).then(res => res.data.user),
        resetPasswordRequest: email => axios.post("/api/auth/reset_password_request", {email}),
        validateToken: token => axios.post("/api/auth/validate_token", {token}),
        resetPassword: data => axios.post("/api/auth/reset_password", {data})
    }
}

export default api;