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
  role,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if ((isAuth.length > 4 || isAuth !== "null") && role !== "pembeli" ) {
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

export const ProtectedPembeliLogin = ({
  isAuth,
  role,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if ((isAuth.length > 4 || isAuth !== "null") && role !== "vendor" ) {
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

export const ProtectedVendor = ({ isAuth,role, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.length <= 4 || role !== "vendor") {
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

export const ProtectedSearch = ({ searchs,role, isAuth,component: Component, ...rest }) => {
  const { searched, setSearched } = useContext(searchContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (searched.searchFill.length != 0 && (isAuth.length <= 4 || role !== "vendor")) {
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

