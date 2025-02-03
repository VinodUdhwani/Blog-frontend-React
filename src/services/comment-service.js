import {myAxios, privateAxios} from './helper';

export const addComment=(comment,userId,postId)=>{
    return privateAxios.post(`/blog/comments/user/${userId}/post/${postId}`,comment).then(response=>response.data)
}

export const getComments=(postId)=>{
    return myAxios.get(`/blog/comments/post/${postId}`).then(response=>response.data)
}