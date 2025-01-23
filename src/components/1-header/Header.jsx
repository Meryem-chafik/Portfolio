import "./header.css";
const Header = () => {
  return (
    <header className="flex ">
      <button className="menu">show model</button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button>light</button>

      <div className="fixed">
        <div className="modal">
          <ul>
            <li>
              <a href="">About</a>
              <a href="">Articles</a>
              <a href="">Projects</a>
              <a href="">Speaking</a>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
