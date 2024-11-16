import "../styles/About.css";
import about from "../assets/about.jpeg"

function About() {
  return (
    <div id="about-wrapper">
      <div className="about">
        <div className="about-text">
          <h3>About.</h3>
          <p><strong>Hey, I’m Sheakin</strong>—a <strong>Full Stack Developer</strong> specializing in Python, Django, and React. With hands-on experience in developing and deploying dynamic web applications, I’ve built platforms that feature <strong>user-friendly interfaces</strong>, seamless payment integration, and efficient cart management. My work reflects a commitment to blending technical precision with high-quality, user-centered design.</p>

<p><strong>I’m passionate about collaboration and continuous growth.</strong> Whether attending hackathons, contributing to open-source projects, or engaging in AI meetups, I love connecting with the tech community to share insights and fuel my learning. Outside the digital world, I find balance through my love for football, music, and storytelling—embracing each day as an adventure in <strong>code and creativity.</strong></p>

          <a href="#" className="readmore">Read more..</a>
        </div>
        <div className="about-img">
          <img src={about}/>
        </div>
      </div>
    </div>
  );
}

export default About;
