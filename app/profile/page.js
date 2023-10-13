"use client";
import { useState } from "react";
import css from "./page.module.css";

const Profle = () => {
  const [gender, setGender] = useState(""); // Initialize the gender state

  const handleGenderChange = (event) => {
    setGender(event.target.value); // Update the gender state when a radio button is selected
  };

  return (
    <>
      <div className={css.main}>
        <div className={css.profilepage}>
          <div className={css.prodiledets}>
            <div className={css.profilee}>
              <h5>My details</h5>
            </div>
          </div>
          <div className={css.userdets}>
            <div className={css.userdet}>
              <div className={css.heading}>
                <h2>User Name</h2>
              </div>
              <div className={css.inputs} style={{ display: "flex" }}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Nme" />
              </div>
              <div className={css.gender}>
                <label className={css.gendertype}>Gender</label>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5vh" }}
                >
                  <div>
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="other"
                      value="other"
                      checked={gender === "other"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "5%" }}>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className={css.dateofbirth}
                >
                  <label>Date of Birth</label>
                  <input type="date" placeholder="Date of Birth" />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className={css.phone}
                >
                  <label>Phone Number</label>
                  <input type="Number" placeholder="Phone no." />
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className={css.email}
              >
                <label>Email id</label>
                <input type="email" placeholder="Enter your email id" />
              </div>
            <div className={css.subbtn}>
                <button>Submit</button>
            </div>
              <img
                className={css.lastimg}
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profle;
