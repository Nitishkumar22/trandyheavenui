import axios from "@/utils/axios";

import { getUser } from "../Reducers/Reducers";


export const asyncgetUser = (formdata) => async(dispatch,getState) =>{
    console.log(formdata);
    try{
        const {data} = await axios.post("/signup",formdata);
        console.log(data);
        dispatch(getUser(data));
    }catch(error){
        // dispatch(iserror(error.response.data.status_message))    
        console.log(error);;
    }
}

export const asynclogin = (formdata) => async(dispatch,getState) =>{
    console.log(formdata);
    try{
        const {data} = await axios.post("/login",formdata);
        console.log(data);
        dispatch(getUser(data));
    }catch(error){
        // dispatch(iserror(error.response.data.status_message))    
        console.log(error);;
    }
}


export const asynccurrentUser = () => async(dispatch,getState) =>{
    try{
        console.log("hitted");
        const {data} = await axios.get  ("/user");
        console.log(data);
        dispatch(getUser(data.user));
    }catch(error){
        // dispatch(iserror(error.response.data.status_message))    
        console.log(error);;
    }
}