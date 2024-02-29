import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchContact } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./Header.css";

import {FaBook, FaBookOpen, FaList, FaUserPlus} from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchContact(searchTerm.toLowerCase()));
  }, [dispatch, searchTerm]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <header>
      
        <div className="logo">
          <FaBookOpen/>ContactListApp
        </div>
        <nav>
        <Link to="/">ContactList</Link>
         <Link to='/new-contact'> New Contact</Link>
        </nav>
      
      <input className="search" type="text" placeholder="Search" onChange={handleChange} />
      

      
        

      </header>
      
    </div>
  );
};

export default Header;
