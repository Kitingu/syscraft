import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
// import { useStaticQuery, graphql } from "gatsby"

const Product = ({ title, image }) => {
  return (
    <Container fluid>
      <h3>{title}</h3>
      <Row>
        <Col>
          {" "}
          <Image src={image} fluid></Image>
        </Col>
        <Col>
          {" "}
          <ul>
            <li>
              At SysCraft we believe, infinite possibilities exists for our
              customers, employees, partners and stakeholders, if we come
              together.{" "}
            </li>

            <li>
              Vision: To create infinite possibilities and growth opportunities
              for its customers, employees, partners and stakeholders.
            </li>
            <li>
              {" "}
              Mission: SysCraft is creating an infinite possibilities for its:
              <li className="list-unstyled">
                {" "}
                Customers – By bringing the right solution, to unleash growth{" "}
              </li>
              <li>
                {" "}
                possibilities Employees – By giving the right platform, to
                unleash{" "}
              </li>
              <li>
                {" "}
                skill possibilities Partners – By bringing the right customers,
                to unleash solution possibilities Stakeholders – By bringing the
                right team, to create infinite possibilities{" "}
              </li>
            </li>
          </ul>{" "}
        </Col>
      </Row>
    </Container>
  )
}
export default Product
