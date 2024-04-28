import ProjectsData from "./ProjectsData";
const FullStackProjects = () => {
  return (
    <div className="projects-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center mt-12">
      {ProjectsData.fullStackProjects.map(
        ({ id, LiveDemoUrl, gitHubUrl, title, photo, photoAlt, auth }) => (
          <div className="project" key={id}>
            <div className="image">
              <img src={photo} alt={photoAlt} />
            </div>
            <h3>{title}</h3>
            {auth?.title && (
              <div className="mx-auto text-center text-sm text-c-light">
                <div className="mb-1">{auth.title}</div>
                <span>Email: {auth.email}</span>
                <br />
                <span>Password: {auth.password}</span>
              </div>
            )}
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

export default FullStackProjects;
