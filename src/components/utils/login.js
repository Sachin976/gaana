export const getLoginStatus = ()=>{
    if(localStorage.getItem('LOGIN_TOKEN') === 'test-login'){
        return true
    }else{
        return false
    }
} 
export const loginUser = ()=>{
    localStorage.setItem('LOGIN_TOKEN','test-login')
}

export const logoutUser = ()=>{
    localStorage.removeItem('LOGIN_TOKEN')
}
