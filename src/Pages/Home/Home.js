import Navbar from "../../Components/Navbar";
import statistics1 from "../../assets/Statistics1.png";
import statistics2 from "../../assets/Statistics2.png";
import statistics3 from "../../assets/Statistics3.png";
import LogoWall from "../../assets/Logo Wall.png";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="lg:px-32 md:px-20 px-10 bg-darkBlue lg:h-screen h-full">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="flex lg:flex-row flex-col justify-between items-center pt-6">
          <div className="flex flex-col gap-5">
            <h1 className="font-normal text-5xl text-white  font-Manrope leading-relaxed">
              Save time by building fast with Boldo Template
            </h1>
            <p className="font-OpenSans text-base font-normal text-lightGray leading-7 ">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex gap-5 mt-5">
              <button className="bg-green text-darkBlue font-bold text-lg leading-7 px-12 py-2 rounded-3xl">
                Buy template
              </button>
              <button className="text-white border-2 font-bold text-lg leading-7 px-12 py-2 rounded-3xl">
                Explore
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 w-full">
            <div className="flex lg:justify-end ">
              <img src={statistics1} alt="Statistics 1" />
            </div>
            <div className="flex lg:justify-end lg:gap-8 gap-5 ">
              <img src={statistics2} alt="Statistics 2" />
              <img src={statistics3} alt="Statistics 3" />
            </div>
          </div>
        </div>
        <div className="lg:mt-10 my-10">
          <img src={LogoWall} alt="Logo Wall" />
        </div>
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
