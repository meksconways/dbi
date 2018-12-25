
import axios from 'axios'
import {
    check_token_url,
    login_url, manager_biyolojik_degerler_get, manager_biyolojik_degerler_post,
    manager_duyuru_delete_url,
    manager_duyuru_ekle_url,
    manager_duyuru_get_url,
    manager_duyuru_patch_url,
    manager_faqs_delete_url,
    manager_faqs_get_url,
    manager_faqs_patch_url,
    manager_faqs_post_url, manager_feedbacks_delete_url, manager_feedbacks_get_url,
    manager_kandegeri_delete,
    manager_kandegeri_get,
    manager_kandegeri_patch,
    manager_kandegeri_post,
    manager_profile_get_url,
    manager_profile_logout_url,
    manager_profile_patch_url,
    manager_sikayet_delete_url,
    manager_sikayet_get_url,
    manager_user_profile_delete_url,
    manager_user_profile_get_url,
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

export const fetchManagerProfileGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_profile_get_url.method,
        url:manager_profile_get_url.url

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerProfilePatch = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_profile_patch_url.method,
        url:manager_profile_patch_url.url,
        data:data

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerProfileLogout = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_profile_logout_url.method,
        url:manager_profile_logout_url.url,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerUserProfileGet = function (id,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_user_profile_get_url.method,
        url:manager_user_profile_get_url.url+'/'+id,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerUserProfileDelete = function (id,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_user_profile_delete_url.method,
        url:manager_user_profile_delete_url.url+'/'+id,

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })

};

export const fetchManagerSikayetDelete = function (id,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_sikayet_delete_url.method,
        url:manager_sikayet_delete_url.url

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerSikayetGet = function (callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_sikayet_get_url.method,
        url:manager_sikayet_get_url.url

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerKanDegerleriGet = function (callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_kandegeri_get.method,
        url:manager_kandegeri_get.url

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerBiyoloijkDegerlerPost = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        method:manager_biyolojik_degerler_post.method,
        url:manager_biyolojik_degerler_post.url,
        data:data


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerBiyoloijkDegerlerGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_biyolojik_degerler_get.method,
        url:manager_biyolojik_degerler_get.url,



    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};


export const fetchManagerKanDegerleriPost = function (data,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_kandegeri_post.method,
        url:manager_kandegeri_post.url,
        data:data

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};
export const fetchManagerKanDegerleriPatch = function (id,data,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_kandegeri_patch.method,
        url:manager_kandegeri_patch.url,
        data:data

    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};
export const fetchManagerKanDegerleriDelete = function (id,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_kandegeri_delete.method,
        url:manager_kandegeri_delete.url,


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerFeedbacksGet = function (callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_feedbacks_get_url.method,
        url:manager_feedbacks_get_url.url,


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};
export const fetchManagerFeedbacksDelete = function (id,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_feedbacks_delete_url.method,
        url:manager_feedbacks_delete_url.url+'/'+id,


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};


