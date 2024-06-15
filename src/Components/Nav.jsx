export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="name-div">
          <p>Jack Haynes Portfolio</p>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="#title">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                href="https://github.com/J-Haynes/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
