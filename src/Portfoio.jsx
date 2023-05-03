export default function Portfolio() {
  return (
    <div className="container">
      <div className="info-div">
        <h3>
          Hello! 👋 My name is Jack Haynes, a full stack web developer based in
          Wellington, New Zealand
        </h3>
      </div>
      <div className="icons-div">
        <a href="https://github.com/J-Haynes" target="_blank" rel="noreferrer">
          <svg
            stroke="white"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Open s-thom/ourflags.lgbt in GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jack-haynes-nz/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            fill="white"
            width="50px"
            height="50px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a href="https://www.google.co.nz">
          <img src="./cv.png" alt="cv" className="cv-img" />
        </a>
      </div>
      <div className="portfolio-div">
        <div className="project-div">
          <p>project</p>
          <div className="photo-div"></div>
        </div>
        <div className="project-div">
          <h4>Password generator</h4>
          <div className="photo-div">
            <img src="./password.png" alt="" />
          </div>
          <p>
            {' '}
            Inspired by{' '}
            <a href="https://passwordsgenerator.net/">passwordgenerator.net</a>,
            a simple front end app built in react.js for generating secure
            passwords. Choose your password length and select the types of
            characters (uppercase, lowercase, numbers, symbols). See how long
            your password will take to crack!
          </p>
        </div>
        <div className="project-div">
          <p>personal blog</p>
          <div className="photo-div">
            <img src="./blog.png" alt="" />
          </div>
          <p>
            My first blog website created during 'foundations' at Dev Academy
            Aotearoa
          </p>
          <p>Created using vanilla html and css. </p>
        </div>
        <div className="project-div">
          <p>weather app</p>
          <div className="photo-div">
            <img src="./weather.png" alt="" />
          </div>
          <p>
            A simple, interactive full stack weather app built in react.js. See
            the current weather in the North Island of New Zealand.
          </p>
          <p>
            Created using the stack I learned at Dev Academy. Stores weather
            data in a SQLite3 database to reduce API calls
          </p>
          <div className="links-div">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open s-thom/ourflags.lgbt in GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
