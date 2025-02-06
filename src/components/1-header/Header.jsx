import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex ">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#work">Work</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("theme"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowModal(false)}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#work">Work</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
