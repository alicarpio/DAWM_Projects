import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Customer from "../components/Customer";


const HomeScreen = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await fetch('http://localhost:5000/customers/findAll/json')
            const getdata = await res.json();
            setCustomers(getdata);
        }
        fetchCustomers()

    }, []);

    return (
        <>
            <h1>Customer Data</h1>
            <Row>
                {customers.map((custom) =>(
                    <Col key={custom.customerNumber} sm={12} md={0} lg={0} xl={3}>
                        <Customer customer={custom}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen