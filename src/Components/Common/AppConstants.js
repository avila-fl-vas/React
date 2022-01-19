export const VARIANT = {
    PRIMARY: 'primary',
    DARK: 'dark',
    LIGHT: 'LIGHT'
 };

 export const VARIANT_TEXT = {
    DARK: 'dark',
    LIGHT: 'white'
 };

 export const PAYMENT_STATUS_FILTERS = {
    DEFAULT: {value: '-1', text: 'Select Status'},
    APPROVED: {value: 'A', text: 'Approved'},
    CANCELLED: {value: 'C', text: 'Cancelled'},
    PENDING: {value: 'P', text: 'Pending Approval'}
 };

 export const LABEL_FILTER_PAYMENT_STATUS = 'Filter by Status:';

 export const GetPaymentsURL = 'http://localhost:3000/api/payments';

 export const LABEL_PaymentItems = 'Payment Items';
 export const LABEL_LoadMoreButton = 'Load More Payments';
 export const LABEL_NoPayementData = 'No Payement data was found.';

 export const PAYMENT_TABLE_HEADERS_ = [ "#", "Amount", "Currency", "Date", "Status", "Type", "From Account", "To Account" ];
 export const PAYMENT_TABLE_HEADERS = {
   SNO: "#",
   AMOUNT: "Amount",
   CURRENCY:"Currency",
   DATE:"Date",
   Status:"Status",
   TYPE:"Type",
   FROM:"From Account",
   TO:"To Account"
};

export const LABLES_AccountMeta = {
   NAME: "Account Name: ",
   NUMBER: "Account Number: ",
   SORTCODE: "Sort Code: "
}