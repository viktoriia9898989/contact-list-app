import { ADD_CONTACT, DELETE_CONTACT , UPDATE_CONTACT ,SEARCH_CONTACT, ADD_STATUS,TOGGLE_FAVORITE , UPDATE_STATUS ,DELETE_STATUS, SET_SELECTED_STATUS} from "./type";

import { v4   as uuidv4 } from 'uuid';

export const addContact = (newContact) => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export const updateContact = (updatedContact) => {
    return {
        type: UPDATE_CONTACT,
        payload: updatedContact
    }
}

export const searchContact = (searchTherm) => {
    return {
        type: SEARCH_CONTACT,
        payload: searchTherm.toLowerCase()
    }
}



export const addStatus = (status) => ({
    type: ADD_STATUS,
    payload: status,
  });
  
  export const updateStatus = (status) => ({
    type: UPDATE_STATUS,
    payload: status,
  });

  export const deleteStatus = (statusId) => ({
    type: DELETE_STATUS,
    payload: statusId,
  });

export const toggleFavoriteStatus = (id) => ({
    type: TOGGLE_FAVORITE,
    payload: id,
  });

  export const setSelectedStatus = (status) => ({
    type: SET_SELECTED_STATUS,
    payload: status,
  });




