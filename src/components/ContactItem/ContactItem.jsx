import { Link } from "react-router-dom";
import "./ContactItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaFemale, FaPersonBooth, FaPhone, FaTrash, FaUserEdit } from "react-icons/fa";
import React from "react";
import { useDispatch } from 'react-redux';
import { toggleFavoriteStatus , deleteContact } from '../../redux/actions';
const ContactItem = ({ contact , selectedStatus }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteStatus(contact.id));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (selectedStatus && selectedStatus.name  && contact.status !== selectedStatus.name) {
    return null; 
  }



  return (
    <>
      <div key={contact.id}>
        <div className="card-contact">
          <div className="avatar">
            <img
              src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
              alt="avatar"
            />
          </div>
          <h3>{contact.name}</h3>
          
          
          <p> <FaPhone/>{contact.phone}</p>
          <p> <FaEnvelope/>{contact.email}</p>
          <p>{contact.gender}</p>
          <p className="status-contact">{contact.status}</p>
           
          <div className="card-contact-btns">
            <Link to={`/update-contact/${contact.id}`}>
              <button>
                <FaUserEdit />
              </button>
            </Link>
            <button onClick={() => handleDeleteContact(contact.id)}>
              <FaTrash />
            </button>
            <p className="favorite" onClick={handleToggleFavorite}>
            {contact.favorite ? (
              <FontAwesomeIcon
                icon={solidHeart}
                style={{ color: "#125e28", cursor: "pointer" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={regularHeart}
                style={{ cursor: "pointer" }}
              />
            )}
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactItem;
