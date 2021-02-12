import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  SETLOADING,
  SETERROR,
} from "../auth/authConstants";

const signUp = (user) => ({ type: SIGNUP, payload: user });
const signIn = (user) => ({ type: SIGNIN, payload: user });
const signOut = () => ({ type: SIGNOUT });
const setLoading = () => ({ type: SETLOADING });
const setError = (error) => ({ type: SETERROR, payload: error });

export { signUp, signIn, signOut, setLoading, setError };
