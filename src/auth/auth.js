// check user is login or not

export const isLoggedIn=()=>{
    let token=localStorage.getItem("login-details")
    if(token==null){
        return false
    }else{
        return true
    }
}

// for login need to set details in local storage

// json.stringify is used to convert object to string
export const doLogin=(loginDetails,next)=>{
    localStorage.setItem("login-details",JSON.stringify(loginDetails))
    next()
}

// for logout need to remove details from local storage
export const doLogout=(next)=>{
    localStorage.removeItem("login-details")
    next()
}


// get current user
// json.parse is used to convert string to object
export const getCurrentUser=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("login-details"))?.userDto 
    }else{
        return undefined
    }
}


// get token form local storage


export const getToken=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("login-details")).token
    }
}