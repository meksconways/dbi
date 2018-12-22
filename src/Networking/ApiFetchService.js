
import axios from 'axios'
import {
    check_token_url,
    login_url,
    manager_sss_get_url,
    manager_users_url,
    register_url,
    sign_phone_url
} from "./ApiUrl";




export const fetchLogin = function (data,callback) {
    axios({
        method: login_url.method,
        url:login_url.url,
        data:data


    })
        .then(
            (res) => {
                callback(res);
            }

        ).catch(error => {
            callback(error)
    })

};

export const fetchRegister = function (data,callback) {

    axios({
        method: register_url.method,
        url:register_url.url,
        data:data
    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
    })

};

export const fetchUsers = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_users_url.method,
        url:manager_users_url.url,

    })
        .then(res=>{
            callback(res)
        })
        .catch(error=>{
            callback(error)
    })

};

export const fetchCheckToken = function (callback) {

    axios({
        headers: {
            'token':localStorage.getItem('token')
        },
        method:check_token_url.method,
        url:check_token_url.url

    })
        .then(res=>{
            callback(res)
        })
        .catch(error=>{
            callback(error)
        })

};

export const fetchPhoneSign = function (data,callback) {


    axios({
        method:sign_phone_url.method,
        url:sign_phone_url.url,
        data:data
    })
        .then(res=>{
            callback(res)
        })
        .catch(error=>{
            callback(error)
        })

};

export const fetchManagerSSSGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_sss_get_url.method,
        url:manager_sss_get_url.url,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};


