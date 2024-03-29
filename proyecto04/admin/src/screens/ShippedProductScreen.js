import React, {useEffect, useState} from "react";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {useParams} from "react-router-dom";
import ShippedProductInfo from "../components/ShippedProductInfo";

const ShippedProductScreen = () => {
    const [sales, setSales] = useState([])
    const params = useParams()
    const customerNumber = params.customerNumber;
    let total = 0;

    useEffect(() => {
        const fetchSales = async () => {
            const res = await fetch(`http://localhost:3080/sales/shippedProducts/${customerNumber}`)
            const getdata = await res.json();
            setSales(getdata)
            console.log(getdata)
        }
        fetchSales()
    }, []);

    console.log(sales)
    {sales.map((sale) =>(total+= (sale.quantityOrdered*sale.quantityOrdered)))}

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
                    <tr>
                        <td className='secondary'>Total</td>
                        <td colSpan={4}></td>
                        <td><MDBBadge color='primary' pill>
                            ${total}
                        </MDBBadge></td>
                    </tr>

                </MDBTableBody>
            </MDBTable>
        </>
    )
}

export default ShippedProductScreen