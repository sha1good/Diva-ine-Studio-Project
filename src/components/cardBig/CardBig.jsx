import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import "./cardBig.scss";

const CardBig = ({type}) => {
  return (
    <Link to="/podcast/test">
    <motion.div className={type === "even" ? "container even": "container"}>
      <motion.img
        src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />
      <div className="details">
         <div className="texts">
          <h1>Sha1 Podcast</h1>
          <h2>Mar 8, 2022 |19.10</h2>
          <div className="text">This episode we talk with a guy named “Drew” 
          who gives us a rare peek into what
           some of the young hackers are up to today.
            From listening to Drew, we can see that times are changing for the motive behind hacking. In the ’90s and ’00s it was done for...
          </div>
          <Link to="/podcast/test"><button>Listen Now</button></Link>
        </div>
       
      </div>
    </motion.div>
    </Link>
  );
};

export default CardBig;
