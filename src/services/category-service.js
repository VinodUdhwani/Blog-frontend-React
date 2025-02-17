import { myAxios, privateAxios } from "./helper"

export const loadCategories=()=>{
    return myAxios.get(`/blog/categories/`).then((response)=>{return response.data})
}

export const createCategory=(category)=>{
    return privateAxios.post(`/blog/categories/`,category).then(response=>response.data)
}