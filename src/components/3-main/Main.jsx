import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">My Projects</button>
        <button>Skills</button>
        <button>Soft Skills</button>
        <button>interests</button>
      </section>
      <section className="flex right-section">
        {["aa", "bb", "cc", "dd", "ee"].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="./stage.png" alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Title</h1>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis?
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
