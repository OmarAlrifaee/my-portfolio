import { IconType } from "react-icons";
import { FaHtml5, FaCss3, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiTypescript, SiReactrouter } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
type Skill = {
  id: number;
  icon: IconType;
  iconStyle: string;
  title: string;
  experiance: string;
};
const Data: Skill[] = [
  {
    id: 1,
    icon: FaHtml5,
    iconStyle: "text-orange-500 mt-1",
    title: "Html",
    experiance: "Experianed",
  },
  {
    id: 2,
    icon: FaCss3,
    iconStyle: "text-c-primary mt-1",
    title: "Css",
    experiance: "Experianed",
  },
  {
    id: 3,
    icon: IoLogoJavascript,
    iconStyle: "text-yellow-400 mt-1",
    title: "JavaScript",
    experiance: "Experianed",
  },
  {
    id: 4,
    icon: FaBootstrap,
    iconStyle: "text-purple-700 mt-1",
    title: "bootstrap",
    experiance: "Experianed",
  },
  {
    id: 5,
    icon: SiTailwindcss,
    iconStyle: "text-c-primary mt-1",
    title: "tailwindcss",
    experiance: "Experianed",
  },
  {
    id: 6,
    icon: FaSass,
    iconStyle: "text-purple-400 mt-1",
    title: "sass",
    experiance: "Experianed",
  },
  {
    id: 7,
    icon: SiTypescript,
    iconStyle: "text-c-primary mt-1",
    title: "TypeScript",
    experiance: "Mid Level",
  },
  {
    id: 8,
    icon: IoLogoReact,
    iconStyle: "text-c-primary mt-1",
    title: "React",
    experiance: "Experianed",
  },
  {
    id: 9,
    icon: SiReactrouter,
    iconStyle: "text-orange-600 mt-1",
    title: "React Router",
    experiance: "Experianed",
  },
  {
    id: 10,
    icon: TbBrandRedux,
    iconStyle: "text-purple-600 mt-1",
    title: "Redux & Redux-toolkit",
    experiance: "Mid Level",
  },
  {
    id: 11,
    icon: SiNextdotjs,
    iconStyle: "mt-1",
    title: "Next.js",
    experiance: "Still Learning",
  },
  {
    id: 12,
    icon: FaGithubSquare,
    iconStyle: "mt-1",
    title: "Git & Github",
    experiance: "Still Learning",
  },
];
export default Data;
