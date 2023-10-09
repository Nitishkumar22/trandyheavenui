import React from "react";
import css from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Register Page",
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
                <h2>Create Your Account!</h2>
              </div>
              <div className={css.forminputs}>
                <input type="text" name="" id="" placeholder="Email" />
                <input type="text" name="" id="" placeholder="Fullname" />
                <input type="text" name="" id="" placeholder="Contact" />
                <input type="text" name="" id="" placeholder="Password" />
              </div>
              <div className={css.btn}>
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
