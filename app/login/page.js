import React from "react";
import css from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Login Page",
};


const Loginpage = () => {
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
                         <input type="text" name="" id="" placeholder="Email" />
                         <input type="text" name="" id="" placeholder="Password" />
                     </div>
                     <div className={css.forgetpassword}>
                        <h6>Forgot Password?</h6>
                     </div>
                     <div className={css.btn}>
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
