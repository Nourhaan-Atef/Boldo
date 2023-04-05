import connect1 from "../../assets/connect1.png";
import connect2 from "../../assets/connect2.png";
import feather from "../../assets/feather.svg";
import eye from "../../assets/eye.svg";
import sun from "../../assets/sun.svg";
import check from "../../assets/check.png";

const Section3 = () => {
  return (
    <div className="flex flex-col py-10 md:px-10">
      <div className="grid lg:grid-cols-2  items-center md:gap-36 gap-10 md:mr-0 mr-20">
        <div className="flex  justify-center ">
          <img src={connect1} alt="Connect1" className=""/>
        </div>
        <div className="font-Manrope flex flex-col  leading-tight">
          <h3 className="font-normal text-4xl pb-10 leading-tight">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center text-xl font-normal font-OpenSans">
              <img src={check} alt="Check" />
              <p>We connect our customers with the best.</p>
            </div>

            <div className="flex gap-5 items-center text-xl font-normal font-OpenSans">
              <img src={check} alt="Check" />
              <p>Advisor success customer launch party.</p>
            </div>

            <div className="flex gap-5 items-center text-xl font-normal font-OpenSans">
              <img src={check} alt="Check" />
              <p>Business-to-consumer long tail.</p>
            </div>
          </div>
          <button className="bg-darkBlue hover:bg-white  w-44 py-4 rounded-full text-white hover:text-darkBlue border-2 border-transparent hover:border-darkBlue font-bold mt-10">
            Start now
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  items-center mt-20 md:gap-36 gap-10">
        <div className="font-Manrope flex flex-col  lg:order-1 order-2">
          <h3 className="font-normal text-4xl pb-10 leading-tight">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="flex flex-col gap-5 mt-8 ">
            <div className="flex gap-5 items-center font-normal font-OpenSans bg-darkBlue text-white py-3 px-5 rounded shadow-lg text-base cursor-pointer">
              <img src={feather} alt="Feather" />
              <p>We connect our customers with the best.</p>
            </div>

            <div className="flex gap-5 items-center font-normal font-OpenSans  bg-white text-darkBlue py-3 px-5 rounded shadow-lg text-base cursor-pointer">
              <img src={eye} alt="eye" />
              <p>Advisor success customer launch party.</p>
            </div>

            <div className="flex gap-5 items-center font-normal font-OpenSans  bg-white text-darkBlue py-3 px-5 rounded shadow-lg text-base cursor-pointer">
              <img src={sun} alt="Sun" />
              <p>Business-to-consumer long tail.</p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center lg:order-2 order-1">
          <img src={connect2} alt="Connect2" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
