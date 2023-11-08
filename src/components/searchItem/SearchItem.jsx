import { Link } from "react-router-dom";
import "./searchItem.scss";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        alt=""
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Photography</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free taxi delivery</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent Images</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
         <Link to={`/photography/test123`}> <button className="siCheckButton">See More 
         Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
