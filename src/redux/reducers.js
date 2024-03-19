
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT, ADD_STATUS, TOGGLE_FAVORITE , UPDATE_STATUS ,DELETE_STATUS ,SET_SELECTED_STATUS,FILTER_CONTACTS_BY_STATUS } from "./type";
import { v4 as uuidv4 } from 'uuid';
const initialState = {

  contacts: [
    {
      id: "96641c87-5bab-466f-8633-7dc67ane6cbb",
      name: "Viktoria Pryk",
      phone: "+380952531729",
      email: "vikavikazzz98@gmail.com",
      avatar: '21',
      gender: "women",
      status: "Work",
      favorite: false
    },
    {
      id: "96641c87-5bab-466f-8233-8dc69ane6cbb",
      name: "Nika Romanova",
      phone: "+380952531729",
      email: "vikavikazzz98@gmail.com",
      avatar: '25',
      gender: "women",
      status: "Family",
      favorite: true
    },

    {
      id: "96641c87-5bab-466f-8733-8dc69ane6cbb",
      name: "Lina Pokrokova",
      phone: "+380952531729",
      email: "linalina@gmail.com",
      avatar: '67',
      gender: "women",
      status: "Private",
      favorite: true
    },

    {
      id: "96641c87-5bab-466f-8633-8db69ane6cbb",
      name: "Max Smirnov",
      phone: "+380952531729",
      email: "maxsmirnov@gmail.com",
      avatar: '3',
      gender: "men",
      status: "Friends",
      favorite: true
    },
  ],
  searchTherm: '',

  statuses: [
    {
      id: uuidv4(),
      name: "Work"
    },

    {
      id: uuidv4(),
      name: "Family"
    },
    {
      id: uuidv4(),
      name: "Private"
    },
    {
      id: uuidv4(),
      name: "Friends"
    },
  ],

  selectedStatus: null,

  filteredContacts: [],




}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return { ...action.payload };
          }
          return contact;
        }),
      }

    case SEARCH_CONTACT:
      return {
        ...state,
        searchTherm: action.payload
      }



    case TOGGLE_FAVORITE:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload
            ? { ...contact, favorite: !contact.favorite }
            : contact
        ),
      }

      case ADD_STATUS:
        return {
          ...state,
          statuses: [...state.statuses, action.payload],
        };
      
      case UPDATE_STATUS:
        return {
          ...state,
          statuses: state.statuses.map((s) =>
            s.id === action.payload.id ? action.payload : s
          ),
        };

        
case DELETE_STATUS:
  return {
    ...state,
    statuses: state.statuses.filter((s) => s.id !== action.payload),
  };

  case SET_SELECTED_STATUS:
  return {
    ...state,
    selectedStatus: action.payload,
  };

  case FILTER_CONTACTS_BY_STATUS:
    const selectedStatus = action.payload;
    const filteredContacts = state.contacts.filter(contact => contact.status === selectedStatus);
    return {
      ...state,
      selectedStatus,
      filteredContacts,
    };





    default:
      return state
      break;
  }


}

export default reducer