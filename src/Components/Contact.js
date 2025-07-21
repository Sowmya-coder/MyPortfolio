
export default function Contact (){
  const textColor = {
        background: "linear-gradient(to right, #1e90ff, #ff69b4)", // hotpink to blue
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };
    return(
<section className="container py-5" id="contact">
  <h6 className="text-info text-center">What's Next</h6>
  <h2 className="display-5 fw-bold text-center mb-4" style={textColor}>Let's Connect</h2>
  <p className="text-center mb-5 text-muted">
    I’m always excited to collaborate on new projects or just chat about tech, design, or ideas. 
    Feel free to reach out via any of the platforms below!
  </p>

  <div className="row justify-content-center gap-4">
    <div className="col-md-3 card bg-dark border-info p-4 shadow">
      <i className="bi bi-envelope-fill fs-1 text-info mb-3"></i>
      <h5 className="text-white">Email</h5>
      <p className="text-white">sowmyagodavarthi513@gmail.com</p>
      <a href="mailto:sowmyagodavarthi513@gmail.com" className="btn btn-outline-info btn-sm mt-2">
        Send Email
      </a>
    </div>

    <div className="col-md-3 card bg-dark border-info p-4 shadow">
      <i className="bi bi-linkedin fs-1 text-info mb-3"></i>
      <h5 className="text-white">LinkedIn</h5>
      <p className="text-white">linkedin.com/in/sowmya-godavarthi-a37b8a156</p>
      <a href="https://www.linkedin.com/in/sowmya-godavarthi-a37b8a156/" className="btn btn-outline-info btn-sm mt-2" target="_blank" rel="noopener noreferrer">
        Connect
      </a>
    </div>

    <div className="col-md-3 card bg-dark text-white border-info p-4 shadow">
      <i className="bi bi-github fs-1 text-info mb-3"></i>
      <h5 className="text-white">GitHub</h5>
      <p className="text-white">github.com/Sowmya-coder</p>
      <a href="https://github.com/Sowmya-coder" className="btn btn-outline-info btn-sm mt-2" target="_blank" rel="noopener noreferrer">
        View Projects
      </a>
    </div>
  </div>
</section>
    );
}