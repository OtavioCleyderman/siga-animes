import React from 'react';

import {Carousel} from 'react-bootstrap'
import ImageCarousel from '../../assets/caurosel1.png'


import { Container } from './styles';

function CarouselPages() {
  return (
    <Container>
        <Carousel  >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={ImageCarousel}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={ImageCarousel}
              alt="Second slide"
              
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={ImageCarousel}
              alt="Third slide"
              
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Container>

  );
}

export default CarouselPages;