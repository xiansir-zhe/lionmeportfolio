import React from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import Slider from "react-slick";
import { sliderSettings } from "../../utils/data";
import { comments } from "../../utils/data";
import { footerVariants } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >

      <a className="anchor" id="people"></a>
      <motion.div 
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Superheros talk about me</span>
          <p style={{ marginTop: "2rem" }}>
            I built a strong friendship with my friends while i traveled in the space.
          </p>
          <p>And they will always back me up.</p>
        </div>
          {/* carousal              */}

          <div className={` ${css.comments}`}>
            <Slider {...sliderSettings} className={css.slider}>
              {comments.map((comment, i) => {
                return (
                  <div className={`flexCenter ${css.comment}`}>
                    <img src={comment.img} alt="" /> 
                    <p>{comment.comment}</p>

                    <div className={css.line}></div>

                    <div className={css.bio}>
                      <span>{comment.name}</span>
                      <span>{comment.post}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
