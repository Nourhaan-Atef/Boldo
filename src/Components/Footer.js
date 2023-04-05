import darkLogo from "../assets/darkLogo.png";
const Footer = () => {
  return (
    <div className="py-20 grid lg:grid-cols-2 gap-10 lg:px-32 md:px-20 px-10">
      <div>
        <div className="flex items-center gap-3 text-4xl text-darkBlue ">
          <img src={darkLogo} alt="Logo" className="w-6" />
          <p className=" font-Manrope font-extrabold">Boldo</p>
        </div>
        <p className="font-OpenSans  text-base text-gray-500 py-10 md:w-2/3 leading-relaxed tracking-wider">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="font-OpenSans  text-base text-gray-500 mt-10">
          All rights reserved.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
        <div>
          <p className="md:pb-12 pb-5 font-bold text-xl">Landings</p>
          <ul>
            <li className="pb-5 text-xl text-gray-500">Home</li>
            <li className="pb-5 text-xl text-gray-500">Producst</li>
            <li className="pb-5 text-xl text-gray-500">Services</li>
          </ul>
        </div>
        <div>
          <p className="md:pb-12 pb-5 font-bold text-xl">Company</p>
          <ul>
            <li className="pb-5 text-xl text-gray-500">Home</li>
            <li className="flex items-center  gap-2 pb-5 text-xl text-gray-500 ">
              <p>Careers</p>
              <p className="bg-green text-sm font-bold px-3 rounded-full text-darkBlue py-1">
                Hiring!
              </p>
            </li>
            <li className="pb-5 text-xl text-gray-500">Services</li>
          </ul>
        </div>
        <div>
          <p className="md:pb-12 pb-5 font-bold text-xl">Resources</p>
          <ul>
            <li className="pb-5 text-xl text-gray-500">Blog</li>
            <li className="pb-5 text-xl text-gray-500">Products</li>
            <li className="pb-5 text-xl text-gray-500">Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
