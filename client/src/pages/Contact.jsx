import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
export const Contact=()=>{
    const [contact,setcontact]=useState({
            username:"",
            email:"",
            message:"",
        })
        const {user,API}=useAuth();
        const [data,setdata]=useState(true);
        useEffect(() => {
        if (user) {
       setcontact((prev) => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
    }));
  }
}, [user]);
        const handleInput=(e)=>{
            console.log(e);
            let name=e.target.name;
            let value=e.target.value;
            setcontact({
                ...contact,
                [name]:value,
            })
            // setcontact((prev)=>({
            //     ...prev,
            //     [name]:value,
            // }))
        }
        const handlesubmit=async(e)=>{
            e.preventDefault();
            console.log(contact);
            alert(contact);
            try{
                const response=await fetch(`${API}/api/form/contact`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(contact)
            })
            console.log(response);
            if(response.ok){
                const message=await response.json();
                console.log(message);
                setcontact(prev => ({
                     ...prev,
                     message: "",
                }));
            }else{
            console.log("Error inside contact","error")
        }
            }catch(arror){
                console.log("Error in saving contact...");
            }

        }
    return (
        <>
        <main>
            
                    
                <div className="section-register">
                    <h1 className="contact-heading" >Contact Us</h1>
                    <br />
                    <div className="registration-container">
                        <div className="registration-image">

                            <img src="../images/contact.jpeg" alt="not found" />
                        </div>
                        <div className="registration-form">
                            
                            <form action="" method="post" onSubmit={handlesubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" value={contact.username} placeholder="username" onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" value={contact.email} placeholder="email" onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" name="message" value={contact.message} placeholder="message" onChange={handleInput}  rows="10" cols="75"/>
                                </div>
                                
                                <br />
                                <button type="submit" className="btn">Submit</button>
                            </form>

                        
                        </div>
                    </div>
                </div>
                <div className="embeded-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14849.2666960329!2d83.90030125000001!3d21.49531265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753557652938!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </main>
        </>
    )
}