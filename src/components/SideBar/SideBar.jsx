

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStatus, updateStatus, deleteStatus } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { setSelectedStatus } from '../../redux/actions'; // додайте імпорт

import { FaEdit ,FaTrash } from "react-icons/fa";
import './sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const statuses = useSelector((state) => state.statuses);
  const [newStatus, setNewStatus] = useState('');
  const [editingStatus, setEditingStatus] = useState(null);
  const selectedStatus = useSelector((state) => state.selectedStatus);

  const handleAddStatus = () => {
    if (newStatus.trim() !== '') {
      if (editingStatus) {
        dispatch(updateStatus({ ...editingStatus, name: newStatus }));
      } else {
        dispatch(addStatus({ id: uuidv4(), name: newStatus }));
      }

      setNewStatus('');
      setEditingStatus(null);
    }
  };

  const handleEditStatus = (status) => {
    setEditingStatus(status);
    setNewStatus(status.name);
  };


  const handleDeleteStatus = (statusId) => {
    dispatch(deleteStatus(statusId));
  };

  const handleStatusClick = (status) => {
    dispatch(setSelectedStatus(status.name === selectedStatus?.name ? null : status));
    console.log(status);
  };

  

  const statusCounts = {
    Work: 0,
    Family: 0,
    Private: 0,
    Friends: 0,
  };

  contacts.forEach((contact) => {
    statusCounts[contact.status] += 1;
  });

  const totalContacts = contacts.length;

  return (
    <aside>
      <div className='top-sidebar'>
        <h2>All Contacts</h2><span>{totalContacts}</span>
        <input className='new-status'
        type="text"
        placeholder="Введіть новий статус"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
      />
      <button  onClick={handleAddStatus}>Add status</button>
      </div>
    
      <div className="list">
        {statuses.map((status) => (
          <div key={status.id} onClick={() => handleStatusClick(status)}>
            <div className="status">
              <div className="status-line">
              <h5 className={status.name === selectedStatus ? 'selected' : ''} statusName>
              {status.name}
            </h5>
            <span className='status-amount'>{statusCounts[status.name]}</span>
            <div className="status-btn">
            <FaEdit onClick={() => handleEditStatus(status)}/>
            <FaTrash onClick={() => handleDeleteStatus(status.id)}/>

            </div>
              </div>
            
            
            

            </div>
            
            
          </div>
        ))}
      </div>
      
    </aside>
  );
};

export default Sidebar;