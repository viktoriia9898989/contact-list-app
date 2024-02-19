import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStatus } from '../../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [newStatus, setNewStatus] = useState('');

  const handleAdd = () => {
    if (newStatus.trim() !== '') {
      dispatch(addStatus(newStatus));
      setNewStatus(''); // Clear input after adding status
    }
  };

  const statusCounts = {
    Work: 0,
    Family: 0,
    Private: 0,
    Friends: 0,
  };

  contacts.forEach(contact => {
    statusCounts[contact.status] += 1;
  });

  const totalContacts = contacts.length;

  return (
    <aside>
      <div>
        All Contacts<span>{totalContacts}</span>
        <button onClick={handleAdd}>add</button>
        <input
          type="text"
          value={newStatus}
          onChange={e => setNewStatus(e.target.value)}
          placeholder="Enter new status"
        />
      </div>
      <hr />
      <div className="list">

      <div>
                  <h5>Work</h5>
                  <span>{statusCounts.Work}</span>
               </div>

              <div>
                  <h5>Family</h5>
              <span>{statusCounts.Family}</span>
              </div>

           <div>
                  <h5>Friends</h5>
               <span>{statusCounts.Friends}</span>
           </div>

           <div>
                   <h5>Private</h5>
                   <span>{statusCounts.Private}</span>
             </div>
    
      </div>
    </aside>
  );
};

export default Sidebar;





    // <div className="list">
    //           
    //       </div>