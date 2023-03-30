import react from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { staggerChildren } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hiden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings yPaddings ${css.wrapper}`}
    >

      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works </span>
            <p style={{ marginTop: "10px" }}>
              Some elaborated projects I have worked on
            </p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
