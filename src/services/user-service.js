import { BASE_URL, myAxios } from "./helper";

export const register=(user)=>{
    return myAxios.post('/blog/secure/register',user).then((repsonse)=>repsonse.data)
}


export const signIn=(user)=>{
    return myAxios.post('/blog/secure/login',user).then((respponse)=>respponse.data)
}

export const getUser=(userId)=>{
    return myAxios.get(`/blog/users/${userId}`).then(response=>response.data)
}