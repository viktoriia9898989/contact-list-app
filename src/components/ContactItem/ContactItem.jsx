import { Link } from "react-router-dom"
import './ContactItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FaTrash, FaUserEdit} from "react-icons/fa";
import React from "react";
import { useDispatch} from "react-redux";
import { deleteContact } from "../../redux/actions";

const ContactItem = ({contact}) => {
const dispatch = useDispatch()

   const handleDeleteContact = (id) =>{
   dispatch(deleteContact(id))
   }

  //  const handleChangeFavorite = (type) => {
  //   if (type === false) {
  //     return <FontAwesomeIcon icon={regularHeart} style={{ cursor: 'pointer' }} />;
  //   } else if (type === true) { 
  //     return <FontAwesomeIcon icon={solidHeart} style={{ color: 'red', cursor: 'pointer' }} />;
  //   }
  // };
  
  
  
  
    return (
      <>
            <div key={contact.id}>
              <div className="card-contact">
                <div className="avatar">
                  <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" />
                </div>
                <h3>{contact.name}</h3>
                <p>Email : {contact.email}</p>
                <p>Phone : {contact.phone}</p>
                <p>Gender : {contact.gender}</p>
                <p>Status : {contact.status}</p>
                <p>
                  {contact.favorite ? (
                    <FontAwesomeIcon  icon={solidHeart} style={{ color: 'red', cursor: 'pointer' }} />
                  ) : (
                    <FontAwesomeIcon icon={regularHeart} style={{ cursor: 'pointer' }} />
                  )}
                </p>
                <div className="card-contact-btns">
                  <Link to={`/update-contact/${contact.id}`}>
                    <button>
                      <FaUserEdit />
                    </button>
                  </Link>
                  <button onClick={() => handleDeleteContact(contact.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          
      </>
    );
  };
  
  export default ContactItem;
  

