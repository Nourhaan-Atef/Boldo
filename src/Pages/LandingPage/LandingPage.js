import Home from "../Home/Home";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Services />

      <Section5 />
      <Section4 />
      <Blog />
      <Contact />
    </>
  );
};

export default LandingPage;
