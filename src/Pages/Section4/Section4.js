import image from "../../assets/Image.png";
import downarrow from "../../assets/downarrow.svg";

const Section4 = () => {
  return (
    <div className="lg:px-32 md:px-20 px-10 pt-20 flex flex-col">
      <img src={image} alt="Img" />
      <div className="flex lg:flex-row flex-col justify-between py-16 gap-5">
        <h4 className="font-Manrope font-normal text-4xl lg:w-5/12 leading-relaxed">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h4>
        <div className="grid gap-5 lg:l-10 lg:pt-0 md:pt-20 pt-10 lg:w-3/6 ">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <p className="text-lg font-OpenSans">
                We connect our customers with the best?
              </p>
              <img src={downarrow} alt="downarrow" className="w-5" />
            </div>
            <div className="w-full bg-gray-400 h-px"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <p className="text-lg font-OpenSans">
                Android research & development rockstar?
              </p>
              <img src={downarrow} alt="downarrow" className="w-5" />
            </div>
            <div className="w-full bg-gray-400 h-px"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
