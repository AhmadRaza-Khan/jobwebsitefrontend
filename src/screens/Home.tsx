import { Link } from "react-router-dom"
import { useAppContext } from "../context/Context"
const imageUrl = "./bg.jpg"
const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%"
}
const Home = () => {
    const { isOpen } = useAppContext();
  return (
    <div className="mb-20">
        <div className="flex flex-col items-center gap-10 justify-center" style={imageStyle}>
            <p className="lg:text-4xl text-md w-[70vw] text-center text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts!</p>
            <Link className="bg-orange-600 mt-3 animate-gradual-bounce lg:mt-10 py-1 lg:py-2 px-3 lg:px-5 rounded-md text-md lg:text-xl" to={"/signup"}>Let's get started!</Link>
        </div>
        <div
  style={{
    left: isOpen ? "0" : "15vw",
    width: isOpen? "90" : "70vw",
    right: isOpen? "0" : "15vw"
  }}
  className="bg-gray-950 py-4 lg:py-10 px-2 lg:px-5 lg:w-[70vw] absolute top-[80vh] text-orange-800 rounded-md"
>
  <p className="ml-3 mb-1 text-[12px] lg:text-xl">Latest Job</p>
  <p className="ml-3 text-[10px] lg:text-lg">Frontend Developer</p>
  <p className="ml-3 w-[40vw] text-[7px] lg:text-sm">
    Hiring frontend developer with an experience of at least 3 years in any of React JS, Next JS, Ember JS, Remix JS, or Nuxt JS. We hire on high pays, perks, and privileges. Let's code together!!
  </p>
</div>

        <div className="h-[20vw] w-[16vw] absolute right-[20vw] top-[70vh]">
            <img src="./programmer.jpg" className="contain" alt="img"/>
        </div>
        <div className="mt-52 md:ml-5 lg:ml-10 flex gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            <img src="./a.jpg" alt="img" className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[400px] " />
            <div className="flex items-center flex-col">
            <img src="./d.gif" alt="Animation" className="h-14 w-14 sm:h-16 sm:w-16 md:h-44 md:w-44 lg:h-64 lg:w-64" />
            <p className="mt-2 mr-2 text-[10px] sm:mt-20 md:mt-24 sm:mr-3 sm:text-[10px] md:mr-3 md:text-[12px] lg:text-[16px] lg:mt-32 lg:mr-4">A good programmer not only brings technical expertise in coding languages but also contributes problem-solving abilities, creativity, and a keen eye for optimization. Whether it's developing new features, fixing bugs, or maintaining complex systems, programmers play a pivotal role in ensuring a company's technology remains competitive and up-to-date.</p>
            </div>
        </div>
        <div className="bg-neutral-700 h-0.5 w-[80vw] my-6 mx-auto"></div>
        <p className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24"><b className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24">Programmers</b> are lifelong learners</p>
        <div className="mt-52 md:ml-10 lg:ml-10 flex gap-8 sm:gap-10 md:gap-14 lg:gap-12">
            <div className="flex items-center flex-col">
            <img src="./e.gif" alt="Animation" className="h-14 w-14 sm:h-16 sm:w-16 md:h-28 md:w-28 lg:h-44 lg:w-44" />
            <p className="mt-2 mx-3 mr-2 text-[10px] sm:mt-20 md:mt-14 sm:mr-3 sm:text-[10px] md:mr-3 md:text-[12px] lg:text-[16px] lg:mt-16 lg:mr-4">Programmers are the backbone of the technology-driven world we live in today. They are responsible for creating the software and applications that power everything from our smartphones to complex business systems. Their ability to write and optimize code brings ideas to life, turning abstract concepts into tangible solutions that solve real-world problems. Without programmers, the digital tools and conveniences we rely on daily would cease to exist.

The role of a programmer extends far beyond just writing code. They analyze requirements, design system architectures, and ensure the final product is functional, scalable, and user-friendly. Their work often involves collaborating with other professionals, such as designers, product managers, and stakeholders, to ensure that the final product aligns with the vision and goals of a project. This makes communication and teamwork vital skills for any programmer.

In addition to technical skills, a great programmer brings creativity and critical thinking to the table. They must continuously adapt to new technologies and methodologies, as the tech industry evolves rapidly. From debugging and testing to deploying and maintaining software, programmers must be both meticulous and innovative to deliver high-quality results. Their dedication and expertise often serve as the foundation for groundbreaking advancements in various industries.

Whether working independently or as part of a team, programmers play a pivotal role in shaping the future. They bridge the gap between what is possible and what can be imagined, pushing the boundaries of technology to improve lives and businesses alike. Their work may happen behind the scenes, but its impact is felt everywhere.</p>
            </div>
<img src="./b.jpg" alt="img" className=" lg:mt-28 md:mt-38v h-[400px] w-[350px] md:h-[400px] md:w-[350px] lg:h-[500px] lg:w-[400px]" />
        </div >
        <div className="bg-neutral-700 h-0.5 w-[80vw] my-6 mx-auto"></div>
        <p className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24">A great <b className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24">programmer</b> brings creativity and critical thinking to the table.</p>
        <div className="mt-30 md:ml-5 lg:ml-10 flex gap-8 sm:gap-10 md:gap-14 lg:gap-12">
            <img src="./c.jpg" alt="img" className="mt-36 lg:mt-28 md:mt-38v h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[400px]" />
            <div className="flex items-center flex-col">
            <img src="./f.gif" alt="Animation" className="h-14 mt-20 mg:mt-6 sm:mt-14 lg:mt-20 w-14 sm:h-16 sm:w-16 md:h-28 md:w-28 lg:h-44 lg:w-44" />
            <p className=" mr-2 text-[10px] mt-16 md:mt-24 sm:mr-3 sm:text-[10px] md:mr-3 md:text-[12px] lg:text-[16px] lg:mt-32 lg:mr-4">Programmers are also lifelong learners, constantly refining their skills to keep pace with the ever-changing landscape of technology. They immerse themselves in new languages, frameworks, and tools to remain competitive and innovative. This commitment to learning enables them to tackle complex challenges and devise solutions that drive efficiency, productivity, and innovation across industries. From startups building disruptive technologies to established companies modernizing their operations, programmers are the catalysts of progress, ensuring that technology continues to evolve and meet the needs of an increasingly connected world. Their passion for problem-solving and innovation makes them indispensable in shaping a smarter and more efficient future.</p>
            </div>
        </div>
        <div className="bg-neutral-700 h-0.5 w-[80vw] my-6 mx-auto"></div>
        <p className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24"><b className="text-xs md:text-md sm:text-sm text-center lg:text-xl mt-24">Coding</b> is more than just a skill</p>
        <div className="mt-30 md:ml-5 lg:ml-10 flex gap-8 sm:gap-10 md:gap-14 lg:gap-12">
        <div className="flex items-center flex-col">
            <img src="./g.gif" alt="Animation" className="h-14 mt-44 md:mt-40 sm:mt-44 lg:mt-36 w-14 sm:h-16 sm:w-16 md:h-28 md:w-28 lg:h-44 lg:w-44" />
            <p className=" mr-2 text-[6px] sm:mt-10 mt-16 md:mt-14 mx-3 sm:mr-3 sm:text-[10px] md:mr-3 md:text-[12px] lg:text-[16px] lg:mt-32 lg:mr-4">Coding is more than just a skill—it is a powerful tool that can turn your ideas into reality. Every line of code you write brings you one step closer to creating something new, solving a problem, or even changing the world. While it may seem challenging at times, each mistake is an opportunity to learn and grow. The beauty of coding lies in its ability to push you to think critically, be persistent, and never stop improving. Whether you're building a website, an app, or even a game, coding empowers you to take control of your future and create something that can make an impact. Keep coding, keep learning, and remember: the best programmers are not born—they are made through dedication and a willingness to keep trying.</p>
            </div>
            <img src="./h.jpg" alt="img" className="mt-36 lg:mt-28 md:mt-38v h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[400px]" />
        </div>
        <div className="bg-neutral-700 h-0.5 w-[80vw] my-6 mx-auto"></div>
    </div>
  )
}

export default Home