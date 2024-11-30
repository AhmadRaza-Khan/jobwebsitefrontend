import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { HomePageData } from "../lib/data";

const imageUrl = "./bg.jpg";
const imageStyle = {
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
};

const Home = () => {
  const { isOpen } = useAppContext();

  return (
    <div className="mb-20">
      {/* Hero Section */}
      <div
        className="flex flex-col h-[70vh] lg:h-[100vh] items-center gap-8 lg:gap-10 text-center px-4"
        style={imageStyle}
      >
        <p
        style={{
          marginRight: isOpen ? 100 : undefined,
          transition: "margin-right 0.3s ease",
        }}
        className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl max-w-[70vw] mt-44 sm:mt-32 lg:mt-48">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts!
        </p>
        <Link
        style={{
          marginRight: isOpen ? 70 : undefined,
          transition: "margin-right 0.3s ease",
        }}
        
          className="bg-orange-600 animate-gradual-bounce text-white py-2 px-4 rounded-md text-sm md:text-lg lg:text-xl transition-transform transform hover:scale-105"
          to="/signup"
        >
          Let's get started!
        </Link>
      </div>

      {/* Latest Job Section */}
     <div
     
     className="bg-transparent lg:top-[500px] left-0 right-0 absolute px-5 bottom-10 py-20 flex justify-center items-center"
     >
     <div className="bg-gray-950 py-4 px-2 w-fit lg:py-10 lg:px-4 text-orange-800 rounded-bl-md rounded-tl-md">

<p className="ml-3 mb-1 text-[12px] lg:text-xl">Latest Job</p>
  <p className="ml-3 text-[10px] lg:text-lg">Frontend Developer</p>
  <p className="ml-3 w-[40vw] text-[7px] lg:text-sm">
    Hiring frontend developer with an experience of at least 3 years in any of React JS, Next JS, Ember JS, Remix JS, or Nuxt JS. We hire on high pays, perks, and privileges. Let's code together!!
  </p>
</div>
<div className="flex items-center justify-center">
        <img src="./programmer.jpg" className="object-contain h-36 w-36 -ml-6 -mr-[15px] lg:-ml-11 lg:-mr-[20.5px] lg:h-64 lg:w-64" alt="Programmer" />
        <div className="bg-gray-950 lg:h-[200px] h-[121.5px] w-5 rounded-br-md rounded-tr-md"></div>
      </div>
     </div>


      {/* Sections */}
      <div className="flex flex-col lg:mt-56 mt-14 px-4 lg:px-10">
      
      {
        HomePageData.map((data)=>(
          <div key={data.id} className="flex flex-col items-center gap-5">
                        <p className="text-sm md:text-md sm:text-sm text-center lg:text-3xl mt-10">{data?.heading}</p>
                      <div className="flex lg:mt-20 justify-between lg:gap-40 gap-20 items-center">
                      <img src={data.animatedImg} alt="Animation" className="h-14 w-14 lg:h-56 lg:w-56 mb-5" />
                      <img src={data.imgUrl} alt="img" className="h-[150px] lg:h-[500px] lg:w-[500px] w-[150px] " />
                      </div>
                      <div className="flex items-center flex-col">
                      <p className="mt-2 mr-2 lg:text-lg text-justify text-[10px]">{data.content}</p>
                      </div>
                  <div className="bg-neutral-700 h-0.5 w-[80vw] my-3 mx-auto"></div>
                  </div>
          
          
          ))
          
      }

        </div >
    </div>
  );
};

export default Home;
