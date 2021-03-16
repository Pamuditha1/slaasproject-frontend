import http from "./httpService"
import axios from 'axios'
import { toast } from "react-toastify";



const apiEndPoint = "http://localhost:3001/slaas/api/user/search";

export function searchMember(word) {

    console.log(word)
    return http.get(apiEndPoint, {
        searchWord : word
    })
    .then(function (response) {
        console.log(response.data);
        toast.success(`${response.data}`);
    })
    .catch(function (error) {
        if(error.response.data) {
            console.log(error.response.data);
            toast.error(error.response.data);
        }
        if(error.response) {
            console.log(error.response);
            toast.error(error.response);
        }
        else {
            console.log(error);
            toast.error(error);
        }

    });

}

