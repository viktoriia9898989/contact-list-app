import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStatus, updateStatus, deleteStatus } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { setSelectedStatus } from '../../redux/actions';
import { FaEdit, FaTrash } from "react-icons/fa";
import './sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const statuses = useSelector((state) => state.statuses);
  const [newStatus, setNewStatus] = useState('');
  const [editingStatus, setEditingStatus] = useState(null);
  const selectedStatus = useSelector((state) => state.selectedStatus);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [statusCounts, setStatusCounts] = useState({
    Work: 0,
    Family: 0,
    Private: 0,
    Friends: 0,
  });

  useEffect(() => {
    const updatedStatusCounts = {
      Work: 0,
      Family: 0,
      Private: 0,
      Friends: 0,
    };



    contacts.forEach((contact) => {
      updatedStatusCounts[contact.status] += 1;
    });

    setStatusCounts(updatedStatusCounts);
  }, [contacts]);

  const handleAddStatus = () => {
    if (newStatus.trim() !== '') {
      if (editingStatus) {
        dispatch(updateStatus({ ...editingStatus, name: newStatus }));
      } else {
        const newStatusId = uuidv4();
        dispatch(addStatus({ id: newStatusId, name: newStatus }));
        setStatusCounts((prevCounts) => ({
          ...prevCounts,
          [newStatus]: 0,
        }));
        contacts.forEach((contact) => {
          if (contact.status === newStatus) {
            setStatusCounts((prevCounts) => ({
              ...prevCounts,
              [newStatus]: prevCounts[newStatus] + 1,
            }));
          }
        });
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



  const totalContacts = contacts.length;

  return (
    <aside>
      <div className='top-sidebar'>
        <h2>All Contacts</h2><span>{totalContacts}</span>
        <input
          className='new-status'
          type="text"
          placeholder="Введіть новий статус"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <button onClick={handleAddStatus}>Add status</button>
      </div>

      <div className="list">
        {statuses.map((status) => (
          <div key={status.id} onClick={() => handleStatusClick(status)}>
            <div className="status">
              <div className="status-line">
                <h5 className={status.name === selectedStatus ? 'selected' : ''}>
                  {status.name}
                </h5>
                <span className='status-amount'>{statusCounts[status.name]}</span>
                <div className="status-btn">
                  <FaEdit onClick={() => handleEditStatus(status)} />
                  <FaTrash onClick={() => handleDeleteStatus(status.id)} />
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
