import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from "../store/auth";
import { useState } from "react";
export const Navbar=()=>{
    const {isloggedIn}=useAuth();
    // const menuToggle = document.getElementById("menu-toggle");
    // const navLinks = document.getElementById("nav-links");

    // menuToggle.addEventListener("click", () => {
    // navLinks.classList.toggle("show");
    // });
    const [menuOpen,setmenuOpen]=useState(false);
    const togglemenu=()=>{
        setmenuOpen(!menuOpen)
    }

    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">MERN</NavLink>
                </div>
                 <div className="menu-toggle" id="menu-toggle" onClick={togglemenu}>{menuOpen?"✖" : "☰"}</div>
                <nav>
                    <ul id="nav-links" className={menuOpen?"show":""}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {isloggedIn?(
                            <li>
                            <NavLink to="/Logout">Logout</NavLink>
                        </li>
                        ):<><li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        </>}
                        
                    </ul>
                </nav>
                
            </div>
        </header>
        
           
       
        </>
    )
}