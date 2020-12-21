import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { images } from '../../images/export'

const Showcase = () => {
  return (
    <section id="showcase" className="py-5">
      <div className="primary-overlay text-white">
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <h1 className="display-2 mt-5 pt-5">Do What You Dream Of....</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, praesentium.</p>
              <Button color="secondary" outline className="text-white" size="lg">Read More <i className="fas fa-arrow-right"></i></Button>
            </Col>
            <Col lg="6">
              <img src={images[1].value.default} alt="" className="img-fluid d-none d-lg-block"/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Showcase
