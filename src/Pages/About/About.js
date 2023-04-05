import Contact from "../Contact/Contact";

const About = () => {
  return (
    <div className="lg:px-32 md:px-20 px-10 py-10">
      <div>
        <header className="flex flex-col justify-center items-center">
          <p className="font-OpenSans text-center text-xl text-gray-500 font-normal pb-5">
            Blog
          </p>
          <h2 className="font-Manrope  text-5xl lg:w-3/5 md:w-4/5 text-center leading-tight">
            Thoughts and words
          </h2>
        </header>
        <div></div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
