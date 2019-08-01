import { 
  REGISTERING_USER,
  REGISTERED_USER,
  FAILED_REGISTER,
  SIGNING_IN,
  SIGNED_IN,
  FAILED_SIGNIN,
  GETTING_QUESTIONS,
  LOADED_QUESTIONS,
  FAILED_QUESTIONS
} from '../actions/index'

const initialState = {
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

      case GETTING_QUESTIONS: {
        return {
          ...state,
          registeringUser: false,
          signingIn: false,
          error: null,
        }
      }

      case LOADED_QUESTIONS: {
        return {
          ...state,
          questions: action.payload,
          registeringUser: false,
          signingIn: false,
          error: null,
      }
    }

      case FAILED_QUESTIONS: {
        return {
          ...state,
          error: true
        }
      }
    
      
      default: {
        return state;
      }
    }

  }
  
  export default reducer;