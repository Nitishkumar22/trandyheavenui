"use client"
import React from "react";
import css from "./page.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { asynclogin } from "@/store/Actions/Actions";

export const myCustomMetadata = {
  title: "Login Page",
};

const Loginpage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
 
   const initialFormData = {
     email: '',
     password: '',
     // Add more fields as needed
   };
   const [formData, setformData] =  useState(initialFormData)
 
   const inputEvent=(event)=>{
     const {name, value} = event.target;
 
     setformData((preData)=>{
         return {
             ...preData,
             [name]:value,
         }
     })
   }
    
  const formHandler = async (e)=>{
      e.preventDefault();
      dispatch(asynclogin(formData))
      setformData(initialFormData); // Reset form fields
      router.push('/');     
  }

  return (
    <>
      <div className={css.main}>
        <div className={css.login}>
             <div className={css.logo}>
                 <h1>LOGO</h1> 
             </div>
             <div className={css.form}>
                  <div className={css.formleft}>
                     <div className={css.formtype}>
                         <h2>Login Your Account</h2>
                     </div>
                     <div className={css.forminputs}>
                         <input type="text" name="email" id="" onChange={inputEvent} placeholder="Email" />
                         <input type="text" name="password" id="" onChange={inputEvent} placeholder="Password" />
                     </div>
                     <div className={css.forgetpassword}>
                        <h6>Forgot Password?</h6>
                     </div>
                     <div onClick={formHandler} className={css.btn}>
                          <h5>Login</h5>
                     </div>
                     <div className={css.other}>
                        <h6>Create New Account <Link href="/signup">Create</Link> </h6>
                     </div>
                     <div className={css.google}>
                          <img width={"30px"} src="/google.png" alt="" />
                     </div>
                  </div>
                  <div className={css.formright}>
                     <img src="/Loginimg.png" alt="" />
                  </div>
             </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
