/////////////////////////////////////////////////////////
//Types

export const Types = {
  GET_REQUEST: "users/GET_REQUEST",
  GET_SUCCESS: "users/GET_SUCCESS",
  SHOW_INPUT: "users/SHOW_INPUT",
  HIDE_INPUT: "users/HIDE_INPUT"
};

/////////////////////////////////////////////////////////
//Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  displayInput: false
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        displayInput: false
      };
    case Types.SHOW_INPUT:
      return { ...state, displayInput: true };
    case Types.HIDE_INPUT:
      return { ...state, displayInput: false };
    default:
      return state;
  }
}

/////////////////////////////////////////////////////////
//Action
export const Creators = {
  getUserRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getUserSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  showInput: () => ({ type: Types.SHOW_INPUT }),
  hideInput: () => ({ type: Types.HIDE_INPUT })
};
