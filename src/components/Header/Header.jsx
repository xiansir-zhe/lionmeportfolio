import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall,BiMenuAltRight } from "react-icons/bi";
import {motion} from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();
    
    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }


    );
    return (
       <motion.div 
       initial="hidden"
       whileInView="show"
       variants={headerVariants}
       viewport={{once: false, amount: 0.25}}
       className={`paddings ${css.wrapper}`}
       style={{boxShadow: headerShadow  }}
       >

        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Lionme
            </div>

            <ul 
                ref={menuRef}
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>

                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#people">Testimonials</a></li>
                <li className={`flexCenter ${css.phone}`}>
                <p>+155 2119 8553</p>    
                <BiPhoneCall size={"40px"}/>
                </li>
            </ul>

      
             <div 
                className={css.menuIcon}
                onClick = {() => setMenuOpened(!menuOpened)}
             >
                <BiMenuAltRight size={"30px"}/>
             </div>
        </div>
       </motion.div>
    );
    };

export default Header;