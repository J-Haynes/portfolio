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
            <title>github</title>
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
        <a
          href="https://drive.google.com/file/d/1z6SHxXnKD8cTs-0QeaXDib2J7pBG1Yis/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./cv.png" alt="cv" className="cv-img" />
        </a>
      </div>
      <div className="portfolio-div">
        <div className="project-div">
          <h4>PingPong</h4>
          <div className="photo-div">
            <img src="./ping.png" alt="pingpong" />
          </div>
          <p>
            This was my final group project at Dev Academy. Built in React
            Native, it is a basic social media app designed to kill your
            groupchat. Sign up, add your friends, and send a 'ping' with your
            current location to let your friends know what you're up to!
          </p>
          <p>Built with React Native and redux.js for the front-end</p>
          <div className="links-div">
            <a
              href="https://github.com/J-Haynes/pingpong"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="black"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>logo</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
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
          <p>Built with react.js with a node.js server</p>
          <div className="links-div">
            <a
              href="https://github.com/J-Haynes/password-gen"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="black"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>logo</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://jack-password-gen.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Link">
                  <path
                    id="Vector"
                    d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="project-div">
          <h4>Personal blog</h4>
          <div className="photo-div">
            <img src="./blog.png" alt="" />
          </div>
          <p>
            My first blog website created during 'foundations' at Dev Academy
            Aotearoa
          </p>
          <p>Created using vanilla html and css. </p>
          <div className="links-div">
            <a
              href="https://github.com/J-Haynes/J-Haynes.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="black"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>logo</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://j-haynes.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Link">
                  <path
                    id="Vector"
                    d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="project-div">
          <h4>Weather app</h4>
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
            <a
              href="https://github.com/J-Haynes/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="black"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>logo</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://weather-app-omega-black.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Link">
                  <path
                    id="Vector"
                    d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
