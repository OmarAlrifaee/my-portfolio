import { AiOutlineHome } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("#");
  return (
    <nav className="z-50 bg-nav-bg fixed left-[50%] translate-x-[-50%] bottom-[1rem] flex items-center gap-5 py-3 px-5 rounded-[10rem] backdrop-blur-lg">
      <a
        href="#"
        className={`text-[20px] bg-transparent rounded-[50%] p-3 text-c-light hover:bg-nav-bg ${
          activeSection === "#" && "active"
        }`}
        onClick={() => setActiveSection("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#experiance"
        className={`text-[20px] bg-transparent rounded-[50%] p-3 text-c-light hover:bg-nav-bg ${
          activeSection === "#experiance" && "active"
        }`}
        onClick={() => setActiveSection("#experiance")}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        className={`text-[20px] bg-transparent rounded-[50%] p-3 text-c-light hover:bg-nav-bg ${
          activeSection === "#contact" && "active"
        }`}
        onClick={() => setActiveSection("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
