
import axios from 'axios'
import {login_url} from "./ApiUrl";




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
            callback(error.response)
    })

};
