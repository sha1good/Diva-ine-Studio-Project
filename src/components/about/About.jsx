import "./about.scss";

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
    };

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <div className="left">
          <div className="imgContainer">
            <img src="./hero.png" alt="" />
          </div>
        </div>
        <motion.div
          className="right"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="rightWrapper" variants={textVariants}>
            <motion.h2 variants={textVariants}>About Us</motion.h2>
            <motion.p variants={textVariants}>
              Diva-ine, our name embodies the fusion of <q>Diva</q> and{" "}
              <q>Divine,</q>
              &nbsp; representing our unwavering belief in the remarkable
              strength and grace of women & the transcendent beauty, sense of
              reverence drives from nature and deity makes us stronger to
              embrace the power, spirit, and divine essence of womanhood. We
              stand firm in our dedication to empowering and celebrating women
              from all walks of life. Our platform is a tribute to the
              resilience, elegance, and boundless potential of every woman 💫✨
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
