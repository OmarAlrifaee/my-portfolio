import Me from "../assets/myPhoto/myPhoto.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
const Header = () => {
  return (
    <div className="container relative">
      <h5 className="mt-10">Hello I'am </h5>
      <h1>Omar Alrifai</h1>
      <h5 className="text-c-light">Frontend Developer</h5>
      <div className="flex items-center justify-center gap-5 mt-12">
        <a
          href="#"
          download={true}
          className="btn"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="btn btn-primary"
        >
          Let's Talk
        </a>
      </div>
      <div className="flex justify-center items-center mt-8 bg-gradient-to-b from-c-primary to-transparent rounded-t-[50%] py-10 max-w-[20rem] h-[24rem] mx-auto overflow-hidden">
        <img
          src={Me}
          alt="my photo"
        />
      </div>
      <div className="absolute left-[50%] translate-x-[-50%] bottom-[5rem] w-full hidden sm:flex items-center justify-between ">
        <HeaderSocials />
        <ScrollDown />
      </div>
    </div>
  );
};

export default Header;
