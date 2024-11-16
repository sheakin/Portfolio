import React, { useState } from 'react';
import '../styles/Skills.css';

const SkillsTab = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tabName ? null : tabName));
  };

  const skills = {
    "🌍 Web Development": [
      { skill: 'Languages: JavaScript, Python, SQL', link: '#' },
      { skill: 'Technologies/Frameworks: React, Django, HTML, CSS, Bootstrap, Django REST Framework, REST APIs', link: '#' },
      { skill: 'Databases: MySQL, SQLite, PostgreSQL', link: '#' },
    ],
    "🖥️ Backend Development": [
      { skill: 'Languages: Python, SQL', link: '#' },
      { skill: 'Databases: MySQL, SQLite, PostgreSQL', link: '#' }
    ],
    "💻 System & Environment ": [
      { skill: 'Operating Systems: Linux,Windows', link: '#' },
      { skill: 'Version Control: Git', link: '#' },
    ],
    "📂 Database Management": [
      { skill: 'Databases: MySQL, SQLite, PostgreSQL', link: '#' },
    ],
  };

  return (
    <div id='skills'>
      <h3>Skills.</h3>
      <div className="skills-tab">
        <div className="tab">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`tablinks ${activeTab === category ? 'active' : ''}`}
              onClick={() => handleTabClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {Object.keys(skills).map((category) => (
          <div
            key={category}
            className={`tabcontent ${activeTab === category ? 'active' : ''}`}
          >
            <div>
              {skills[category].map((skillItem, index) => (
                <a
                  key={index}
                  href={skillItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-badge"
                >
                  {skillItem.skill}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
