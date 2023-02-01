import React, {useEffect, useState} from "react";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {useParams} from "react-router-dom";
import ShippedProductInfo from "../components/ShippedProductInfo";

const ShippedProductScreen = ({match}) => {
    const [sales, setSales] = useState([])
    const params = useParams()
    const customerNumber = params.customerNumber;

    useEffect(() => {
        const fetchSales = async () => {
            const res = await fetch(`http://localhost:3080/sales/shippedProducts/${customerNumber}`)
            const getdata = await res.json();
            setSales(getdata);
            console.log('hey inside', (getdata))
        }
        fetchSales()
    }, []);

    return (
        <>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Order Date</th>
                        <th scope='col'>Product Code</th>
                        <th scope='col'>Quantity Ordered</th>
                        <th scope='col'>Price Each</th>
                        <th scope='col'>Status</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {sales.map((sale) =>(
                            <ShippedProductInfo sale={sale}/>
                    ))}

                </MDBTableBody>
            </MDBTable>
        </>
    )
}

export default ShippedProductScreen