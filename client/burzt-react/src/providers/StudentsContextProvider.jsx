import { Children, createContext } from "react";

const studentsContext=createContext({
    signUp:async()=>{}
});

const signUp=async(username,password)=>{
    const response=await fetch('http://localhost:5500/students/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:username,
            password:password
        })
    })
    const data=await response.json();
    if(data.error){
        alert(data.error)
    }
    else{
        console.log(data.message)
    }
}
const StudentsContextProvider=({children})=>{
    return<>
    <studentsContext.Provider value={{signUp}}>
        {children}
    </studentsContext.Provider>
    </>
}
export {studentsContext,StudentsContextProvider}