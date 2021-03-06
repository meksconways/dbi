
import axios from 'axios'
import {
    check_token_url,
    login_url,
    manager_biyolojik_degerler_delete,
    manager_biyolojik_degerler_get,
    manager_biyolojik_degerler_patch,
    manager_biyolojik_degerler_post,
    manager_duyuru_delete_url,
    manager_duyuru_ekle_url,
    manager_duyuru_get_url,
    manager_duyuru_patch_url, manager_errorreports_delete_url, manager_errorreports_get_url,
    manager_faqs_delete_url,
    manager_faqs_get_url,
    manager_faqs_patch_url,
    manager_faqs_post_url,
    manager_feedbacks_delete_url,
    manager_feedbacks_get_url,
    manager_kandegeri_delete,
    manager_kandegeri_get,
    manager_kandegeri_patch,
    manager_kandegeri_post,
    manager_logout_url,
    manager_profile_get_url,
    manager_profile_logout_url,
    manager_profile_patch_url,
    manager_sikayet_delete_url,
    manager_sikayet_get_url,
    manager_user_profile_delete_url,
    manager_user_profile_get_url,
    manager_users_url,
    register_url,
    sign_phone_url,
    user_biyolojik_degerler_get_url,
    user_duyuru_get_url,
    user_errorreports_post_url,
    user_faqs_get_url, user_feedbacks_post_url,
    user_kandegerleri_get_url, user_loginwithfb_url, user_loginwithgoogle_url,
    user_logout_url,
    user_profile_delete_url,
    user_profile_get_url,
    user_profile_post_url,
    user_sikayet_post_url
} from "./ApiUrl";

// USER TARAFI
export const fetchUserDuyuruGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_duyuru_get_url.method,
        url:user_duyuru_get_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })


};

export const fetchUserLoginwithFB = function (data,callback) {
    axios({

        method: user_loginwithfb_url.method,
        url:user_loginwithfb_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })



};
export const fetchUserLoginwithGoogle = function (data,callback) {
    axios({

        method: user_loginwithgoogle_url.method,
        url:user_loginwithgoogle_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })



};

export const fetchUserSikayetPost = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_sikayet_post_url.method,
        url:user_sikayet_post_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })

};

export const fetchUserErrorReportsPost = function (data,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_errorreports_post_url.method,
        url:user_errorreports_post_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};
export const fetchUserFeedbacksPost = function (data,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_feedbacks_post_url.method,
        url:user_feedbacks_post_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserFaqsGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_faqs_get_url.method,
        url:user_faqs_get_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserBiyolojikDegerlerGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_biyolojik_degerler_get_url.method,
        url:user_biyolojik_degerler_get_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserKanDegerleriGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_kandegerleri_get_url.method,
        url:user_kandegerleri_get_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserProfileGet = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_profile_get_url.method,
        url:user_profile_get_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};
export const fetchUserProfilePost = function (data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_profile_post_url.method,
        url:user_profile_post_url.url,
        data:data

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserProfileDelete = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_profile_delete_url.method,
        url:user_profile_delete_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};

export const fetchUserLogout = function (callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: user_logout_url.method,
        url:user_logout_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })
};





// deneme
export const fetchGirisYap = function (data,onSuccess,onError) {

    axios({
        method: login_url.method,
        url:login_url.url,
        data:data


    })
        .then(
            (res) => {
                onSuccess(res);
            }

        ).catch(error => {
        onError(error)
    })

};


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


export const fetchManagerLogout = function (callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method: manager_logout_url.method,
        url:manager_logout_url.url,

    })
        .then(res=>{
            callback(res);
        })
        .catch(error => {
            callback(error)
        })


};

// deneme
export const fetchKayitOl = function (data,onSuccess,onError) {
    axios({
        method: register_url.method,
        url:register_url.url,
        data:data
    })
        .then(res=>{
            onSuccess(res)
        })
        .catch(error => {
            onError(error)
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


// deneme
export const fetchTelefonlaGiris = function (data,callbackSuccess,callBackErr) {

    axios({
        headers:{
            'Content-Type':'application/json'
        },
        method:sign_phone_url.method,
        url:sign_phone_url.url,
        data:data
    }).then(response => {
        callbackSuccess(response)
    }).catch(err => {
        callBackErr(err)
    })

};


export const fetchPhoneSign = function (data,callback) {


    axios({
        headers:{
          'Content-Type':'application/json'
        },
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
        url:manager_sikayet_delete_url.url+'/'+id

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

export const fetchManagerBiyoloijkDegerlerPatch = function (id,data,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_biyolojik_degerler_patch.method,
        url:manager_biyolojik_degerler_patch.url+'/'+id,
        data:data



    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerBiyoloijkDegerlerDelete = function (id,callback) {

    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_biyolojik_degerler_delete.method,
        url:manager_biyolojik_degerler_delete.url+'/'+id,

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
            'token':localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        method:manager_kandegeri_patch.method,
        url:manager_kandegeri_patch.url+'/'+id,
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
        url:manager_kandegeri_delete.url+'/'+id,


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

export const fetchManagerErrorReportsGet = function (callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_errorreports_get_url.method,
        url:manager_errorreports_get_url.url


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};

export const fetchManagerErrorReportsDelete = function (id,callback) {
    axios({
        headers:{
            'token':localStorage.getItem('token')
        },
        method:manager_errorreports_delete_url.method,
        url:manager_errorreports_delete_url.url+'/'+id


    }).then(res=>{
        callback(res)
    })
        .catch(err => {
            callback(err)
        })


};


