import { createContext,useContext, useEffect, useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,settoken]=useState(localStorage.getItem("token"));
    const [user,setuser]=useState("");
    const [isLoading,setLoading]=useState(true);
    const [services,setservices]=useState([]);
    const API=import.meta.env.VITE_APP_URI_API;
    const storeToken=(servertoken)=>{
        settoken(servertoken);
        return localStorage.setItem("token",servertoken);
    }
    const isloggedIn=!!token;
    const Logoutuser=()=>{
        settoken("");
        return localStorage.removeItem("token");
    }
    const userAuthentcation=async()=>{
        try{
            setLoading(true);
            const response=await fetch(`${API}/api/auth/user`,
                {
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`,
                    }
                }

            )
            if(response.ok){
                const data=await response.json();
                console.log(data.userdata);
                setuser(data.userdata);
                setLoading(false);
            }
        }catch(error){
            console.error("Error fetching user data");
            setLoading(false);
        }
    }
    const getServices=async()=>{
        try{
            const response=await fetch(`${API}/api/data/service`,{
                method:"GET",
                
            })
           if(response.ok){
             const data=await response.json();
            console.log(data.msg);
            setservices(data.msg);
           }

        }catch(error){
            console.log(`Services frontend error: ${error}`)
        }
    }
    useEffect(()=>{
        userAuthentcation();
        getServices();

    },[])
    return (
        <AuthContext.Provider value={{isloggedIn,Logoutuser,storeToken,user,services,token,isLoading,API}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}