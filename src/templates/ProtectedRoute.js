import axios from "axios";
import React,{useEffect} from "react";
import { Route,Redirect } from "react-router-dom";
import {AuthSucRegs,AuthLogins} from "../AllAuth";

export const ProtectedRouteSucReg = ({ component: Component, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={props => {
                if(AuthSucRegs.isAutsucreg()){
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

export const ProtectedVendorLogin = ({ isAuth:isAuth, component: Component, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={props => {
                if(isAuth !== null){
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state:{
                                from: props.location
                            }
                        }
                    } />
                }
            }} />
    )
}