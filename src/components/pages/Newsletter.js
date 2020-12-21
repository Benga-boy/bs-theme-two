import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md="4">
            <input type="text" className="form-control form-control-lg mb-resp" placeholder="Enter Name" />
          </Col>
          <Col md="4">
            <input type="email" className="form-control form-control-lg mb-resp" placeholder="Enter Email" />
          </Col>
          <Col md="4">
            <Button size="lg" color="primary" block>
              <i className="fas fa-envelope-open-o"></i> Subscribe
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
