import css from "./Footer.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section 
    variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    className={`paddings bg-primary ${css.wrapper}`}>

      <motion.div 
      variants={footerVariants}
      className={`innerWidth flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's create something <br /> amazing together
          </span>

          <span className="primaryText">
            Start by <a href="mailto:xiansir-zhe@outlook.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>In JNU, &nbsp; Guangdong Guangzhou</p>
          </div>

          <div className={css.menu}>
            <li><a href="#hero">Services</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Works</a></li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
