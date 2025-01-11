import React from "react";
import logo from "../assets/images/new-logo.webp";
import "../assets/style.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <img src={logo} alt=""></img>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <ul>
                  <li className="">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
