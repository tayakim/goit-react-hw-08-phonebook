import axios from "axios";
import { setError, setLoading, signUp, signIn } from "./authAction";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    console.log(response.data);
    dispatch(signUp(response.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoading());
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signIn(response.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoading());
  }
};

export { signUpOperation, signInOperation };
