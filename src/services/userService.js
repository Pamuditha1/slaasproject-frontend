import http from "./httpService"
import { toast } from "react-toastify";

const apiEndPoint = "http://localhost:3000/slaas/api/register-user";

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
        return ({errors: "no"})
      })
      .catch(function (error) {
        console.log(error.response.data);
        toast.error(error.response.data);
      });

}

