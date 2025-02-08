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

export const uploadImage=(image,postId)=>{
    let formData=new FormData()
    formData.append("image",image)

    return privateAxios.post(`/blog/posts/upload/image/${postId}`,formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    .then(response=>response.data)
}


export const getPostByCategory=(categoryId)=>{
    return privateAxios.get(`/blog/posts/category/${categoryId}`).then(response=>response.data)
}


export const getPostByUser=(userId)=>{
    return privateAxios.get(`/blog/posts/user/${userId}`).then(response=>response.data)
}


export function deletePost(postId){
    return privateAxios.delete(`/blog/posts/${postId}`).then(response=>response)
}