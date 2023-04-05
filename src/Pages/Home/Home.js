import statistics1 from "../../assets/Statistics1.png";
import statistics2 from "../../assets/Statistics2.png";
import statistics3 from "../../assets/Statistics3.png";
import LogoWall from "../../assets/Logo Wall.png";

const Home = () => {
  return (
    <div className="grid  items-center bg-darkBlue lg:px-32 md:px-20 px-10 h-screen">
      <div className="pt-6 grid lg:grid-cols-2 items-center">
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
            <button className="bg-green text-darkBlue font-bold text-lg leading-7 sm:px-12 px-8 py-2 rounded-3xl">
              Buy template
            </button>
            <button className="text-white border-2 font-bold text-lg leading-7 sm:px-12 px-8 py-2 rounded-3xl">
              Explore
            </button>
          </div>
        </div>
        <div className="sm:flex flex-col lg:items-end items-center gap-5 mt-10 hidden">
          <div className="flex xl:justify-end ">
            <img src={statistics1} alt="Statistics 1" />
          </div>
          <div className="flex  xl:justify-end gap-8">
            <img src={statistics2} alt="Statistics 2" />
            <img src={statistics3} alt="Statistics 3" />
          </div>
        </div>
      </div>
      <div className="lg:mt-10 my-10">
        <img src={LogoWall} alt="Logo Wall" className="w-full" />
      </div>
    </div>
  );
};

export default Home;

/*
 <div className="grid grid-cols-2 mt-10 gap-5 items-center">
          <div>
            <img src={statistics1} alt="Statistics1" />
          </div>
          <div className="grid grid-cols-2 gap-5">
          <img src={statistics2} alt="Statistics2" className="h-full" />
          <img src={statistics3} alt="Statistics3"  className="h-full"/>
          
          </div>
        </div>


*/
