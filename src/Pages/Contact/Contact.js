import React from "react";

const Contact = () => {
  return (
    <div className="lg:px-32 md:px-20 px-10 w-full py-10">
      <div className="contact flex flex-col items-center justify-center h-full py-10 bg-darkBlue rounded-3xl text-center">
        <h3 className="font-Manrope font-normal text-2xl sm:text-5xl md:w-4/6 w-5/6 text-white mb-10 md:leading-relaxed ">
          An enterprise template to ramp up your company website
        </h3>
        <div className="flex sm:flex-row flex-col gap-5 pb-10">
          <p className="bg-white text-black py-3 px-5 md:pr-24 text-start rounded-full font-OpenSans">Your Email Address</p>
          <button className="bg-green px-10 py-3 rounded-full font-bold text-darkBlue">Start now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
