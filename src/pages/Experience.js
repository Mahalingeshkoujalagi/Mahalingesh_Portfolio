import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017,SSLC"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shree Basavananda High School,Mahalingpur
          </h3>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019,PUC"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tungal Pu College Jamakhandi
          </h3>

<br/>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science
          </h4>

          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019- 2023 ,UG"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Basaveswara Engineering College Bagalkot
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          <br/>
          Computer Science
            
          </h4>
          
          <li style={{listStyleType:'none'}} >Projects</li>
          <li style={{listStyleType:'none'}}>Phython Voice Assistant .</li>
          <li style={{listStyleType:'none'}}>Grocery Web Application .</li>
          
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Internship"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
         
          <h4 className="vertical-timeline-element-subtitle">
           AMSA Solutions ,Hubli
          </h4>
          <p>
            Learned about Android App development,<br/>Developed Medicine Finder App
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
