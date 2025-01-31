import { useState } from "react";
import { myProjects } from "./myProjects";
import { mySkills } from "./mySkills";
import "./main.css";
const Main = () => {
  const [active, setActive] = useState("all");
  const [myProject, setMyProject] = useState(myProjects);
  const [showSkills, setShowSkills] = useState(false);
  return (
    <main id="work" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setActive("all");
            setMyProject(myProjects);
            setShowSkills(false);
          }}
          className={active === "all" ? "active" : null}
        >
          My Work
        </button>
        <button
          onClick={() => {
            setActive("projects");
            const newArr = myProjects.filter(
              (item) => item.category === "projects"
            );
            setMyProject(newArr);
            setShowSkills(false);
          }}
          className={active === "projects" ? "active" : null}
        >
          My projects
        </button>

        <button
          onClick={() => {
            setActive("soft-skills");
            const newArr = myProjects.filter(
              (item) => item.category === "soft-skills"
            );
            setMyProject(newArr);
            setShowSkills(false);
          }}
          className={active === "soft-skills" ? "active" : null}
        >
          Soft Skills
        </button>

        <button
          onClick={() => {
            setActive("skills");
            setMyProject([]);
            setShowSkills(true);
          }}
          className={active === "skills" ? "active" : null}
        >
          Skills
        </button>
      </section>
      <section className="flex right-section">
        {myProject.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img
                style={{ width: 266, height: 150, objectFit: "cover" }}
                src={item.imgPath}
                alt=""
              />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="subtitle">{item.description}</p>
                {/* <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span className="icon-arrow-right"></span>
                  </a>
                </div> */}
              </div>
            </article>
          );
        })}
        {showSkills && (
          <div className="gridContainer">
            {mySkills.map((skill, index) => (
              <div key={index} className="skillCard">
                {/* Container pour icône et nom */}
                <div className="skillContent">
                  <span className="skillIcon">{skill.icon}</span>
                  <p className="skillName">{skill.skillName}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
