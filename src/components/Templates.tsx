import ProjectsData from "./ProjectsData";
const Templates = () => {
  return (
    <div className="projects-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center mt-12">
      {ProjectsData.templates.map(
        ({ id, LiveDemoUrl, gitHubUrl, title, photo, photoAlt }) => (
          <div className="project" key={id}>
            <div className="image">
              <img src={photo} alt={photoAlt} />
            </div>
            <h3>{title}</h3>
            <div className="flex items-center gap-3 mt-5">
              <a href={gitHubUrl} className="btn" target="_blank">
                GitHub
              </a>
              <a href={LiveDemoUrl} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Templates;
