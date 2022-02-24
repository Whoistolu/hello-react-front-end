const GET_GREETING_MESSAGE = "GET_GREETING_MESSAGE";

export const getGreetingAction = (data) => ({
  type: GET_GREETING_MESSAGE,
  payload: data,
})

export default function greetingReducer(state = null, action) {
  switch (action.type) {
    case GET_GREETING_MESSAGE:
      return action.payload;
    default:
      return state;
  }
} 
