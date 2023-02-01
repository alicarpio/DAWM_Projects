import React from "react";

import {MDBBadge,} from 'mdb-react-ui-kit';

const AllProductsInfo = ({sale}) => {
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
                <MDBBadge
                    color={sale.status === 'Shipped' ? 'success' : sale.status === 'In Process' ? 'warning' : 'danger'}
                    pill>
                    {sale.status}
                </MDBBadge>
            </td>
        </tr>
    )
}

export default AllProductsInfo