import React from 'react'
import css from './Expertise.module.scss'
import { projectExperience } from '../../utils/data'
import { WhatDoIHelp } from '../../utils/data'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'
import { textVariant } from '../../utils/motion'
const Experties = () => {
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}
        className={css.wrapper}>

            <a className="anchor" id="expertise"></a>

            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>

                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp,i) => {
                            return ( 
                                <motion.div 
                                variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                                className={css.exp} key={i}>
                                    <div className="flexCenter" style={{background: exp.bg}}>
                                            <exp.icon size={25} color="white" />
                                    </div>

                                    <div>
                                        <span> {exp.name} </span>
                                        <span className='secondaryText'> {exp.projects} </span>
                                    </div>
                        
                                </motion.div>
                            );

                        }   
                        )      
                    }
                </div>

                <motion.div 
                variants={textVariant(0.5)}
                className={css.rightSide}>
                    <span className='primaryText'>What i've learned in university? <br></br></span>
                {
                    WhatDoIHelp.map((paragraph, i) =>{
                        return <span className='secondaryText' key={i}> {paragraph} </span>
                    })
                }

                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>1 YEAR IN</span>
                        <span className='secondaryText'>Student Union</span>
                    </div>
                    
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>2 TIMES</span>
                        <span className='secondaryText'>Scholarship</span>
                    </div>
                </div>
      
      
                </motion.div>
            </div>

        </motion.section>

    )
}


export default Experties