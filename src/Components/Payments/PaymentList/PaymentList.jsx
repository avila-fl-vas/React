import React, { useState } from 'react';
import PaymentStatusFilter from '../PaymentStatusFilter/PaymentStatusFilter';
import PaymentsTable from '../PaymentsTable/PaymentsTable';
import { LABEL_NoPayementData } from '../../Common/AppConstants';

import './PaymentList.css';

const PaymentList = (props) => {
    const defaultFiltervalue = '-1';
    const [statusFilter, setStatusFilter] = useState(defaultFiltervalue);

    const filterChangeHandler = (e) => {
        setStatusFilter(e.target.value);
    }

    let filteredPayments = props.paymentItems;
    if (statusFilter !== defaultFiltervalue)
        filteredPayments = props.paymentItems.filter((item) => item.paymentStatus.trim() === statusFilter);

    if (!filteredPayments.length)
        return <h2 className="text-center">{LABEL_NoPayementData}</h2>;

    return (
        <>
            <PaymentStatusFilter
                status={statusFilter}
                onFilterChange={filterChangeHandler}
            />
            <PaymentsTable paymentItems={filteredPayments} />
        </>);
}

export default PaymentList;

