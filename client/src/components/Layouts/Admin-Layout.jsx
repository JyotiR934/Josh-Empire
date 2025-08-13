import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import "./Admin-Layout.css"
import { useAuth } from "../../store/auth";
export const Admin=()=>{
    const {user,isLoading}=useAuth();
    console.log("admin layout",user);
    if(isLoading){
        return <><h1>Loading</h1></>
    }
    if(!user.isadmin){
        return <><Navigate to="/"></Navigate></>
    }
    return (
    <>
        <header className="adminpage">
            <div className="admin-layout">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><MdImportContacts />Contacts</NavLink></li>
                        <li><NavLink to="/service"><GrServices />Services</NavLink></li>
                        <li><NavLink to="/"><IoHome />Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
    </>
    )
    
}