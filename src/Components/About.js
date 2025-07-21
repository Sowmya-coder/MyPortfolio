import Sowmya_officePic1 from '../Images/Sowmya_officePic1.jpg';

export default function About() {
    return (
        <div className="container py-5" id="about">
            <div className="row align-items-center">
                
                <div className="col-lg-8 col-md-12">
                    <h2 className="mb-4">About Me</h2>
                    <p>
                        Hi, my name is <strong className="text-info">Sowmya Godavarthi</strong>. I'm a Front-End React Developer with 4.5 years of industry experience,
                        passionate about building clean, responsive UIs.
                        I have a background in SAP C4C and enjoy creating elegant, user-focused applications.
                    </p>
                    <p>
                        These days I'm focusing on growing my React and UI/UX skillset while building a strong personal portfolio.
                    </p>

                    <p className="mt-4">Areas of Expertise:</p>
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
