/////////////////////////////////////////////////////////
//Types

export const Types = {
  GET_REQUEST: "users/GET_REQUEST",
  GET_SUCCESS: "users/GET_SUCCESS",
  SHOW_INPUT: "users/SHOW_INPUT",
  HIDE_INPUT: "users/HIDE_INPUT",
  REMOVE_USER: "users/REMOVE_USER",
  ERROR: "users/ERROR"
};

/////////////////////////////////////////////////////////
//Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  displayInput: false,
  error: false,
  errorMessage: ""
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      const checkUser = state.data.find(user => user.id === action.payload.id);

      return {
        ...state,
        data: checkUser ? state.data : [...state.data, action.payload],
        loading: false,
        displayInput: checkUser ? true : false,
        error: checkUser ? true : false,
        errorMessage: checkUser ? "Usuário já está na lista." : ""
      };
    case Types.SHOW_INPUT:
      return { ...state, displayInput: true };
    case Types.HIDE_INPUT:
      return { ...state, displayInput: false, error: false, errorMessage: "" };
    case Types.REMOVE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload)
      };
    case Types.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

/////////////////////////////////////////////////////////
//Action
export const Creators = {
  getUserRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getUserSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  removeUser: payload => ({ type: Types.REMOVE_USER, payload }),
  showInput: () => ({ type: Types.SHOW_INPUT }),
  hideInput: () => ({ type: Types.HIDE_INPUT }),
  error: payload => ({ type: Types.ERROR, payload })
};
