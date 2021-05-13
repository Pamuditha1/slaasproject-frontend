import http from "./httpService"
import axios from 'axios'
import { toast } from "react-toastify";
import {api} from './api'

const apiEndPoint = `${api}/user/register-member`;

export function registerMember(member) {

    return http.post(apiEndPoint, member)
    .then(function (response) {
        console.log(response.data);
        toast.success(`${response.data}`);
        return true
    })
    .catch(function (error) {
        if(error.response.data) {
            console.log(error.response.data);
            toast.error(error.response.data);
            return true
        }
        if(error.response) {
            console.log(error.response);
            toast.error(error.response);
            return true
        }
        else {
            console.log(error);
            toast.error(error);
            return true
        }

    });

}

