import axios from 'axios'

/// export action types 

export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTERED_USER = 'REGISTERED_USER'
export const FAILED_REGISTER = 'FAILED_REGISTER'



// loads the smurfs to the state 

export function registerUser(payload) {
  
    return dispatch => {
      
      dispatch({ type: REGISTERING_USER });
  
      return axios.post('https://mentor-me-app-be.herokuapp.com/api/users/register', payload)
        .then((response) => {
          dispatch({ type: REGISTERED_USER, payload: response.data });
        })
  
        .catch((error) => {
          dispatch({ type: FAILED_REGISTER, payload: error })
        })
  
        }
  };