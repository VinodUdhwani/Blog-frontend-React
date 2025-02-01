import { myAxios, privateAxios } from "./helper"

export const addPost=(post)=>{
    console.log(post)
    return privateAxios.post(`/blog/posts/user/${post.userId}/category/${post.categoryId}`,post).then(response=>response.data)
}

export const getAllPost=(pageNumber,pageSize)=>{
    return myAxios.get(`/blog/posts/?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data)
}

export const loadPostById=(postId)=>{
    return myAxios.get(`/blog/posts/${postId}`).then(response=>response.data)
}