import React, { useReducer, createContext } from "react";
import JwtDecode from "jwt-decode";

const intitalState: any = {
  user: null
};

if (localStorage?.getItem("AuthToken")) {
  const decodedToken: any = JwtDecode(
    JSON.parse(localStorage.getItem("AuthToken") || "{}")
  );
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("AuthToken");
  } else {
    intitalState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: object) => {},
  logout: () => {}
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };

    case "LOGOUT":
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, intitalState);

  const login = (userData: any) => {
    localStorage.setItem("AuthToken", userData.AuthToken);
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  };

  function logout() {
    localStorage.removeItem("AuthToken");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
