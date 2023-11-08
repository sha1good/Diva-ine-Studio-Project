
import "./podcastList.scss";
import Navbar from "../../components/navbar/Navbar";
import CardBig from "../../components/cardBig/CardBig";



const PodCastList = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
                <CardBig />
                <CardBig type="even"/>
                <CardBig />
                <CardBig type="even"/>
                <CardBig />
                <CardBig type="even"/>
                <CardBig />
                <CardBig type="even"/>
                <CardBig />
                <CardBig type="even"/>
                <CardBig />
                <CardBig type="even"/>
                
      </div>
      
    </div>
  );
};

export default PodCastList;
