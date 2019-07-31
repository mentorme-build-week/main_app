import { 
  REGISTERING_USER,
  REGISTERED_USER,
  FAILED_REGISTER
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

        break;
      }
      
      default: {
        return state;
      }
    }

  }
  
  export default reducer;