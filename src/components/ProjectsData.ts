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
      photo: "",
      photoAlt: "",
      title: "First Template",
      gitHubUrl: "https://omaralrifaee.github.io/first-tamplate/",
      LiveDemoUrl: "https://omaralrifaee.github.io/first-tamplate/",
    },
    {
      id: 2,
      photo: "",
      photoAlt: "",
      title: "Second Template",
      gitHubUrl: "https://github.com/OmarAlrifaee/second-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/second-tamplate/",
    },
    {
      id: 3,
      photo: "",
      photoAlt: "",
      title: "Third Template",
      gitHubUrl: "https://github.com/OmarAlrifaee/third-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/third-tamplate/",
    },
    {
      id: 4,
      photo: "",
      photoAlt: "",
      title: "Dashboard",
      gitHubUrl: "https://github.com/OmarAlrifaee/dashboard-tamplate",
      LiveDemoUrl: "https://omaralrifaee.github.io/dashboard-tamplate",
    },
  ],
  JsProjects: [
    {
      id: 1,
      photo: "",
      photoAlt: "",
      title: "Black Friday eShop",
      gitHubUrl: "https://github.com/OmarAlrifaee/black-friday-eshop",
      LiveDemoUrl: "https://omaralrifaee.github.io/black-friday-eshop/",
    },
    {
      id: 2,
      photo: "",
      photoAlt: "",
      title: "XO Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-xo-game",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-xo-game/",
    },
    {
      id: 3,
      photo: "",
      photoAlt: "",
      title: "Weather App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-weather-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-weather-app/",
    },
    {
      id: 4,
      photo: "",
      photoAlt: "",
      title: "Typing Speed Test",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-typing-speed-quiz/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-typing-speed-quiz/",
    },
    {
      id: 5,
      photo: "",
      photoAlt: "",
      title: "Quiz App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-quiz-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-quiz-app/",
    },
    {
      id: 6,
      photo: "",
      photoAlt: "",
      title: "CURDS App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-cruds/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-cruds/",
    },
    {
      id: 7,
      photo: "",
      photoAlt: "",
      title: "Notes App",
      gitHubUrl: "https://github.com/OmarAlrifaee/js-notes-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/js-notes-app/",
    },
    {
      id: 8,
      photo: "",
      photoAlt: "",
      title: "Memory Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/memory-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/memory-game/",
    },
    {
      id: 9,
      photo: "",
      photoAlt: "",
      title: "Image Slider",
      gitHubUrl: "https://github.com/OmarAlrifaee/image-slider/",
      LiveDemoUrl: "https://omaralrifaee.github.io/image-slider/",
    },
    {
      id: 10,
      photo: "",
      photoAlt: "",
      title: "Hangman Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/hangman-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/hangman-game/",
    },
  ],
  ReactProjects: [
    {
      id: 1,
      photo: "",
      photoAlt: "",
      title: "Quiz App",
      gitHubUrl: "https://github.com/OmarAlrifaee/quiz-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/quiz-app/",
    },

    {
      id: 2,
      photo: "",
      photoAlt: "",
      title: "Custom Select Menu",
      gitHubUrl: "https://github.com/OmarAlrifaee/ts-custom-select-menu/",
      LiveDemoUrl: "https://omaralrifaee.github.io/ts-custom-select-menu/",
    },
    {
      id: 3,
      photo: "",
      photoAlt: "",
      title: "XO Game",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-xo-game/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-xo-game/",
    },
    {
      id: 4,
      photo: "",
      photoAlt: "",
      title: "Bank Tamplate",
      gitHubUrl: "https://github.com/OmarAlrifaee/bank/",
      LiveDemoUrl: "https://omaralrifaee.github.io/bank/",
    },
    {
      id: 5,
      photo: "",
      photoAlt: "",
      title: "Shopping Cart",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-cart/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-cart/",
    },
    {
      id: 6,
      photo: "",
      photoAlt: "",
      title: "CRUDS App",
      gitHubUrl: "https://github.com/OmarAlrifaee/react-cruds/",
      LiveDemoUrl: "https://omaralrifaee.github.io/react-cruds/",
    },
    {
      id: 7,
      photo: "",
      photoAlt: "",
      title: "GYM App",
      gitHubUrl: "https://github.com/OmarAlrifaee/gym/",
      LiveDemoUrl: "https://omaralrifaee.github.io/gym/",
    },
    {
      id: 8,
      photo: "",
      photoAlt: "",
      title: "Notes App",
      gitHubUrl: "https://github.com/OmarAlrifaee/notes-app/",
      LiveDemoUrl: "https://omaralrifaee.github.io/notes-app/",
    },
  ],
};
export default ProjectsData;
