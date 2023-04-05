import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import person1 from "../../assets/p1.png";
import person2 from "../../assets/p3.png";
import person3 from "../../assets/p2.png";
const Section5 = () => {
  const cards = [
    {
      id: 1,
      name: "Albus Dumbledore",
      img: person1,
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      job: "Manager @ Howarts",
    },
    {
      id: 2,
      name: "Severus Snape",
      img: person2,
      content:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      job: "Manager @ Slytherin",
    },
    {
      id: 3,
      name: "Harry Potter",
      img: person3,
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      job: "Team Leader @ Gryffindor",
    },
  ];
  const cardsList = cards.map((card) => {
    return (
      <div key={card.id} className="bg-white rounded-2xl md:w-4/5 py-10 h-min">
        <div className="md:px-10 px-5">
          <p className="pb-3 font-normal md:text-2xl text-lg text-black">{card.content}</p>
          <div className="flex gap-2 py-2 w-full">
            <img src={card.img} alt="IMG" className="md:w-14 md:h-14 w-10 h-10" />
            <div className="flex flex-col ">
              <p className="font-bold font-OpenSans text-base text-darkBlue">
                {card.name}
              </p>
              <p className="font-normal text-sm font-OpenSans text-darkBlue">
                {card.job}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-darkBlue h-full py-20">
      <div className="lg:px-32 md:px-20 px-10 ">
        <div className="flex md:flex-row flex-col md:justify-between gap-5">
          <h3 className="text-white font-Manrope font-normal leading-relaxed text-4xl md:w-4/6">
            An enterprise template to ramp up your company website
          </h3>
          <div className="flex gap-5 items-end">
            <img src={leftArrow} alt="leftArrow" className="w-14" />
            <img src={rightArrow} alt="rightArrow" className="w-14" />
          </div>
        </div>
        <div className="flex  lg:flex-row flex-col justify-between items-center  gap-5 py-20 font-OpenSans">
          {cardsList}
        </div>
      </div>
    </div>
  );
};

export default Section5;
