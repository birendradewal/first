import React from "react";
import Data from "../Data/Data";
import profile from "../Images/profile.png";

const Home = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardBody">
          <img src={profile} alt="" />
          <h2>Hello There!</h2>
          <h1>I'm Birendra Dewal</h1>
          <p>Web Developer &amp; Graphics Designer</p>
          <button>Join With Me</button>
          <div className="sMediaIcon">
            {Data.map((data) => {
              return (
                <a href={data.link} target="_blank">
                  <img src={data.image} alt={data.alt} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
