import { useState } from "react";
import Templates from "./Templates";
import JsProjects from "./JsProjects";
import ReactProjects from "./ReactProjects";
const Portfolio = () => {
  const [category, setCategory] = useState<string>("react");
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
        <div className="btns mt-3 flex items-center justify-center gap-5">
          <button
            className={`btn ${
              category === "html-css" && "btn-primary"
            } font-bold`}
            onClick={() => setCategory("html-css")}
          >
            Html & Css
          </button>
          <button
            className={`btn ${category === "js" && "btn-primary"} font-bold`}
            onClick={() => setCategory("js")}
          >
            JavaScript
          </button>
          <button
            className={`btn ${category === "react" && "btn-primary"} font-bold`}
            onClick={() => setCategory("react")}
          >
            React
          </button>
        </div>
        {category === "html-css" && <Templates />}
        {category === "js" && <JsProjects />}
        {category === "react" && <ReactProjects />}
      </div>
    </section>
  );
};

export default Portfolio;
