import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
// import { ToastContainer, toast } from 'react-toastify';
export const Login=()=>{
      const [user,setuser]=useState({
          
           email:"",
          
           password:"",
       })
       const handleInput=(e)=>{
           console.log(e);
           let name=e.target.name;
           let value=e.target.value;
           setuser({
               ...user,
               [name]:value,
           })
       }
       const {storeToken,API}=useAuth();
       const Navigate=useNavigate();
       const handlesubmit=async(e)=>{
           e.preventDefault();
           console.log(user);
        //    alert(user);
           try{
            const response=await fetch(`${API}/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
           })
           console.log(response);
           const responsedata=await response.json();

           if(response.ok){
            alert("Login Successfully...");
           
            storeToken(responsedata.token);
            setuser({
                email:"",
                password:"",
            })
            console.log("Response data:",responsedata);
            Navigate("/");
           }
           else{
            console.log("Error inside response...");
            //alert("Invalid Credentials...");
            alert(responsedata.message);

           }
           
           }catch(error){
            console.log("Login",error);
           }
       }
   
       return (
           <>
           <section>
               <main>
                   <div className="section-register">
                       <div className="registration-container">
                           <div className="registration-image">
                               <img src="../images/registration.png" alt="not found" />
                           </div>
                           <div className="registration-form">
                               <h1 className="main-heading">Login Here</h1>
                               <br />
                               <form action="" method="post" onSubmit={handlesubmit}>
                                   
                                   <div>
                                       <label htmlFor="email">Email</label>
                                       <input type="text" name="email" value={user.email} placeholder="email" onChange={handleInput}/>
                                   </div>
                                   
                                   <div>
                                       <label htmlFor="password">Password</label>
                                       <input type="text" name="password" value={user.password} placeholder="password" onChange={handleInput}/>
                                   </div>
                                   <br />
                                   <button type="submit" className="btn">Login</button>
                               </form>
   
                           
                           </div>
                       </div>
                   </div>
               </main>
           </section>
           </>
       )
}