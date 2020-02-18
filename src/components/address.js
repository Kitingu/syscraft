import React from "react"
import { Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import MyLocationIcon from "@material-ui/icons/MyLocation"


const Address = () => (
  <Row className="Address m-auto">
    <Col><img src="/syscraft.png" /> </Col>
<Col sm>< MailOutlineIcon/ >{' '}Info@syscraft.co.ke</Col>
    <Col sm><MyLocationIcon/>{' '}Procmura Centre, Sports Road, Westlands</Col>
<Col sm><PhoneIcon/>{' '}+254715357867</Col>
  </Row>
)

export default Address
