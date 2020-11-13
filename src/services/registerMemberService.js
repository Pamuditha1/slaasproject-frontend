import http from "./httpService"
import axios from 'axios'
import { toast } from "react-toastify";



const apiEndPoint = "http://localhost:3000/slaas/api/user/register-member";

export function registerMember(member) {

    return http.post(apiEndPoint, {
        personalData: member.personalData,
        officialData: member.officialData,
        professionalData: member.professionalData,
        membershipData: member.membershipData,
        paymentData: member.paymentData
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

