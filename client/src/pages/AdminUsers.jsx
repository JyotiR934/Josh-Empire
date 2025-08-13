import { useState } from "react";
import { useEffect } from "react"
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
export const AdminUsers=()=>{
    const [users,setusers]=useState([]);
    const {token,API}=useAuth()
    const getUsers=async()=>{
        try{
            const response=await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
            })
            console.log(response);
            if(response.ok){
                const allusers=await response.json();
                 console.log(allusers);
                setusers(allusers);
                
            }
        }catch(error){
            console.log("Error in getting data...",error);
        }
    }
    const deleteUser=async(id)=>{
        try{
            const response=await fetch(`${API}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
            })
            const data=await response.json();
            console.log(`User after delete : ${data}`);
            if(response.ok){
                getUsers();
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getUsers();
    },[])
    return <>
    <section className="adminuser-section">
            <div className="adminuser-container">
                <h1 className="contact-heading">Admin Users Data</h1>
                <br />
                <div className="adminusercard">
                   <table>
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            users.map((currElem,index)=>{
                             const {username,email,phone,isadmin}=currElem;
                            return (
                            <tr key={index}>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>
                                <button className="btn-edit"><Link to={`/admin/user/${currElem._id}`}>Edit</Link></button>
                                </td>
                                <td>
                                <button className="btn-delete" onClick={()=>{deleteUser(currElem._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                        })
                        }
                    </tbody>
                   </table>
                    

                </div>
            </div>
        </section>
    </>
}