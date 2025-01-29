import { myAxios, privateAxios } from "./helper"

export const addPost=(post)=>{
    console.log(post)
    return privateAxios.post(`/blog/posts/user/${post.userId}/category/${post.categoryId}`,post).then(response=>response.data)
}

export const getAllPost=()=>{
    return myAxios.get(`/blog/posts/`).then(response=>response.data)
}