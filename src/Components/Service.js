import { useState } from 'react';
import experienceData from './Data/Data';

export default function Service() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="container py-5 justify-content-center" id="experience">
      <h2 className="mb-5 text-align-center">Where I've Worked</h2>
      <div className="row">
        {/* Left: Company list */}
        <div className="col-md-4">
          <ul className="list-group list-group-flush border-start border-primary">
            {experienceData.map((company, index) => (
              <li
                key={company.name}
                className={`list-group-item bg-transparent ${index === selected ? "fw-bold border-start border-3 ps-3" : "ps-3"
                  }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(index)}
              >
                {company.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Role and details */}
        <div className="col-md-8 mt-sm-0 mt-md-0 mt-4 ps-md-5 ps-3">
          <div>
            <h5>
              {experienceData[selected].role}{" "}
              <span className="text-info">@ {experienceData[selected].name}</span>
            </h5>

            <p className="text-muted">{experienceData[selected].date}</p>

            <p className="text-success mb-2">
              <strong>Tech Stack:</strong> {experienceData[selected].techStack}
            </p>

            <ul>
              {experienceData[selected].points.map((point, i) => (
                <li key={i} className=" mb-2">
                  ▸ {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
