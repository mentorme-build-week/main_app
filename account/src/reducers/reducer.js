import { 
  REGISTERING_USER,
  REGISTERED_USER,
  FAILED_REGISTER,
  SIGNING_IN,
  SIGNED_IN,
  FAILED_SIGNIN
} from '../actions/index'

const initialState = {
    questions: [],
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
        console.log('registering')
        break;
        }

      case REGISTERED_USER: {
        console.log(action.payload)
        break;
      }

      case FAILED_REGISTER: {
        console.log('failed')
        break;
      }

      case SIGNING_IN: {
        console.log('registering')
        break;
        }

      case SIGNED_IN: {
        console.log(action.payload)
        return {
          ...state,
          questions: [],
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
        console.log('failed')
        break;
      }
    
      
      default: {
        return state;
      }
    }

  }
  
  export default reducer;