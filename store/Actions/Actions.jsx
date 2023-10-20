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