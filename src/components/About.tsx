import aboutMe from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className="flex xl:flex-row flex-col items-center gap-[50px]">
          <div className="flex-1 h-[400px] md:max-w-[100%] max-w-[70%]  rounded-[20px] bg-gradient-to-b from-c-primary to-transparent">
            <img
              src={aboutMe}
              alt="About Image"
              className="rounded-[20px]  md:transition-all md:duration-[0.5s] hover:md:rotate-[10deg] h-full"
            />
          </div>
          <div className="about-content flex flex-col items-center gap-3 flex-1 ">
            <div className="cards flex md:flex-row flex-col items-center md:justify-between justify-normal w-full md:gap-0 gap-5 ">
              <div className="card p-8 px-10  rounded-[20px] flex flex-col items-center gap-2 bg-c-primary-variant md:w-fit w-full flex-shrink-0">
                <FaAward className="text-[30px] text-c-primary" />
                <h5 className="text-[1rem] mt-3">Experiance</h5>
                <small className="text-c-light">0+ Years</small>
              </div>
              <div className="card p-8 px-10  rounded-[20px] flex flex-col items-center gap-2 bg-c-primary-variant md:w-fit w-full flex-shrink-0">
                <FiUsers className="text-[30px] text-c-primary" />
                <h5 className="text-[1rem] mt-3">Clients</h5>
                <small className="text-c-light">0+ WorldWide</small>
              </div>
              <div className="card p-8 px-10  rounded-[20px] flex flex-col items-center gap-2 bg-c-primary-variant md:w-fit w-full flex-shrink-0">
                <VscFolderLibrary className="text-[30px] text-c-primary" />
                <h5 className="text-[1rem] mt-3">Projects</h5>
                <small className="text-c-light">30+ Complited</small>
              </div>
            </div>
            <p className="text-c-light mt-5 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ad necessitatibus, nihil officia error vero quaerat dolorem. Modi,
              itaque dolore, voluptates rem, magnam porro enim veritatis quam
              illum consequatur fugiat.
            </p>
            <a
              href="#contact"
              className="btn btn-primary md:me-auto mt-3"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
