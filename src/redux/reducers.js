
import { ADD_CONTACT ,DELETE_CONTACT, UPDATE_CONTACT ,SEARCH_CONTACT ,ADD_STATUS,CHANGE_FAVORITE} from "./type";
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
        id: "96641c87-5bab-466f-8633-8dc69ane6cbb",
        name: "Viktoria Pryk",
        phone: "+380952531729",
        email: "vikavikazzz98@gmail.com",
        avatar: '21',
        gender: "women",
        status: "Work",
        favorite: true
      },
    ],
    searchTherm: '',

    status: [
      {
        Work: '',
        Family: '',
        Private: '',
        Friends: '',
      }

    ]
  
    
  }
  

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return{
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


                  case ADD_STATUS:
                    return {
                      ...state,
                      status: [...state.status,action.payload]
                    }


                    case CHANGE_FAVORITE:
                      return {
                        ...state,
                        favorite: action.payload,
                      };


    
    
    
        default:
            return state
            break;
    }


}

export default reducer