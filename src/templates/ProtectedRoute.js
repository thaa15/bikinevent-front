import React from "react";
import { Route,Redirect } from "react-router-dom";
import AuthSucReg from "../AllAuth";

export const ProtectedRouteSucReg = ({ component: Component, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={props => {
                if(AuthSucReg.isAutsucreg()){
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/register",
                            state:{
                                from: props.location
                            }
                        }
                    } />
                }
            }} />
    )
}