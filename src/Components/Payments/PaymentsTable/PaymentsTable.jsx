import React from 'react';
import { VARIANT } from '../../Common/AppConstants';
import { Table } from 'react-bootstrap';
import { PAYMENT_TABLE_HEADERS, LABLES_AccountMeta } from '../../Common/AppConstants';

import './PaymentsTable.css';

const PaymentsTable = ({ paymentItems }) => {
    return (
        <Table striped bordered hover variant={VARIANT.DARK}>
            <thead>
                <tr>
                    <th>{PAYMENT_TABLE_HEADERS.SNO}</th>
                    <th>{PAYMENT_TABLE_HEADERS.AMOUNT}</th>
                    <th>{PAYMENT_TABLE_HEADERS.CURRENCY}</th>
                    <th>{PAYMENT_TABLE_HEADERS.DATE}</th>
                    <th>{PAYMENT_TABLE_HEADERS.Status}</th>
                    <th>{PAYMENT_TABLE_HEADERS.ty}</th>
                    <th>{PAYMENT_TABLE_HEADERS.FROM}</th>
                    <th>{PAYMENT_TABLE_HEADERS.TO}</th>
                </tr>
            </thead>
            <tbody>
                {paymentItems.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.paymentAmount}</td>
                        <td>{item.paymentCurrency}</td>
                        <td>{item.paymentDate}</td>
                        <td>{item.paymentStatus}</td>
                        <td>{item.paymentType}</td>
                        <td>
                            <ul className='list'>
                                <li>{LABLES_AccountMeta.NAME + item.fromAccount.accountName}</li>
                                <li>{LABLES_AccountMeta.NUMBER + item.fromAccount.accountNumber}</li>
                                <li>{LABLES_AccountMeta.SORTCODE + item.fromAccount.sortCode}</li>
                            </ul>
                        </td>
                        <td>
                            <ul className='list'>
                                <li>{LABLES_AccountMeta.NAME + item.toAccaunt.accountName}</li>
                                <li>{LABLES_AccountMeta.NUMBER + item.toAccaunt.accountNumber}</li>
                                <li>{LABLES_AccountMeta.SORTCODE + item.toAccaunt.sortCode}</li>
                            </ul>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>);
}

export default PaymentsTable;