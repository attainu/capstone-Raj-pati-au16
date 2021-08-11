export const getAuth = ()=>JSON.parse(localStorage.getItem("Token"));

export const setAuth = (data)=> localStorage.setItem("Token",(data));