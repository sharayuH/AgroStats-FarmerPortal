import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./../../images/HomePage/Carousel1.jpeg";
import img2 from "./../../images/HomePage/Carousel2.jpeg";
import img3 from "./../../images/HomePage/Carousel3.jpeg";
class HomePage extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="home-content">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3 style={{ fontWeight: "bold" ,fontFamily: "'Balsamiq Sans', cursive"}}> MSP</h3>
                <p
                  style={{
                    fontSize: "1.3em",
                    fontFamily: "'Balsamiq Sans', cursive"
                  }}
                >
                  Get the current Minimum Support Price (MSP) rate
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={img2} alt="Second slide" />

              <Carousel.Caption>
                <h3 style={{ fontWeight: "bold",fontFamily: "'Balsamiq Sans', cursive" }}>News and Technologies</h3>
                <p
                  style={{
                    fontSize: "1.4em",
                    fontFamily: "'Balsamiq Sans', cursive"
                  }}
                >
                  Get the current feeds for latest farming equipments and
                  technologies to quickly maximize your yield.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={img3} alt="Third slide" />

              <Carousel.Caption>
                <h3 style={{ fontWeight: "bold" ,color:"whitesmoke",fontFamily: "'Balsamiq Sans', cursive"}}>Crop Pattern Suggestion</h3>
                <p
                  style={{
                    fontSize: "1.4em",
                    fontFamily: "'Balsamiq Sans', cursive",
                    color:"whitesmoke"
                  }}
                >
                  Sow the correct crop at correct season!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default HomePage;
