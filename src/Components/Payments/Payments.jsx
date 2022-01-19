import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaymentList from './PaymentList/PaymentList';
import { Card } from 'react-bootstrap';
import Button from '../Common/Button/Button';
import { VARIANT, VARIANT_TEXT, GetPaymentsURL, LABEL_PaymentItems, LABEL_LoadMoreButton } from '../Common/AppConstants';
import './Payments.css';

const Payments = () => {

    const [payments, updatePayments] = useState([]);
    const [hasMoreData, updateHasMoreData] = useState(false);
    const [nextPageIndex, updateNextPageIndex] = useState('');

    const getPayementsData = () => {
        let url = nextPageIndex.length > 0 ? `${GetPaymentsURL}?${nextPageIndex}` : GetPaymentsURL;
        axios.get(url)
            .then(
                ({ data: { results, metaDatal: { hasMoreElements, nextPageIndex } } }) => {
                    updatePayments([...payments, ...results]);
                    updateHasMoreData(hasMoreElements);
                    updateNextPageIndex(nextPageIndex.trim());
                })
            .catch(err => {
                console.log(err);
                throw new Error(err);
            });
    }

    //Initial data load
    useEffect(() => {
        getPayementsData();

    }, []);

    //More data loads
    const loadMoreData = () => {
        getPayementsData();
    }

    return (<>
        <Card bg={VARIANT.LIGHT} text={VARIANT_TEXT.DARK}>
            <Card.Header className="text-center"><h2>{LABEL_PaymentItems}</h2></Card.Header>
            <Card.Body>
                {hasMoreData && nextPageIndex.length > 0 &&
                    <Button
                        variant={VARIANT.DARK}
                        clickHandler={loadMoreData}
                    >
                        {LABEL_LoadMoreButton}
                    </Button>
                }
                <PaymentList paymentItems={payments} />
            </Card.Body>
        </Card>
    </>);
}


export default Payments;