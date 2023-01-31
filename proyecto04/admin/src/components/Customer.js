import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Customer = ({customer}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/customer/${customer.customerNumber}`}>
                <Card.Header>{customer.customerName}</Card.Header>
            </Link>
            <Card.Body>
                <Card.Title as='div'>Address: {customer.addressLine1}</Card.Title>
                <Card.Text as='h4'>Postal Code: {customer.postalCode}</Card.Text>

                <Card.Text as='h4'>Country: {customer.country}</Card.Text>
                <Card.Text as='h4'>City: {customer.city}</Card.Text>
                <Card.Text as='h4'>Phone: {customer.phone}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Customer