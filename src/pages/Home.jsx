import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Parallax from "../components/parallax/Parallax"
import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"
import Contact from "../components/contact/Contact"

 const Home = ({page}) =>{
      return (
      <div>
        <section id="Homepage">
        <Navbar page= {page}/>
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
     </div>
      )
 }

  export default Home;