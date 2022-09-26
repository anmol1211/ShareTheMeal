import React from "react";
import Satya from "../images/Satya.jpeg";
import Anmol from "../images/anmol.jpeg";
import Aniket from "../images/aniket.jpeg";
import Shrikant from "../images/srk.png";
import Harshita from "../images/srk.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Satya} alt="Satya" />
                        </div>
                        <div className="img-text">
                          <h2>Satyajeet Mohan Yadav</h2>
                          <p>
                            Hi I'm Satyajeet Mohan Yadav, Team lead of this
                            project. I'm currently pursuing Diploma in CDAC
                            Pune, and my role in the project is Backend
                            Developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Anmol} alt="Anmol" />
                        </div>
                        <div className="img-text">
                          <h2>Anmol Mahendra Jadhav</h2>
                          <p>
                            Hi I'm Anmol Mahendra Jadhav. I'm currently pursuing
                            Diploma in CDAC Pune, and my role in the project
                            is Backendend Developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Aniket} alt="Aniket" />
                        </div>
                        <div className="img-text">
                          <h2>Aniket Ashok Patil</h2>
                          <p>
                            Hi I'm Aniket Ashok Patil. I'm currently pursuing Diploma
                            in CDAC Pune, and my role in the project is
                            Frontend Developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Shrikant} alt="Shrikant" />
                        </div>
                        <div className="img-text">
                          <h2>Shrikant Patange</h2>
                          <p>
                            Hi I'm Shrikant Patange. I'm currently pursuing
                            Diploma in CDAC Pune, and my role in the project
                            is Frontend Developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Harshita} alt="Harshita" />
                        </div>
                        <div className="img-text">
                          <h2>Harshita Maheshwari</h2>
                          <p>
                            Project Guide
                            

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
