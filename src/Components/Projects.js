import projectData from "./Data/ProjectsData";

export default function Projects() {
  const projectName = {
    background: "linear-gradient(to right, #ff69b4, #1e90ff)", // hotpink to blue
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="container p-5 text-align-center" id="projects">
      <h2 className="mb-4">Projects</h2>
      {projectData.map((project) => (
        <div className="row g-0 bg-body-secondary position-relative mb-4 rounded overflow-hidden" key={project.name}>
          <div className="col-md-6 mb-md-0 p-md-4">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="w-100 h-100 object-fit-cover" alt={project.name} />
            </a>
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <small className="text-info d-block mb-1">Featured Project</small>
            <h5 className="gradient-text" style={projectName}>{project.name}</h5>
            <p className="text-muted">{project.description}</p>
            <p className="text-success fw-bold">{project.tech}</p>
            {/* <a href={project.link} className="stretched-link" target="_blank" rel="noreferrer">View Project</a> */}
            <div className="d-flex gap-2">
              <a href={project.link} className="btn btn-outline-primary stretched-link" target="_blank" rel="noreferrer">
                <i className="fas fa-arrow-up-right-from-square fs-6"></i> View Project
              </a>
              <a href={project.github} className="btn btn-outline-primary" target="_blank" rel="noreferrer">
                <i className="fab fa-github fs-5"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
