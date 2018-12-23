
import axios from 'axios'
import {
    check_token_url,
    login_url,
    manager_duyuru_delete_url,
    manager_duyuru_ekle_url,
    manager_duyuru_get_url,
    manager_duyuru_patch_url, manager_faqs_delete_url,
    manager_faqs_get_url,
    manager_faqs_patch_url,
    manager_faqs_post_url,
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

export const fetchManagerDuyuruGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_duyuru_get_url.method,
        url:manager_duyuru_get_url.url,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerDuyuruPost = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        method:manager_duyuru_ekle_url.method,
        url:manager_duyuru_ekle_url.url,
        data:data

    }).then(res => {
        callback(res);
    })
        .catch(err => {
            callback(err);
        })

};

export const fetchManagerDuyuruPatch = function (id,data,callback) {

    axios({

      headers : {
          'token':localStorage.getItem('token'),
          'Content-Type':'application/json',

      },
      method : manager_duyuru_patch_url.method,
        url:manager_duyuru_patch_url.url+'/'+id,
        data:data

    }).then(res =>{
        callback(res)
    })
        .catch(err =>{
            callback(err)
        })


};

export const fetchManagerDuyuruDelete = function (id,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_duyuru_delete_url.method,
        url:manager_duyuru_delete_url.url+'/'+id,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};
export const fetchManagerFaqsGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_faqs_get_url.method,
        url:manager_faqs_get_url.url

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};
export const fetchManagerFaqsPost = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_faqs_post_url.method,
        url:manager_faqs_post_url.url,
        data:data

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};
export const fetchManagerFaqsPatch = function (id,data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_faqs_patch_url.method,
        url:manager_faqs_patch_url.url+'/'+id,
        data:data

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};
export const fetchManagerFaqsDelete = function (id,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_faqs_delete_url.method,
        url:manager_faqs_delete_url.url+'/'+id

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};


