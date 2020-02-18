import React from "react"
import { Card,Container, CardDeck } from "react-bootstrap"



const Services = () => {
  const services = [
    {
      image: "/services.jpg",
      title: "Services",
      details:
        "Services to complement your digital transformation journey from managing enterprise wide content, processes, security and customer services.",
    },
    {
      image: "/software.jpg",
      title: "Software",
      details:
        "A solution that fosters innovation within your organization. Easy to use and accessible anytime, anywhere.",
    },
    {
      image: "/hardware.jpg",
      title: "Hardware",
      details:
        "Supporting mission critical servers, storage and networking equipment, we’re known for inspired consultation and truly customized solutions.",
    },
  ]
  return (
    <Container>
      <CardDeck className="mt-4 m-auto">
        {services.map(service => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={service.image} variant="top" />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.details}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  )
}

export default Services
