import Apiendpoint from './ApiEndpoint'

export const login_url = {
    url:Apiendpoint.base_url+Apiendpoint.login.url,
    method:Apiendpoint.login.method

};

export const register_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.register.url,
    method: Apiendpoint.register.method
};

export const manager_users_url ={

    url:Apiendpoint.manager_base_url+Apiendpoint.users.url,
    method:Apiendpoint.users.method
};

export const check_token_url = {

    url:Apiendpoint.base_url+Apiendpoint.token_check.url,
    method:Apiendpoint.token_check.method

};

export const sign_phone_url={

    url:Apiendpoint.base_url+Apiendpoint.phone_sign.url,
    method:Apiendpoint.phone_sign.method

};

export const manager_duyuru_get_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_duyurular_get.url,
    method:Apiendpoint.manager_duyurular_get.method

};

export const manager_duyuru_ekle_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_duyuru_post.url,
    method:Apiendpoint.manager_duyuru_post.method

};

export const manager_duyuru_patch_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_duyuru_patch.url,
    method:Apiendpoint.manager_duyuru_patch.method

};

export const manager_duyuru_delete_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_duyuru_delete.url,
    method:Apiendpoint.manager_duyuru_delete.method

};

export const manager_sikayet_get_url = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_sikayet_get.url,
    method:Apiendpoint.manager_sikayet_get.method
};

export const manager_sikayet_delete_url = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_sikayet_delete.url,
    method:Apiendpoint.manager_sikayet_delete.method
};

export const manager_faqs_get_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_faqs_get.url,
    method:Apiendpoint.manager_faqs_get.method

};

export const manager_faqs_post_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_faqs_post.url,
    method:Apiendpoint.manager_faqs_post.method

};
export const manager_faqs_patch_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_faqs_patch.url,
    method:Apiendpoint.manager_faqs_patch.method

};
export const manager_faqs_delete_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_faqs_delete.url,
    method:Apiendpoint.manager_faqs_delete.method

};




