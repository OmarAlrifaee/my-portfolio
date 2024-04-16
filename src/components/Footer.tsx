import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="py-[100px] bg-c-primary mt-10"
      id="footer"
    >
      <h2 className="text-center text-black font-bold mx-auto text-[25px]">
        Omar Alrifai
      </h2>
      <ul className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
        <li>
          <a
            href="#"
            className="text-black font-semibold"
          >
            Home
          </a>
        </li>
        {/* <li>
          <a
            href="#about"
            className="text-black font-semibold"
          >
            About
          </a>
        </li> */}
        <li>
          <a
            href="#experiance"
            className="text-black font-semibold"
          >
            Experiance
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-black font-semibold"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#hoppies"
            className="text-black font-semibold"
          >
            Hoppies
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-black font-semibold"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-3 mt-5">
        <a
          href="https://github.com/OmarAlrifaee"
          className="p-3 bg-c-bg rounded-md"
          target="_blank"
        >
          <FaSquareGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/omar-alrifai-748b752b0/"
          className="p-3 bg-c-bg rounded-md"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
