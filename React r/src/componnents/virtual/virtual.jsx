import React from "react";
import css from "./virtual.module.css";
import shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import ReactCompareImage from "react-compare-image";
const Virtual = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <span>Virtual Try-on</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={shade} alt="" className={css.img_p} />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};
export default Virtual;
