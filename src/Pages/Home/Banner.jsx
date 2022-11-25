import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/image1-min.jpg";
import img2 from "../../assets/image2-min.jpg";
import img3 from "../../assets/image3-min.jpg";
import img4 from "../../assets/image4-min.jpg";

const Banner = () => {
    return (
      <Container className='mt-4'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
};

export default Banner;