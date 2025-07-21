import React, { useState, useEffect } from "react";

export default function Home() {
    const fullText = "Sowmya Godavarthi";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const headerName = {
        background: "linear-gradient(to right, #ff69b4, #1e90ff)", // hotpink to blue
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    useEffect(() => {
        const typingSpeed = isDeleting ? 150 : 200;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);
                if (index + 1 === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setText(fullText.substring(0, index - 1));
                setIndex(index - 1);
                if (index - 1 === 0) {
                    setIsDeleting(false);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, fullText]);

    return (
        <div className="container">
            <div className="row ps-3 g-0">
                <div className="col-12 col-lg-6 mt-2 mt-md-4 mt-lg-5">
                    <h4 className="pt-2 pt-md-4 pt-lg-5">I'm <span className="gradient-text display-4 fw-semibold" style={headerName}>{text}</span>
                        <span className="text-color-white blinking-cursor gradient-text display-5 fw-bold" style={headerName}>|</span>
                    </h4>
                    <h4 className=" display-6 animate__animated animate__zoomIn">React Developer</h4>
                    <p className="display-9 animate__animated animate__fadeInUp"> I'm a passionate Front-end React Developer with hands-on experience in creating user-friendly applications using React.js, Bootstrap, TailwindCSS and modern UI/Ux practices</p>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-5 mx-5 animate__animated animate__flipInX">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="50" />
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="50" /> */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="GitHub" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="GitHub" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="GitHub" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="GitHub" width="50" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="GitHub" width="50" />
                        {/* <img src="https://raw.githubusercontent.com/VincentGarreau/particles.js/master/img/logo.jpg" alt="GitHub" width="50" /> */}

                    </div>
                </div>
                <div className="col-12 col-lg-6 rounded mx-auto d-block justify-content-center">
                    <img src="https://bootstrapmade.com/content/demo/Arsha/assets/img/hero-img.png" className="d-block w-100 py-5 animate__animated animate__pulse animate__infinite animate__slow" alt="Home_image"
                    />
                </div>
            </div>
        </div>
    );
}