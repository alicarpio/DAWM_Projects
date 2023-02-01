import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Customer = ({customer}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/customer/${customer.customerNumber}`} style={{backgroundColor:'#CACFD3'}}>
                <Card.Header style={{color:'#177B5A', fontSize:'20px', fontWeight:'bold'}}>{customer.customerName}</Card.Header>
            </Link>
            <Card.Body>
                <Card.Title><span style={{ fontWeight:'bold'}}>Address:  </span>{customer.addressLine1}</Card.Title>
                <Card.Title><span style={{ fontWeight:'bold'}}>Postal Code:  </span>{customer.postalCode}</Card.Title>
                <Card.Title><span style={{ fontWeight:'bold'}}>Country:  </span> {customer.country}</Card.Title>
                <Card.Title><span style={{ fontWeight:'bold'}}>City: </span>{customer.city}</Card.Title>
                <Card.Title><span style={{ fontWeight:'bold'}}>Phone: </span>{customer.phone}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Customer