import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = ({page}) => {
  return (
    <div className="navbar">
     <Sidebar page= {page} />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         Diva-ine
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://youtube.com/">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://dribbble.com/">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
       
    </div>
  );
};

export default Navbar;
