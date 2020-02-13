import React from "react"
import { Carousel } from "react-bootstrap"
const Slider = () => {
  return (
    <Carousel height="400px">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?cs=srgb&dl=abstract-art-blur-bright-373543.jpg&fm=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?cs=srgb&dl=men-working-at-night-256219.jpg&fm=jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?cs=srgb&dl=closeup-photo-of-black-and-blue-keyboard-1194713.jpg&fm=jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
