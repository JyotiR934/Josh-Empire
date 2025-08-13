import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
export const Register=()=>{
    const {API}=useAuth();
    const [user,setuser]=useState({
        username:"",
        email:"",
        phone:"",
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
    const Navigate=useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(user);
        //alert(user);
        try{
            const response=await fetch(`${API}/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),

        })
        console.log(response);
        const responsedata=await response.json();
        if(response.ok){
            // console.log("Registered successfully...")
            alert("Registered successfully");
            //const responsedata=await response.json();
            setuser({
                username:"",
                email:"",
                phone:"",
                password:"",
            })
            console.log(responsedata);
            Navigate("/login")
        }
        else{
            console.log("Error inside response","error");
            alert(responsedata.message);
        }
        }
        catch(error){
            console.log("Register",error);
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
                            <h1 className="main-heading">Registration Here</h1>
                            <br />
                            <form action="" method="post" onSubmit={handlesubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" value={user.username} placeholder="username" onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" value={user.email} placeholder="email" onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" value={user.phone} placeholder="phone" onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="text" name="password" value={user.password} placeholder="password" onChange={handleInput}/>
                                </div>
                                <br />
                                <button type="submit" className="btn">Register Now</button>
                            </form>

                        
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}