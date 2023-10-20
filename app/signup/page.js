"use client"
import React from "react";
import css from "./page.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { asyncgetUser } from "@/store/Actions/Actions";

export const myCustomMetadata = {
  title: "Register Page",
};


const Loginpage = () => {
  const router = useRouter();
 const dispatch = useDispatch();

  const initialFormData = {
    name:'',
    email: '',
    contact:'',
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

  console.log(formData);
 
  const formHandler = async (e)=>{
      e.preventDefault();
      dispatch(asyncgetUser(formData))
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
                <h2>Create Your Account!</h2>
              </div>
              <div className={css.forminputs}>
                <input type="text" name="email" onChange={inputEvent} id="" placeholder="Email" />
                <input type="text" name="name" onChange={inputEvent} id="" placeholder="Fullname" />
                <input type="text" name="contact" onChange={inputEvent} id="" placeholder="Contact" />
                <input type="text" name="password" onChange={inputEvent} id="" placeholder="Password" />
              </div>
              <div className={css.btn} onClick={formHandler}>
                <h5>Register</h5>
              </div>
              <div className={css.other}>
                <h6>
                  Already have an Account? <Link href="/login">Login</Link>{" "}
                </h6>
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
