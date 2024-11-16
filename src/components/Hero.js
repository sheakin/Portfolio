import "../styles/Hero.css";
import hand from "../assets/waving-hand.webp";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container">
      <span className="hey">
        Hey <img src={hand} />
      </span>
      <h2>I'm Sheakin</h2>
      <p>
      Mastering Python Full Stack: Unlocking Powerful Patterns, Realizing Limitless Potential.
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sheakin-m-5159a9277/">
            <FaLinkedinIn size={12} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter size={12} /> Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/sheakin">
            <FaGithub size={12} /> Github
          </a>
        </li>
        <li>
          <a href="mailto:sheakin92@gmail.com">
            <HiMail size={12} /> Mail
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
