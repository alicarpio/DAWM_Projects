import React from "react";

import {MDBBadge,} from 'mdb-react-ui-kit';


const ShippedProductInfo = ({sale}) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <p className='fw-normal mb-1'>{sale.productName}</p>
            </td>
            <td>{sale.orderDate}</td>
            <td>{sale.productCode}</td>
            <td align='middle'>{sale.quantityOrdered}</td>
            <td>${sale.priceEach}</td>
            <td>
                <MDBBadge color='success' pill>
                    {sale.status}
                </MDBBadge>
            </td>
        </tr>
    )
}

export default ShippedProductInfo