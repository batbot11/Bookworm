import api from "../callbacks/api";
import { userLoggedIn } from "./auth";

export const signup = (data) => (dispatch) => api.user.signup(data)
.then(user => {
    localStorage.AuthJWT = user.token
    dispatch(userLoggedIn(user))});