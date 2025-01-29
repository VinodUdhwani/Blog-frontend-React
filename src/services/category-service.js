import { myAxios } from "./helper"

export const loadCategories=()=>{
    return myAxios.get(`/blog/categories/`).then((response)=>{return response.data})
}