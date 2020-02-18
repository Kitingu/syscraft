import React from "react"
import { Card, Container,CardGroup,Col } from "react-bootstrap"


const IconCards = () => {
  const cards = [
    {
      icon: "AccountBalanceIcon",
      title: "What we Do",
      details:
        "Offers solutions and services to compliment organizations digital transformation",
    },
    {
      icon: "GitHubIcon",
      title: "Our Mission",
      details:
        "Infinite possibilities exists for our customers, employees, partners and stakeholders, if we come together.",
    },
    {
      icon: "GitHubIcon",
      title: "Our Vision",
      details:
        "To create infinite possibilities and growth opportunities for its customers, employees, partners and stakeholders",
    },
  ]
  return (
    <Container>
      <CardGroup>
        {cards.map(card => (
         
            <Card style={{ width: "18rem" }} >
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.details}</Card.Text>
              </Card.Body>
            </Card>
         
        ))}
      </CardGroup>
    </Container>
  )
}

export default IconCards
