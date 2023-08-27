import React from "react";
import Logo from "../../assets/logo.png";
import css from "./footer.module.css";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  UserIcon,
  LinkIcon,
  LoginIcon
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div classNAme={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando,FL 32881</span>
            </span>
            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="#">352-452-8662</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="#">support@amazon.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <a href="#">
                <p>About US</p>
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy and Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright @2023 by Amazon,Inc</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};
export default Footer;
