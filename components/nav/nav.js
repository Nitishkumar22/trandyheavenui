import React from "react";
import css from "./nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className={css.nav}>
        <div className={css.logo}>
          <h3>TrandyHeaven</h3>
        </div>
        <div className={css.links}>
          <Link href="#">Home</Link>
          <Link href="#">Product</Link>
          <Link href="#">About</Link>
          <Link href="#"></Link>
        </div>
        <div className={css.navigation}>
          <div className={css.search}>
            <input type="search" placeholder="Search" />
          </div>
          <Link href="#">Wishlist</Link>
          <Link href="/login">Cart</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
