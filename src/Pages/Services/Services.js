import first from "../../assets/card1.png";
import secand from "../../assets/card2.png";
import third from "../../assets/card3.png";
import arrow from "../../assets/arrow.svg";
import Section3 from "../Section3/Section3";

const Services = () => {
  const cards = [
    { id: 1, img: first, title: "Cool feature title" },
    { id: 2, img: secand, title: "Even cooler feature" },
    { id: 3, img: third, title: "Cool feature title" },
  ];
  const cardsList = cards.map((card) => {
    return (
      <div key={card.id}>
        <div className="mt-10 md:px-10">
          <div className="">
            <img src={card.img} alt="IMG" className="w-full" />
          </div>
          <div className="">
            <h3 className="pt-5 pb-3 font-normal text-2xl">{card.title}</h3>
            <p className="pb-3 font-normal text-xl text-gray-500">
              Learning curve network effects return on investment.
            </p>
          </div>
          <div className="flex  pt-5 gap-3 relative cursor-pointer">
            <p className="font-bold text-xl text-darkBlue">Explore page</p>
            <img src={arrow} alt="Arrow" />
            <div className="absolute w-40 bg-darkBlue h-px -bottom-3"></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-20 lg:px-32 md:px-20 px-10">
      <header className="flex flex-col justify-center items-center">
        <p className="font-OpenSans text-center text-xl text-gray-500 font-normal pb-5">
          Our Services
        </p>
        <h2 className="font-Manrope  text-4xl lg:w-3/5 md:w-4/5 text-center leading-tight">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </header>
      <div className="lg:flex lg:justify-between grid md:grid-cols-2 grid-cols-1 gap-5 py-20 font-OpenSans">
        {cardsList}
      </div>
      <Section3 />
    </div>
  );
};

export default Services;
