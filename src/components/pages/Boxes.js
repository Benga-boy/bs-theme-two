import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

const Boxes = () => {
  return (
    <section id="boxes" className="py-5">
      <Container>
        <Row>
          <Col md="3">
            <Card className="text-center border-primary mb-resp">
              <CardBody>
                <CardTitle tag="h3" className="text-primary">Be Better</CardTitle>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center bg-primary mb-resp">
              <CardBody>
                <CardTitle tag="h3" className="text-light">Be Smarter</CardTitle>
                <CardText className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center border-primary mb-resp">
              <CardBody>
                <CardTitle tag="h3" className="text-primary">Be Faster</CardTitle>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center bg-primary">
              <CardBody>
                <CardTitle tag="h3" className="text-light">Be Stronger</CardTitle>
                <CardText className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Boxes
