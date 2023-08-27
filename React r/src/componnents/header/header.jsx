import React, { useState } from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toogle = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toogle}>
          <GoThreeBars />
        </div>
        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brandes</li>
          <li>Sales</li>
          <li>New</li>
          <li>Eng</li>
        </ul>
        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};
export default Header;
