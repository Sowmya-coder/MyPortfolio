import Sowmya_officePic1 from '../Images/Sowmya_officePic1.jpg';

export default function About() {
    return (
        <div className="container py-5" id="about">
            <div className="row align-items-center">
                
                <div className="col-lg-8 col-md-12">
                    <h2 className="mb-4">About Me</h2>
                    <p>
                       Hi, I’m <b className="text-info">Sowmya Godavarthi</b>, a React Front-End Developer with 4.10 years of experience, including over 4 years in modern JavaScript and React.js development. I specialize in building scalable, performance-driven web applications using React.js, clean component architecture, and responsive design principles.
                    </p>
                    <p>
                        My strengths include API integration, debugging, and deploying optimized applications through tools like Git, Docker, Netlify, and Vercel. I also bring a solid foundation in UI/UX best practices, ensuring every project is user-focused and visually polished.

                    </p>
                    <p>With a background in CRM platforms like SAP C4C, I bridge technical development with business logic—creating meaningful and intuitive user experiences. Let’s connect, exchange ideas, and collaborate on exciting projects that blend design with purpose!</p>
                    {/* <p>Let’s connect and explore new ideas, collaborate on exciting projects, or simply chat about tech and design!</p> */}
                    <b className="mt-4">Areas of Expertise:</b>
                    <div className="row">
                        <div className="col-sm-7">
                            <ul className="list-unstyled">
                                <li>▸ Front-End Development</li>
                                <li>▸ Responsive Design</li>
                                <li>▸ DOM Manipulation </li>

                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <ul className="list-unstyled">
                                <li>▸ API Integration </li>
                                <li>▸ Version Control</li>
                                <li>▸ RM Exposure </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 text-center mt-4 mt-lg-0">
                    <img
                        src={Sowmya_officePic1}
                        alt="Sowmya"
                        className="img-fluid rounded shadow-lg border border-primary"
                        style={{ maxWidth: "300px" }}
                    />
                </div>
            </div>
        </div>
    );
}
