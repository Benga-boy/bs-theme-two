import React from 'react'
import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { images } from '../../images/export'

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <Row>
          <Col lg="9">
            <h3>Get in Touch</h3>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis?</p>
            <Form>
              <InputGroup size="lg" className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fas fa-user"></i></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Name" type="text" />
              </InputGroup>
              <InputGroup size="lg" className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fas fa-envelope-open"></i></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Email" type="text" />
              </InputGroup>
              <InputGroup size="lg" className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fas fa-pencil-alt"></i></InputGroupText>
                </InputGroupAddon>
                <textarea className="form-control" placeholder="Message" rows="5"></textarea>
              </InputGroup>
              <Button color="primary" block size="lg">Submit</Button>
            </Form>
          </Col>
          <Col lg="3" className="align-self-center">
            <img src={images[0].value.default} alt="Mizuze" className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
