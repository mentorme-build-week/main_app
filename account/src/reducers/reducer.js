import { 
  REGISTERING_USER,
  REGISTERED_USER,
  FAILED_REGISTER,
  SIGNING_IN,
  SIGNED_IN,
  FAILED_SIGNIN,
  LOAD_QUESTIONS,
  ADD_RESPONSE
} from '../actions/index'
import { bindActionCreators } from 'redux';

let initialState = {
    questions: '',
    registeringUser: false,
    signingIn: false,
    error: null,
    user: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
    token: ''
}

const persistedState = localStorage.getItem('reduxState')

if (persistedState) {
  initialState = JSON.parse(persistedState)
}
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      
      case REGISTERING_USER: {
        return {
          ...state,
          registeringUser: true,
          signingIn: false,
          error: null,
          }
        }

      case REGISTERED_USER: {
        return {
          ...state,
          questions: '',
          registeringUser: false,
          signingIn: false,
          error: null,
          user: {
            email: action.payload.email,
            password: action.payload.password,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
          },
          token: action.payload.token
        }
      }

      case FAILED_REGISTER: {
        return {
          ...state,
          error: true
        }
      }

      case SIGNING_IN: {
        return {
          ...state,
          registeringUser: false,
          signingIn: true,
          error: null,
        }
      }

      case SIGNED_IN: {
        return {
          ...state,
          questions: '',
          registeringUser: false,
          signingIn: false,
          error: null,
          user: {
            email: action.payload.email,
            password: action.payload.password,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
          },
          token: action.payload.token
      }
    }

      case FAILED_SIGNIN: {
        return {
          ...state,
          error: true
        }
      }

      case LOAD_QUESTIONS: {
        return {
          ...state,
          questions: action.payload
        }
      }

      case ADD_RESPONSE: {

        const question = state.questions.find(i => String(i.id) === action.id)

        return {
          ...state,
          questions: {
            ...state,
            question: {
              ...state,
              comments: action.payload
            }
            
          }
        }
      }
    
      
      default: {
        return state;
      }
    }

  }
  
  export default reducer;