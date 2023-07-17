import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  const textAnimationStyle = {
    animation: 'text-animation 3s infinite',
    fontSize: "100px",
    style:"bold"

  };
  
  return (
    <div className="home">
      <div className="about">
        <h2 > Hi, My Name is</h2><span  style={textAnimationStyle}> Mahalingesh</span>
        <style>
        {`
          @keyframes text-animation {
            0% { opacity: 0; transform: translateY(-20px); }
            50% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); }
          }
        `}
        </style>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/Mahalingeshkoujalagi"> <GithubIcon/></a>
      
       <a href="https://www.linkedin.com/in/mahalingesh-koujalagi-97430a1a5"><LinkedInIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
