import React, {useEffect, useState} from "react";
import {MDBBadge, MDBTable, MDBTableBody, MDBTableHead} from 'mdb-react-ui-kit';
import {useParams} from "react-router-dom";
import AllProductsInfo from "../components/AllProductsInfo";

const AllProductsScreen = () => {
    const [allSales, setAllSales] = useState([])
    const params = useParams();
    const customerNumber = params.customerNumber
    console.log(customerNumber)
    let total = 0;

    useEffect(() => {
        const fetchAllSales = async () => {
            const res = await fetch(`http://localhost:3080/sales/allProducts/${customerNumber}/json`)
            const getdata = await res.json();
            setAllSales(getdata);
        }
        fetchAllSales()
    }, []);
    console.log(allSales, 'outside')

    allSales.map((sale) => (total += (sale.quantityOrdered * sale.quantityOrdered)))


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
                    {allSales.map((sale) => (
                        <AllProductsInfo sale={sale}/>
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

export default AllProductsScreen