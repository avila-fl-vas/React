import React from "react";
import { PAYMENT_STATUS_FILTERS, LABEL_FILTER_PAYMENT_STATUS } from '../../Common/AppConstants'
import './PaymentStatusFilter.css';

const PaymentStatusFilter = (props) => {
    const { DEFAULT, APPROVED, CANCELLED, PENDING } = PAYMENT_STATUS_FILTERS;

    return (
        <div className="paymentStatusFilter">
            <label className="filterLabel">{LABEL_FILTER_PAYMENT_STATUS}</label>
            <select className="filterSelect" onChange={props.onFilterChange}>
                <option value={DEFAULT.value}>{DEFAULT.text}</option>
                <option value={APPROVED.value} >{APPROVED.text}</option >
                <option value={CANCELLED.value}>{CANCELLED.text}</option>
                <option value={PENDING.value}>{PENDING.text}</option>
            </select >
        </div>
    );
}
export default PaymentStatusFilter;
