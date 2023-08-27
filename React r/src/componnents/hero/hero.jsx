import React from "react";
import css from "./hero.module.css";
import HeroImg from "../../assets/hero.png";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: "3ms", type: "spring" };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection Cream</span>
        <div className={css.text2}>
          <span>Trendy Collections</span>
          <span>
            Speedily say has suitable disposal and boy. Excercise joy man
            children rejoiced
          </span>
        </div>
      </div>
      {/* middle side hero img */}
      <div className={css.wrapper}>
        {/* blueCircle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>
        {/* Hero image */}
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />
        {/* animating div cart */}
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
