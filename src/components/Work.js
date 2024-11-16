import "../styles/Work.css";
import { BiCodeAlt } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiGitRepoForked } from "react-icons/bi";

function Work() {
  return (
    <div id="work-wrapper">
      <h3>Work.</h3>
      <div className="work">
        <div className="work-res">
          <a href="https://github.com/sheakin/Tintailor">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Tintailor</h1>
                  <p className="desc">An online dress shopping e-commerce site built with Python and Django.</p>
                  <p className="lang"><BiCodeAlt /> python Django</p>
                  <p className="stars"><BiSolidStar /> 3</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/sheakin/Social-Media-Application">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Social media application</h1>
                  <p className="desc">This application allows users to perform basic social media actions such as adding posts,logging in, following other users, searching for posts, liking posts, and commenting on posts.</p>
                  <p className="lang"><BiCodeAlt /> python Django</p>
                  <p className="stars"><BiSolidStar /> 1</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/sheakin/Vehichlemanagement">
            <div className="left">
              <div id="VehicleManagement">
                <div className="card">
                  <h1 className="title">VehicleManagement</h1>
                  <p className="desc">VehicleManagement is a full-stack web application built using Django and React that allows users to manage and track vehicle service histories and details efficiently.</p>
                  <p className="lang"><BiCodeAlt /> Python Django,JavaScript, React </p>
                  <p className="stars"><BiSolidStar /> 2</p>
                  <p className="forks"><BiGitRepoForked /> 1</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/sheakin/propulse_sports">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Propulse Sports</h1>
                  <p className="desc">Propulse Sports is a feature-rich eCommerce platform that caters to sports enthusiasts, providing an easy and intuitive way to purchase sports equipment and accessories.</p>
                  <p className="lang"><BiCodeAlt /> Python Django</p>
                  <p className="stars"><BiSolidStar /> 3</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/sheakin/Egadget_ecommerce_store">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Egadget ecommerce store</h1>
                  <p className="desc">Egadget store is a fully functional e-commerce site built with Python andDjango.</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 1</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/sheakin/Avodha-Shopping">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Avodha Shopping</h1>
                  <p className="desc">Avodha Shopping is an eCommerce website built with Python and Django, designed specifically for food shopping. The platform provides users with a streamlined shopping experience</p>
                  <p className="lang"><BiCodeAlt /> Python Django</p>
                  <p className="stars"><BiSolidStar /> 1</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
