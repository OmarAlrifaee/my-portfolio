// html and css photos
import SECOND_TEMPLATE_PHOTO from "../assets/Projects/second-template.png";
import THIRD_TEMPLATE_PHOTO from "../assets/Projects/third-template.png";
import DASHBOARD_PHOTO from "../assets/Projects/dashboard.png";
// js photos
import TYPING_SPEED_TEST_JS_PHOTO from "../assets/Projects/typing-speed-test-js.jpg";
import QUIZ_APP_JS_PHOTO from "../assets/Projects/quiz-app-js.png";
import CRUDS_APP_JS_PHOTO from "../assets/Projects/cruds-app-js.png";
import MEMORY_GAME_JS_PHOTO from "../assets/Projects/memory-game-js.jpeg";
import HANGMAN_GAME_JS_PHOTO from "../assets/Projects/hangman-game-js.png";
// react photos
import QUIZ_APP_REACT_PHOTO from "../assets/Projects/quiz-app-react.webp";
import SELECT_MENU_REACT_PHOTO from "../assets/Projects/select-menu-react.png";
import XO_GAME_REACT_PHOTO from "../assets/Projects/xo-game-react.png";
import BANK_TEMPLATE_PHOTO from "../assets/Projects/bank-react-template.png";
import SHOPPING_CART_REACT_PHOTO from "../assets/Projects/shopping-cart-react.jpg";
import CRUDS_APP_REACT_PHOTO from "../assets/Projects/CRUDS-APP-REACT.png";
import GYM_APP_REACT_PHOTO from "../assets/Projects/gym-app-react.jpg";
import NOTES_APP_APP_REACT_PHOTO from "../assets/Projects/notes-app-react.avif";
type Project = {
  id: number;
  photo?: string;
  photoAlt?: string;
  title: string;
  gitHubUrl: string;
  LiveDemoUrl: string;
};
type MainObject = {
  templates: Project[];
  JsProjects: Project[];
  ReactProjects: Project[];
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
    },
    {
      id: 2,
      photo: THIRD_TEMPLATE_PHOTO,
      photoAlt: "Second Template Photo",
      title: "Second Template",
      gitHubUrl: "https://github.com/OmarAlrifaee/third-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/third-tamplate/",
    },
    {
      id: 3,
      photo: DASHBOARD_PHOTO,
      photoAlt: "Dashboard Photo",
      title: "Dashboard",
      gitHubUrl: "https://github.com/OmarAlrifaee/dashboard-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/dashboard-tamplate",
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
    },
    {
      id: 2,
      photo: QUIZ_APP_JS_PHOTO,
      photoAlt: "Quiz App Photo",
      title: "Quiz App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-quiz-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-quiz-app/",
    },
    {
      id: 3,
      photo: CRUDS_APP_JS_PHOTO,
      photoAlt: "CRDUS App Photo",
      title: "CURDS App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-cruds/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-cruds/",
    },
    {
      id: 4,
      photo: MEMORY_GAME_JS_PHOTO,
      photoAlt: "Memory Game Photo",
      title: "Memory Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/memory-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/memory-game/",
    },
    {
      id: 5,
      photo: HANGMAN_GAME_JS_PHOTO,
      photoAlt: "Hangman Game Photo",
      title: "Hangman Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/hangman-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/hangman-game/",
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
    },

    {
      id: 2,
      photo: SELECT_MENU_REACT_PHOTO,
      photoAlt: "Select menu Photo",
      title: "Custom Select Menu",
      gitHubUrl: "https://github.com/OmarAlrifaee/ts-custom-select-menu/",
      LiveDemoUrl: "https://omaralrifaee.github.io/ts-custom-select-menu/",
    },
    {
      id: 3,
      photo: XO_GAME_REACT_PHOTO,
      photoAlt: "XO Game Photo",
      title: "XO Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-xo-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-xo-game/",
    },
    {
      id: 4,
      photo: BANK_TEMPLATE_PHOTO,
      photoAlt: "Bank Template Photo",
      title: "Bank Tamplate",
      gitHubUrl: "https://github.com/OmarAlrifaee/bank/",
      LiveDemoUrl: "https://omaralrifaee.github.io/bank/",
    },
    {
      id: 5,
      photo: SHOPPING_CART_REACT_PHOTO,
      photoAlt: "Shopping Cart Photo",
      title: "Shopping Cart",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-cart/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-cart/",
    },
    {
      id: 6,
      photo: CRUDS_APP_REACT_PHOTO,
      photoAlt: "CRUDS App Photo",
      title: "CRUDS App",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-cruds/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-cruds/",
    },
    {
      id: 7,
      photo: GYM_APP_REACT_PHOTO,
      photoAlt: "GYM App Photo",
      title: "GYM App",
      gitHubUrl: "https://github.com/OmarAlrifaee/gym/",
      LiveDemoUrl: "https://omaralrifaee.github.io/gym/",
    },
    {
      id: 8,
      photo: NOTES_APP_APP_REACT_PHOTO,
      photoAlt: "Notes App Photo",
      title: "Notes App",
      gitHubUrl: "https://github.com/OmarAlrifaee/notes-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/notes-app/",
    },
  ],
};
export default ProjectsData;
