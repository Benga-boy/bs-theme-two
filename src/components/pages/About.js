import React, { useState } from 'react'
import { Card, CardHeader, Col, Container, Row, Collapse, CardBody } from 'reactstrap'

const About = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)


  const toggle = () => setIsOpen1(!isOpen1)
  const toggle2 = () => setIsOpen2(!isOpen2)
  const toggle3 = () => setIsOpen3(!isOpen3)

  return (
    <section id="about" className="py-5 text-center bg-light">
      <Container>
        <Row>
          <Col>
            <div className="info-header mb-5">
              <h1 className="text-primary pb-3">
              Why This Book?
              </h1>
              <p className="lead pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni doloremque repellendus animi corrupti dignissimos!</p>
            </div>
            <div id="accordion">
              <Card>
                <CardHeader onClick={toggle}>
                  <h5 className="mb-0">
                    <Collapse isOpen={true}>
                      <i className="fas fa-arrow-circle-down"></i> Get Inspired
                    </Collapse>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen1} className="show">
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit fugit iste! Ducimus qui perferendis earum, in ut sunt, quam nemo itaque ipsam fugit quis modi dolores id repellat saepe a fuga. Sit deserunt, porro quos odio eaque molestiae autem repellat id qui, provident ipsam dicta delectus quasi, animi recusandae?
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader onClick={toggle2}>
                  <h5 className="mb-0">
                    <Collapse isOpen={true}>
                      <i className="fas fa-arrow-circle-down"></i> Gain The Knowledge
                    </Collapse>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen2}>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit fugit iste! Ducimus qui perferendis earum, in ut sunt, quam nemo itaque ipsam fugit quis modi dolores id repellat saepe a fuga. Sit deserunt, porro quos odio eaque molestiae autem repellat id qui, provident ipsam dicta delectus quasi, animi recusandae?
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader onClick={toggle3}>
                  <h5 className="mb-0">
                    <Collapse isOpen={true}>
                      <i className="fas fa-arrow-circle-down"></i> Open Your Mind
                    </Collapse>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen3}>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit fugit iste! Ducimus qui perferendis earum, in ut sunt, quam nemo itaque ipsam fugit quis modi dolores id repellat saepe a fuga. Sit deserunt, porro quos odio eaque molestiae autem repellat id qui, provident ipsam dicta delectus quasi, animi recusandae?
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
