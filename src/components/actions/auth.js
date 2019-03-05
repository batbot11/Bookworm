import api from "../callbacks/api";
import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../constants/constants";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    payload: user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})


export const login = credentials => dispatch => api.user.login(credentials).then(user => {
    localStorage.AuthJWT = user.token
    dispatch(userLoggedIn(user))}

);
export const logout = () => dispatch => {
    localStorage.removeItem("AuthJWT")
    dispatch(userLoggedOut())
}

