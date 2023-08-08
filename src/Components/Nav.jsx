export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="name-div">
          <p>Jack Haynes Portfolio</p>
        </div>
        <div className="nav-list">
          <ul>
            <a href="#title">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a
              href="https://github.com/J-Haynes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <li>Source</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
