import axios from 'axios';

export const getUserList = (ss) => {
    return axios
     .get("http://localhost:3030/Users/get?p="+ss,{
         headers:{"Content-type": "application/json"}
     })
     .then(res => {
         return res.data;
     } )
}



