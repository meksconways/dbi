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

export const manager_profile_get_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_profile_get.url,
    method:Apiendpoint.manager_profile_get.method

};

export const manager_profile_patch_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_profile_patch.url,
    method:Apiendpoint.manager_profile_patch.method

};

export const manager_profile_logout_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_profile_logout.url,
    method:Apiendpoint.manager_profile_logout.method

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

export const manager_user_profile_get_url = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_user_profile_get.url,
    method:Apiendpoint.manager_user_profile_get.method
};

export const manager_user_profile_delete_url = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_user_profile_delete.url,
    method:Apiendpoint.manager_user_profile_delete.method
};
export const manager_kandegeri_get = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_kandegeri_get.url,
    method:Apiendpoint.manager_kandegeri_get.method
};
export const manager_kandegeri_post = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_kandegeri_post.url,
    method:Apiendpoint.manager_kandegeri_post.method
};
export const manager_kandegeri_patch = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_kandegeri_patch.url,
    method:Apiendpoint.manager_kandegeri_patch.method
};
export const manager_kandegeri_delete = {
    url:Apiendpoint.manager_base_url+Apiendpoint.manager_kandegeri_delete.url,
    method:Apiendpoint.manager_kandegeri_delete.method
};

export const manager_biyolojik_degerler_post = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_biyolojikdegerler_post.url,
    method:Apiendpoint.manager_biyolojikdegerler_post.method

};

export const manager_biyolojik_degerler_patch = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_biyolojikdegerler_patch.url,
    method:Apiendpoint.manager_biyolojikdegerler_patch.method

};

export const manager_biyolojik_degerler_delete = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_biyolojikdegerler_delete.url,
    method:Apiendpoint.manager_biyolojikdegerler_delete.method

};

export const manager_logout_url ={

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_logout.url,
    method:Apiendpoint.manager_logout.method

};


export const manager_biyolojik_degerler_get = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_biyolojikdegerler_get.url,
    method:Apiendpoint.manager_biyolojikdegerler_get.method

};

export const manager_feedbacks_get_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_feedbacks_get.url,
    method:Apiendpoint.manager_feedbacks_get.method

};

export const manager_feedbacks_delete_url = {

    url:Apiendpoint.manager_base_url+Apiendpoint.manager_feedbacks_delete.url,
    method:Apiendpoint.manager_feedbacks_delete.method

};

// user tarafı


export const user_duyuru_get_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_duyuru_get.url,
    method:Apiendpoint.user_duyuru_get.method

};

export const user_sikayet_post_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_sikayetler_post.url,
    method:Apiendpoint.user_sikayetler_post.method

};

export const user_errorreports_post_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_errorreports_post.url,
    method:Apiendpoint.user_errorreports_post.method

};

export const user_feedbacks_post_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_feedbacks_post.url,
    method:Apiendpoint.user_feedbacks_post.method

};

export const user_faqs_get_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_faqs_get.url,
    method:Apiendpoint.user_faqs_get.method

};

export const user_biyolojik_degerler_get_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_biyolojik_degerler_get.url,
    method:Apiendpoint.user_biyolojik_degerler_get.method

};

export const user_kandegerleri_get_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_kandegerleri_get.url,
    method:Apiendpoint.user_kandegerleri_get.method

};

export const user_logout_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_logout.url,
    method:Apiendpoint.user_logout.method

};

export const user_profile_get_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_profile_get.url,
    method:Apiendpoint.user_profile_get.method

};

export const user_profile_post_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_profile_post.url,
    method:Apiendpoint.user_profile_post.method

};

export const user_profile_delete_url = {

    url:Apiendpoint.user_base_url+Apiendpoint.user_profile_delete.url,
    method:Apiendpoint.user_profile_delete.method

};

export const user_loginwithfb_url = {
    url:Apiendpoint.base_url+Apiendpoint.user_loginwithfb.url,
    method:Apiendpoint.user_loginwithfb.method
};

export const user_loginwithgoogle_url = {
    url:Apiendpoint.base_url+Apiendpoint.user_loginwithgoogle.url,
    method:Apiendpoint.user_loginwithgoogle.method
};






