import http from "./httpService"
import axios from 'axios'
import { toast } from "react-toastify";



const apiEndPoint = "http://localhost:3000/slaas/api/users";

export function userRegister(user) {

    return http.post(apiEndPoint, {
        userName : user.userName ,
        officeID : user.officeID,
        email: user.email,
        password: user.password,
        accountType: user.accountType
    })
      .then(function (response) {
        console.log(response);
        toast.success(`${response.data}`);
      })
      .catch(function (error) {
        console.log(error.response.data);
        toast.error(error.response.data);
      });

}

