import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>Welcome to <b>DIVA-<i>ine</i></b> Studio</motion.h2> */}
          <motion.h1 variants={textVariants}>
            DIVA-INE STUDIO
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} >
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>
               <a href={`#About`}>About Us</a>
            </motion.button>
          </motion.div>
           <a href="#About" style={{ cursor: "pointer", zIndex: 999}}>
           <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            
          />
           </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Photography, Modeling, Podcasting, and Magazine Creation.
      </motion.div>
      <div className="imageContainer">
        {/* <img src="https://static.wixstatic.com/media/e58a11_e7c996206b134dfcafb760898e5052bc~mv2_d_1826_1377_s_2.jpg/v1/fill/w_1339,h_915,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58a11_e7c996206b134dfcafb760898e5052bc~mv2_d_1826_1377_s_2.jpg" alt="" /> */}
        {/* <img src="https://static.wixstatic.com/media/e58a11_e6fcf67460d84c31ad6234e7e5f19f22~mv2.jpg/v1/fill/w_1339,h_915,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58a11_e6fcf67460d84c31ad6234e7e5f19f22~mv2.jpg" alt="" /> */}
        <img src="https://static.wixstatic.com/media/e58a11_9a65a28741c648e897178409560f97ca~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1339,h_915,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58a11_9a65a28741c648e897178409560f97ca~mv2_d_2500_1667_s_2.jpg" alt="" />
        {/* <img src="https://static.wixstatic.com/media/e58a11_8255dd11a90d4b04acd719cac7d00df7~mv2.jpg/v1/fill/w_1339,h_915,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58a11_8255dd11a90d4b04acd719cac7d00df7~mv2.jpg" alt="" /> */}
        {/* <img src="https://static.wixstatic.com/media/e58a11_e3c156edcc594c5ebbfb165f6fba7ffd~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1339,h_915,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58a11_e3c156edcc594c5ebbfb165f6fba7ffd~mv2_d_2500_1667_s_2.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
