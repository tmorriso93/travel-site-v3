import React from 'react';
import './Badges.css'
import {Container, Row, Col} from 'react-bootstrap'


function Badges() {
    return (
        <div className="container">
             
        <Container>
 
        <Row className="row-items">
            <Col md={10}>
        <h1 className="title-b">Why Choose Us?</h1>
        </Col>
         <Col  md={3}>
         <i class="fas fa-globe-americas"></i>
            <p>
                Lots of Destinations to choose from
            </p>
         </Col>
         <Col md={3}>
         <i class="fas fa-plane"></i>
             <p>
                Over 100+ Trips Booked last Year
             </p>
         </Col>
         <Col md={3}>
         <i class="fas fa-clock"></i>
            <p>
                Fast Support within 24 Hours
            </p>
         </Col>
         <Col md={3}>
         <i class="fas fa-credit-card"></i>
            <p>
                We offer teh best prices
            </p>
         </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Badges
