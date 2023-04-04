import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="py-10 flex justify-between items-center lg:px-32 md:px-20 px-10 bg-darkBlue">
        <div className="flex items-center gap-3 text-4xl text-white ">
          <img src={logo} alt="Logo" className="w-6" />
          <p className=" font-Manrope font-extrabold">Boldo</p>
        </div>
        <ul className="flex items-center gap-8 font-semibold font-OpenSans text-white">
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <li className="bg-white text-darkBlue px-6 py-1 rounded-2xl">Log In</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
