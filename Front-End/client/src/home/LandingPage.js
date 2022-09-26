import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <section class="home-banner">
        <div class="banner-bg">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rZJIMvhmliwmde8a6/videoblocks-children-at-the-dump-dispossessed-orphans-hungry-children-looking-for-food-in-a-landfill_s_xc33qn3l__ae8f0d805fe0b6e1d7203dc4b39b688e__P360.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div class="container-fluid h-100">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-md-6 d-md-none">
                
              </div>
              <div class="col-md-12">
                <div class="banner-caption-wrap">
                  <h1 class="tlt">
                    <br />
                    <br />
                  </h1>
                  {/* {<img class="logo" src={letsplay}></img>} */}

                  <h3 class="tlt">
                    <h2>Think Of The Poor</h2>
                  </h3>
                  <h2>Before You Waste Your Food </h2>
                  <div class="banner-btns">
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <div class="banner-img-wrap">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************** */}

      <section class="app-features-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://img.icons8.com/ios-filled/344/charity-box.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Donate</h4>
                <div class="content">
                  <p>
                    The problem is not actual number of calories we are 
                    producing ,we have food waste issues.
                     Save Food , Donate Food
                    
                    
                  </p>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/search.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Search</h4>
                <div class="content">
                  <p>
                    Search for food donors. You can get waste food 
                    which are donated by restuarants and other similar
                    donors.
                    
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
