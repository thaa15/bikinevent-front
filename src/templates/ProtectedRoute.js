import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthSucRegs } from "../AllAuth";
import { searchContext } from "../context";

export const ProtectedRouteSucReg = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (AuthSucRegs.isAutsucreg()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/register",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedVendorLogin = ({
  isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.length > 4 || isAuth !== "null") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedVendor = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.length <= 4) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/vendor-chat",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedUser = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.length <= 4) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedSearch = ({ searchs, isAuth,component: Component, ...rest }) => {
  const { searched, setSearched } = useContext(searchContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (searched.searchFill.length != 0 && isAuth.length <= 4) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

