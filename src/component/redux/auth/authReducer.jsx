import { SIGNIN, SIGNOUT, SIGNUP, SETLOADING, SETERROR } from "./authConstants";

const initialState = {
  email: "",
  idToken: "",
  isAuth: false,
  refreshToken: "",
  isLoading: false,
  error: "",
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        email: payload.email,
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
        isAuth: true,
      };

    case SIGNIN:
      return {
        ...state,
        email: payload.email,
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
        isAuth: true,
      };

    case SIGNOUT:
      return { ...initialState };

    case SETLOADING:
      return { ...state, isLoading: !state.isLoading };

    case SETERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default authReducer;
