import React from "react";
import { staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { slideIn } from "../../utils/motion";
const Hero = () => {
    return (
       <section className={`paddings bg-primary ${css.wrapper}`}>

        <a className="anchor" id="hero"></a>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>
                <div className={css.upperElements}>
                    <motion.span 
                    variants={fadeIn("right","tween",0.2,1)}
                    className="primaryText">
                        Hey there, <br /> I'm Lionme.
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left","tween",0.4,1)}
                    className="secondaryText">
                       I‘m sure that this gonna be 
                        <br />
                        a beautiful sample.
                    </motion.span>
                </div>

                {/* person */}
                <motion.div 
                variants={fadeIn("up","tween",0.3,1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn("up","tween",0.5,1.3)}
                    src="./wolf.png" alt="" />
            </motion.div>
                
                {/* email */}
                <a className={css.email} href="mailto:xiansir-zhe@outlook.com">
                    xiansir-zhe@outlook.com
                </a>



                <div className={css.lowerElements}>
                    <div className={css.experience}>
                      <div className="primaryText">3</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                            <div>(lil cheeky, lol)</div>
                        </div>
                    </div>

                      
                    <div className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFICATED PROFATIONAL </span>
                        <span> "SUPERMAN"</span>
                    </div>
                </div>
            </motion.div>
       </section>
    );
    }

    export default Hero;