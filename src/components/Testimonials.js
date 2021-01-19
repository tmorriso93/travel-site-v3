import React from 'react';
import '../App.css';
import './Testimonials.css'
import {Card, CardDeck, Col, Container, Media, Row } from 'react-bootstrap'

import './HeroSection.css';

function Testimonials() {
  return (
    <div className='cards'>

      <Container className="container">

      <Row>
        <Col md={6} lg={5}>
     <Media className="testimonials-info">
     <i class='far fa-check-circle'></i> 
    <Media.Body>
      <h5>Kim Porter</h5>
      <p>
      "Great prices, I can't wait to book my next trip!
      </p>
    </Media.Body>
  </Media>
  </Col>

    <Col md={6} lg={5}>
  <Media>
  <i class='far fa-check-circle'></i> 
    <Media.Body>
      <h5>Jordan Michaels</h5>
      <p>
      "This was the best Trip i've ever had"
      </p>
    </Media.Body>
    </Media>
    </Col>
    </Row>


    
<CardDeck>
      <Row>
       <Col lg={6}>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src='images/img-11.jpg' />
     
       </Card>
       </Col>

       <Col lg={4}>
       <Card style={{ width: '18rem'}}>
       <Card.Img variant="top" src='images/img-12.jpg' />
      </Card>
      </Col>
      </Row>
      </CardDeck>
</Container>



    </div>
  );
}

export default Testimonials;
