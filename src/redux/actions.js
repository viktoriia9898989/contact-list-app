import { ADD_CONTACT, DELETE_CONTACT , UPDATE_CONTACT ,SEARCH_CONTACT, ADD_STATUS, CHANGE_FAVORITE} from "./type";

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

export const addStatus = (newStatus) => {
    return {
        type: ADD_STATUS,
        payload: newStatus
    }
}

export const changeFavorite = (contactID) => {
    return {
        type: CHANGE_FAVORITE,
        payload: contactID
    }
}




