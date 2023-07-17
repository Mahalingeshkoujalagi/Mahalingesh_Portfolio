import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";


import LinkedInIcon from "@material-ui/icons/LinkedIn";
import  GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/thenameismahalingesh/"><InstagramIcon /></a>
       
        <a href="https://github.com/Mahttpshalingeshkoujalagi"> <GithubIcon/></a>
        
       <a href="https://www.linkedin.com/in/mahalingesh-koujalagi-97430a1a5"><LinkedInIcon /></a>
      </div>
     
    </div>
  );
}

export default Footer;
