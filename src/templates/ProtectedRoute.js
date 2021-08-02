import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthSucRegs } from "../AllAuth";
import { searchContext } from "../context";
import { decryptData } from "../Crypted";

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
  let mkLocalData = localStorage.getItem('mk');
  const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
  const originalData = decryptData(mkLocalData, salt);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (originalData != null
        && originalData.role !== "pembeli" ) {
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
  let mkLocalData = localStorage.getItem('mk');
  const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
  const originalData = decryptData(mkLocalData, salt);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (originalData != null && originalData.role !== "vendor" ) {
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
  let mkLocalData = localStorage.getItem('mk');
  const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
  const originalData = decryptData(mkLocalData, salt);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (originalData == null || originalData.role !== "vendor") {
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
  let mkLocalData = localStorage.getItem('mk');
  const salt = '6d090796-ecdf-11ea-adc1-0242ac120003';
  const originalData = decryptData(mkLocalData, salt);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (originalData == null) {
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
  const { searched } = useContext(searchContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if ((searched.searchFill.length != 0 || searched.fromFilter == true) 
        && (isAuth.length <= 4 || role !== "vendor")) {
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

