import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { images } from '../../images/export'

const Authors = () => {
  return (
    <section id="authors" className="my-5 text-center">
      <Container>
        <Row>
          <Col>
            <div className="info-header mb-5">
              <h1 className="text-primary pb-3">Meet The Authors</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum pariatur error nemo fugit quaerat!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card className="author-card">
              <CardBody>
                <img src={images[2].value.default} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                <h3>Susan Williams</h3>
                <h5 className="text-muted">Lead Writer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis laborum numquam dolore vero iusto?</p>
                <div className="d-flex justify-content-center">
                  <div className="p-4"><a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i></a></div>
                  <div className="p-4"><a href="http://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i></a></div>
                  <div className="p-4"><a href="http://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i></a></div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="author-card">
              <CardBody>
                <img src={images[3].value.default} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                <h3>Grace Smith</h3>
                <h5 className="text-muted">Co Writer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis laborum numquam dolore vero iusto?</p>
                <div className="d-flex justify-content-center">
                  <div className="p-4"><a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i></a></div>
                  <div className="p-4"><a href="http://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i></a></div>
                  <div className="p-4"><a href="http://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i></a></div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="author-card">
              <CardBody>
                <img src={images[4].value.default} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                <h3>Andrew Davids</h3>
                <h5 className="text-muted">Editor</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis laborum numquam dolore vero iusto?</p>
                <div className="d-flex justify-content-center">
                  <div className="p-4"><a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i></a></div>
                  <div className="p-4"><a href="http://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i></a></div>
                  <div className="p-4"><a href="http://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i></a></div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="author-card">
              <CardBody>
                <img src={images[5].value.default} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                <h3>Mike Ashley</h3>
                <h5 className="text-muted">Designer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis laborum numquam dolore vero iusto?</p>
                <div className="d-flex justify-content-center">
                  <div className="p-4"><a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i></a></div>
                  <div className="p-4"><a href="http://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i></a></div>
                  <div className="p-4"><a href="http://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i></a></div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Authors
