import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';

export const AdminUserUpdate = () => {
    const params=useParams();
    console.log("Params single user",params);
    const {token,API}=useAuth()
    const [data,setdata]=useState({
        username:"",
        email:"",
        phone:"",
    })
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata({
            ...data,
            [name]:value,
        })
    }
    const getSingleuserData=async()=>{
        try{
            const response=await fetch(`${API}/api/admin/user/${params.id}`,{
                 method:"GET",
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
            })
            console.log(response);
            if(response.ok){
                const userdata=await response.json();
                console.log(userdata);
                setdata(userdata);
            }else{
                console.log('error inside getting data')
            }
        }catch(error){
            console.log("data can not get ",error)
        }
    }
    useEffect(()=>{
        getSingleuserData();
    },[])
    const handlesubmit=async(e)=>{
         e.preventDefault();
         try{
            const response=await fetch(`${API}/api/admin/user/update/${params.id}`,{
                method:"PATCH",
                headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"application/json",
                    },
                body:JSON.stringify(data)
            })
            console.log(response);
            if(response.ok){
                alert("Data updated succefully");
            }
            else{
                alert("Data not updated successfully")
            }
         }catch(error){
            console.log(error)
         }
    }
  return (
    <>
    <section className="updateuser-section">
        <div className="updateuser-contaier">
            <div className="updateuser-form">
                <h1 className="updateuser-heading">Update User Data</h1>
                <br />
                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={data.username} placeholder="username" onChange={handleInput}/>
                    </div>
                     <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={data.email} placeholder="email" onChange={handleInput}/>
                    </div>
                     <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" value={data.phone} placeholder="phone" onChange={handleInput}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

