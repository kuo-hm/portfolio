import React from "react";
import "./Intro.css";

const Introduction = () => {
  return (
    <div className="card">
      <div className="profile-sidebat">
        <img
          className="profile-image"
          src="https://cdn.discordapp.com/attachments/767167687335739403/810746402229321778/latest.png"
          alt=""
        />
        <ul className="social-list">
          <li className="social-link">
            <a href="/">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="social-link">
            <a href="/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-link">
            <a href="/">
              <i class="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-main">
        <h2 className="profile-name">Oussama Hmoura</h2>
        <p className="profile-position">Web Developer</p>
        <p className="profile-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          tempore rerum cumque quod tempora minima, deserunt ipsam possimus eos
          similique! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quidem dolore consequuntur dicta possimus recusandae deserunt dolor
          amet laboriosam cum non?
        </p>
      </div>
    </div>
  );
};

export default Introduction;
