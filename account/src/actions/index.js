import axios from 'axios'

/// export action types 

export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTERED_USER = 'REGISTERED_USER'
export const FAILED_REGISTER = 'FAILED_REGISTER'
export const SIGNING_IN = "SIGNING_IN"
export const SIGNED_IN = 'SIGNED_IN'
export const FAILED_SIGNIN = 'FAILED_SIGNIN'
export const LOAD_QUESTIONS = "LOAD_QUESTIONS"
export const ADD_RESPONSE = "ADD_RESPONSE"




// loads the smurfs to the state 

export function registerUser(payload) {
  
    return dispatch => {
      
      dispatch({ type: REGISTERING_USER });
  
      return axios.post('https://mentor-me-app-be.herokuapp.com/api/users/register', payload)
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          dispatch({ type: REGISTERED_USER, payload: response.data });
        })
  
        .catch((error) => {
          dispatch({ type: FAILED_REGISTER, payload: error })
        })
  
    }
};

export function signIn(payload) {
  
    return dispatch => {
      
      dispatch({ type: SIGNING_IN });
  
      return axios.post('https://mentor-me-app-be.herokuapp.com/api/users/login', payload)
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          dispatch({ type: SIGNED_IN, payload: response.data });
        })
  
        .catch((error) => {
          const message = error.response ? error.response : null;

          dispatch({ type: FAILED_SIGNIN, payload: message })
        })
  
    }
};

export function getQuestions(payload) {

  return dispatch => {

    dispatch({ type: LOAD_QUESTIONS, payload });

  }
}

export function addResponse(payload, id) {
  
  return dispatch => {

    dispatch({ type: ADD_RESPONSE, payload, id})
  }
}