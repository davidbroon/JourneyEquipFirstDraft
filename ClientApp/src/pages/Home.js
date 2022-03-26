import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Journey-Logo-White.png";
import BannerImage from "../assets/images/sunrise.jpg";
import BannerVideo from "../assets/videos/video-1.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
     {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className="headerContainer">
        <h1><img src={Logo} alt="jccLogo" /></h1>
        <p> Coming Soon...</p>
        <Link to="/course">
          <button> Find Out More </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
