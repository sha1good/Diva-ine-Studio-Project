import "./photography.scss";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Contact from "../../components/contact/Contact";

const Photography = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      
      <div className="photographyContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderImgWrapper">
              <img
                alt=""
                src={photos[sliderNumber].src}
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="photographyWrapper">
          <button className="bookNow">Hire Us Now</button>
          <h1 className="photographyTitle">Grand photography</h1>
          <div className="photographyAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>24 Harris Ave, Brantford, ON N3R 2E9</span>
          </div>
          <span className="photographyDistance">
            Excellent Location - 500m from center
          </span>
          <span className="photographyPriceHighlihts">
            Book a snapshot over $200 of this type and get a free taxi delivery
          </span>
          <div className="photographyImages">
            {photos.map((photo, i) => (
              <div className="photographyImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  alt=""
                  src={photo.src}
                  className="photographyImg"
                />
              </div>
            ))}
          </div>
          <div className="photographyDetails">
            <div className="photographyDetailText">
              <h1 className="photographyTitle">Stay in the heart of City</h1>
              <p className="photographyDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>
            <div className="photographyDetailPrice">
              <h1>Perfect for a 10-shot photos!</h1>
              <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry ititi.!
              </span>
              <h2>
                <b>$945</b> (10 nights)
              </h2>
              <button>Hire Us Now!</button>
            </div>
          </div>
        </div>
       <Contact/>
      </div>
    </div>
  );
};

export default Photography;
