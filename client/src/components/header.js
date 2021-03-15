import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import alogo from "../assets/me.jpg"


export default function header() {


    return (

        <div>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col background><Image src={alogo} roundedCircle size="171p" className="blogo"/></Col>
                            <Col> <h1>ALBURAQ GROUP</h1> 
                            <p>
                                Your primary source of used vehicles at wholesale prices.
                            </p>
                            </Col> 
                        </Row>
                    </Container>
                   
                   
                    {/* <p>
                        <Button variant="primary">About US</Button>
                        <Button variant="primary">Sign in</Button>
                        <Button variant="primary">Register with us</Button>
                    </p> */}
               </Jumbotron>
        </div>
    )
}
