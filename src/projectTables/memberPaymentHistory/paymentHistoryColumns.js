import { ColumnFilter } from '../common/ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Date',
        accessor: 'date',
        Filter: ColumnFilter
    },
    {
        Header: 'Time',
        accessor: 'time',
        Filter: ColumnFilter
    },
    {
        Header: 'Invoice No',
        accessor: 'invoiceNo',
        Filter: ColumnFilter
    },
    {
        Header: 'Total Amount',
        accessor: 'total',
        Filter: ColumnFilter
    },
    {
        Header: 'Year of Payment',
        accessor: 'yearOfPayment',
        Filter: ColumnFilter
    },
    {
        Header: 'Payment Type',
        accessor: 'type',
        Filter: ColumnFilter,
    },
    {
        Header: 'Admission Fee',
        accessor: 'admission',
        Filter: ColumnFilter,
    },
    {
        Header: 'Arrears Payment',
        accessor: 'arrears',
        Filter: ColumnFilter,
    },
    {
        Header: 'Yearly Fee',
        accessor: 'yearlyFee',
        Filter: ColumnFilter
    },
    {
        Header: 'ID Card Fee',
        accessor: 'idCardFee',
        Filter: ColumnFilter
    },
    {
        Header: 'Description',
        accessor: 'description',
        Filter: ColumnFilter
    }

]

// export const GROUPED_COLUMNS = [
    
//     {
//         Header: 'Name',
//         columns: [
//             {
//                 Header: 'Title',
//                 accessor: 'title',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Name with Initials',
//                 accessor: 'nameWinitials',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Full Name',
//                 accessor: 'fullName',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'First Name',
//                 accessor: 'commonFirst',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Last Name',
//                 accessor: 'commomLast',
//                 Filter: ColumnFilter
//             }
//         ]
//     },
//     {
//         Header: 'Gender',
//         accessor: 'gender',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'Date of Birth',
//         accessor: 'dob',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'NIC',
//         accessor: 'nic',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'Contact Information',
//         columns: [
//             {
//                 Header: 'Email',
//                 accessor: 'email',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Mobile No',
//                 accessor: 'mobileNo',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Fixed No',
//                 accessor: 'fixedNo',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Residence Address',
//                 accessor: 'resAddrs',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Permanent Address',
//                 accessor: 'perAddrs',
//                 Filter: ColumnFilter
//             }
//         ]
        
//     }
// ]