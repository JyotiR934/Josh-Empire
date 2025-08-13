import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
export const AdminContacts=()=>{
    const [contacts,setcontacts]=useState([]);
    const {token,API}=useAuth();
    const getAllContacts=async()=>{
        try{
            const response=await fetch(`${API}/api/admin/contacts`,{
                 method:"GET",
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
            })
            console.log(response);
            if(response.ok){
                const contactData=await response.json();
                console.log(contactData);
                setcontacts(contactData);
            }
        }catch(error){
            console.error(error);
        }
    }
    const deleteUserById=async(id)=>{
        try{
            const response=await fetch(`${API}/api/admin/contacts/delete/${id}`,{
                 method:"DELETE",
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
            })
            if(response.ok){
                alert("Message delete successfully...")
                getAllContacts();
                const message=await response.json();
                console.log(`Contact after delete :${message}`)
            }
            else{
                alert("Message not deleted...")
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getAllContacts();
    }, [])
    return <>
    <section className="admincontact-section">
        <div className="admincontact-container">
            <h1 className="admincontact-heading">All Contact Messages</h1>
            <div className="admincontact-card">
            {
                contacts.map((currElem,index)=>{
                    const {username,email,message}=currElem;
                    return(
                        
                        <div key={index}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{message}</p>
                        <button onClick={()=>{deleteUserById(currElem._id)}}>Delete</button>
                        </div>
                        
                    )
                })
            }
            </div>
        </div>
    </section>
    </>
}