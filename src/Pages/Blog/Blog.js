import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";

const Blog = () => {
  const cards = [
    {
      id: 1,
      name: "Chandler Bing",
      img: blog1,
      content: "Pitch termsheet backing validation focus release.",
      personImage: person1,
    },
    {
      id: 2,
      name: "Rachel Green",
      img: blog2,
      content:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      personImage: person2,
    },
    {
      id: 3,
      name: "Monica Geller",
      img: blog3,
      content:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      personImage: person3,
    },
  ];
  const cardsList = cards.map((card) => {
    return (
      <div key={card.id} className="w-11/12">
        <div className="mt-10 px-2">
          <div className="">
            <img src={card.img} alt="IMG" className="w-full" />
          </div>
          <div className="flex items-center py-5 gap-3">
            <h3 className="text-darkBlue font-extrabold">Category</h3>
            <p className="text-gray-500">November 22, 2021</p>
          </div>
          <div className="">
            <p className="pb-3 font-normal text-xl h-28">{card.content}</p>
          </div>
          <div className="flex  md:pt-5 gap-3 relative cursor-pointer">
            <img src={card.personImage} alt="PersonPhoto" />
            <p>{card.name}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="lg:px-32 md:px-20 px-10 py-20">
      <header className="flex flex-col justify-center items-center">
        <p className="font-OpenSans text-center text-xl text-gray-500 font-normal pb-5">
          Our Blog
        </p>
        <h2 className="font-Manrope  text-4xl lg:w-3/5 md:w-4/5 text-center leading-tight">
          Value proposition accelerator product management venture
        </h2>
      </header>
      <div className="lg:flex lg:justify-between grid md:grid-cols-2 gap-5 grid-cols-1 py-20 font-OpenSans">
        {cardsList}
      </div>
      <div className="flex items-center justify-center">
        <p className="border-2 border-darkBlue rounded-full font-bold py-3 px-10 text-darkBlue font-OpenSans">Load more</p>
      </div>
    </div>
  );
};

export default Blog;
