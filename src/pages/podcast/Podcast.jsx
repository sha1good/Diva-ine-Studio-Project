import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contact/Contact";
import "./podcast.scss";


const PodCast = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="contentWrapper">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="YouTube video player"
              frameBorder="0"
              allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen"
              
            ></iframe>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
              at. Vitae facere ipsum totam ratione exercitationem. Suscipit
              animi accusantium dolores ipsam ut.
            </p>
          </div>
        </div>
        
      </div>
      <Contact />
    </div>
  );
};

export default PodCast;
