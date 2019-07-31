import { 
  REGISTERING_USER,
  REGISTERED_USER,
  FAILED_REGISTER,
  SIGNING_IN,
  SIGNED_IN,
  FAILED_SIGNIN
} from '../actions/index'

const initialState = {
    error: null,
    array: []
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      
      case REGISTERING_USER: {
        console.log('registering')
        }

      case REGISTERED_USER: {
        console.log(action.payload)
      }

      case FAILED_REGISTER: {
        console.log('failed')
      }

      case SIGNING_IN: {
        console.log('registering')
        }

      case SIGNED_IN: {
        console.log(action.payload)
      }

      case FAILED_SIGNIN: {
        console.log('failed')
      }
      
      default: {
        return state;
      }
    }

  }
  
  export default reducer;