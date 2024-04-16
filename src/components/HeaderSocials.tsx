import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href="https://github.com/OmarAlrifaee"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/omar-alrifai-748b752b0/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <div className="w-[2px] h-[20px] bg-c-primary"></div>
    </div>
  );
};

export default HeaderSocials;
