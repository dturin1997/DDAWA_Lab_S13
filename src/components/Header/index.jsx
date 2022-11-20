import "../style.css"
const Header = () => {
  return (
    <header className="header">
      <div>
        <img src="./libro-2.png" alt="" 
        
        />
        <h1>Libros</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;