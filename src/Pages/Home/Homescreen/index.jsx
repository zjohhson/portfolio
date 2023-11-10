import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Navbar from "../Navbar";
import Research from "../Research";

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
