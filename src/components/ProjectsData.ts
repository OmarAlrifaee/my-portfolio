// html and css photos
import SECOND_TEMPLATE_PHOTO from "../assets/Projects/second-template.png";
import THIRD_TEMPLATE_PHOTO from "../assets/Projects/third-template.png";
import DASHBOARD_PHOTO from "../assets/Projects/dashboard.png";
// js photos
import TYPING_SPEED_TEST_JS_PHOTO from "../assets/Projects/typing-speed-test-js.jpg";
import MEMORY_GAME_JS_PHOTO from "../assets/Projects/memory-game-js.jpeg";
import HANGMAN_GAME_JS_PHOTO from "../assets/Projects/hangman-game-js.png";
// react photos
import QUIZ_APP_REACT_PHOTO from "../assets/Projects/quiz-app-react.webp";
import XO_GAME_REACT_PHOTO from "../assets/Projects/xo-game-react.png";
import BANK_TEMPLATE_PHOTO from "../assets/Projects/bank-react-template.png";
import CRUDS_APP_REACT_PHOTO from "../assets/Projects/CRUDS-APP-REACT.png";
import GYM_APP_REACT_PHOTO from "../assets/Projects/gym-app-react.jpg";
import YOUTUBE_CLONE_REACT_PHOTO from "../assets/Projects/youtube-clone.jpg";
// react + backend as a services platforms
import REACT_SNAPGRAM_PHOTO from "../assets/Projects/snapgram.png";
type Project = {
  id: number;
  photo?: string;
  photoAlt?: string;
  title: string;
  gitHubUrl: string;
  LiveDemoUrl: string;
  skills: string[];
  auth?: { title: string; email: string; password: string };
};
type MainObject = {
  templates: Project[];
  JsProjects: Project[];
  ReactProjects: Project[];
  fullStackProjects: Project[];
};
const ProjectsData: MainObject = {
  templates: [
    {
      id: 1,
      photo: SECOND_TEMPLATE_PHOTO,
      photoAlt: "First Template Photo",
      title: "First Template",
      gitHubUrl: "https://github.com/OmarAlrifaee/second-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/second-tamplate/",
      skills: ["html", "css", "js"],
    },
    {
      id: 2,
      photo: THIRD_TEMPLATE_PHOTO,
      photoAlt: "Second Template Photo",
      title: "Second Template",
      gitHubUrl: "https://github.com/OmarAlrifaee/third-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/third-tamplate/",
      skills: ["html", "css", "js"],
    },
    {
      id: 3,
      photo: DASHBOARD_PHOTO,
      photoAlt: "Dashboard Photo",
      title: "Dashboard",
      gitHubUrl: "https://github.com/OmarAlrifaee/dashboard-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/dashboard-tamplate",
      skills: ["html", "css"],
    },
    {
      id: 4,
      photo: BANK_TEMPLATE_PHOTO,
      photoAlt: "Bank Template Photo",
      title: "Bank Tamplate",
      gitHubUrl: "https://github.com/OmarAlrifaee/bank/",
      LiveDemoUrl: "https://omaralrifaee.github.io/bank/",
      skills: ["react", "tailwindcss"],
    },
  ],
  JsProjects: [
    {
      id: 1,
      photo: TYPING_SPEED_TEST_JS_PHOTO,
      photoAlt: "Typing Speed Test Photo",
      title: "Typing Speed Test",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-typing-speed-quiz/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-typing-speed-quiz/",
      skills: ["html", "css", "js"],
    },
    {
      id: 3,
      photo: MEMORY_GAME_JS_PHOTO,
      photoAlt: "Memory Game Photo",
      title: "Memory Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/memory-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/memory-game/",
      skills: ["html", "css", "js"],
    },
    {
      id: 4,
      photo: HANGMAN_GAME_JS_PHOTO,
      photoAlt: "Hangman Game Photo",
      title: "Hangman Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/hangman-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/hangman-game/",
      skills: ["html", "css", "js"],
    },
  ],
  ReactProjects: [
    {
      id: 1,
      photo: QUIZ_APP_REACT_PHOTO,
      photoAlt: "Quiz App Photo",
      title: "Quiz App",
      gitHubUrl: "https://github.com/OmarAlrifaee/quiz-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/quiz-app/",
      skills: ["react", "bootstrap", "react-router-dom"],
    },

    {
      id: 2,
      photo: YOUTUBE_CLONE_REACT_PHOTO,
      photoAlt: "Youtube clone photo",
      title: "Youtube Clone",
      gitHubUrl: "https://github.com/OmarAlrifaee/youtube-clone-react/",
      LiveDemoUrl: "https://omaralrifaee.github.io/youtube-clone-react",
      skills: [
        "react",
        "typescript",
        "redux-toolkit",
        "tailwindcss",
        "react-router-dom",
        "axios",
      ],
    },
    {
      id: 3,
      photo: GYM_APP_REACT_PHOTO,
      photoAlt: "GYM App Photo",
      title: "GYM App",
      gitHubUrl: "https://github.com/OmarAlrifaee/gym/",
      LiveDemoUrl: "https://omaralrifaee.github.io/gym/",
      skills: [
        "react",
        "react-router-dom",
        "react-loader-spinner",
        "bootstrap",
      ],
    },
    {
      id: 4,
      photo: XO_GAME_REACT_PHOTO,
      photoAlt: "XO Game Photo",
      title: "XO Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-xo-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-xo-game/",
      skills: ["react"],
    },
    {
      id: 5,
      photo: CRUDS_APP_REACT_PHOTO,
      photoAlt: "CRUDS App Photo",
      title: "CRUDS App",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-cruds/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-cruds/",
      skills: ["react", "tailwindcss", "framer-motion"],
    },
  ],
  fullStackProjects: [
    {
      id: 1,
      photo: REACT_SNAPGRAM_PHOTO,
      photoAlt: "snapgram photo",
      title: "SnapGram",
      gitHubUrl: "https://github.com/OmarAlrifaee/snapgram",
      LiveDemoUrl: "https://snapgram-inky-xi.vercel.app/",
      skills: [
        "react",
        "typescript",
        "appwrite",
        "tailwindcss",
        "shadcn",
        "react-query",
      ],
      auth: {
        title: "You Can Sign In With This Account",
        email: "guest@gmail.com",
        password: "guest12345",
      },
    },
  ],
};
export default ProjectsData;
