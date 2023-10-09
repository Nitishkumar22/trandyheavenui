import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.fimg}>
          <img src={"/logo.png"} alt="logo of brand" />
        </div>
        <div className={style.tags}>
          <h6>Privacy Policy</h6>
          <h6>Terms and Conditions</h6>
          <h6>Pricing and Refund</h6>
        </div>
        <div className={style.tags}>
          <h6>Products</h6>
          <h6>Hire from here</h6>
          <h6>Pricing and Refund</h6>
        </div>
        <div className={style.tags}>
          <h6>Community</h6>
          <h6>Our services</h6>
        </div>
        <div className={style.dets}>
          <h4>Contact us</h4>
          <div className={style.rows}>
            {/* <BiSolidPhoneCall className={style.icns} /> */}
            <p>+91 8962834895</p>
          </div>
          <div className={style.rows}>
            {/* <HiMail className={style.icns} /> */}
            <p>contact@talenttrack.com</p>
          </div>
          <div className={style.sinc}>
            {/* <BsInstagram className={style.sicns} /> */}
            {/* <FaFacebookF className={style.sicns} />
            <BsLinkedin className={style.sicns} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
