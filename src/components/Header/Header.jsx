import React, { useState } from "react";
import {
    FaAddressBook,
    FaBars,
    FaHome,
    FaList,
    FaPlus,
    FaSearch,
    
} from "react-icons/fa";


import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ children }) => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [

        {
            path: "/",
            name: "Home",
            icon: <FaHome />,
        },
       
        
        {
            path: "/new-contact",
            name: "New",
            icon: <FaPlus />,
        },
    
        {
            path: "/contact-list",
            name: "ContactList",
            icon: <FaList />,
        },

       

       
    ];

    return (
        <div>
            <div className="top">
        
             <div  className="logo"> <h1><FaAddressBook/><div className="logo-name">ContactList</div></h1></div> 
            <input type="text" placeholder="Search" />
            
            
            

            </div>

        
        <div className="container">
            
            <div style={{width: isOpen ? "300px" : "45px"}} className="sidebar">
                <div className="top_section">
                    
                    <div  className="bars">
                        <FaBars  onClick={toggle}/>
                    </div>
                </div>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div  style={{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
               
               </div>
                <main>{children}</main>
            
        </div>
        </div>
    );

};

export default Header;