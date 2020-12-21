import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { images } from '../../images/export'

const Footer = () => {
  return (
    <footer id="main-footer" className="py-3 bg-primary text-white">
      <Container>
        <Row className="text-center">
          <Col md="8" className="m-auto">
            <img className="align-self-end" src={images[0].value.default} height="80" width="80" alt="Mizuxe Footer Logo"/>
          </Col>
          <Col md="4" className="ml-auto">
            <p className="lead">Copyright &copy; <span>{new Date().getFullYear()}</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
