'use client';
import React from 'react';
import Filter from '../customerDetails/filter';
import Search from '../customerDetails/search';
import Table from '@/components/common/Table';

const Details = () => {
    const tableHeaderData = [
        {
            label: 'TranscationDate',
            value: 'transcationdate',
        },
        {
            label: 'Email',
            value: 'email',
        },

        {
            label: 'TranscationId',
            value: 'transcationid',
        },
        {
            label: 'ProductId',
            value: 'productid',
        },
        {
            label: 'InvoiceNo',
            value: 'invoiceno',
        },
        {
            label: 'PaymentMethod',
            value: 'paymentmethod',
        },
        {
            label: 'AmountPaid',
            value: 'amountpaid',
        },

        {
            label: 'Action',
            value: 'action',
        },
    ];

    const tableBodyData = [
        {
            transcationdate: '12-04-2024',
            email: 'fbaggins@mail.com',
            transcationid: '98765432',
            productid: '1234566',
            invoiceno: '1234567',
            paymentmethod: 'paymentmethod',
            amountpaid: '2000',
        },
    ];
    return (
        <>
            <div className="flex justify-end py-10 px-8 gap-6">
                <Filter />
                <Search />
            </div>
            <Table
                tableHeaderData={tableHeaderData}
                tableBodyData={tableBodyData}
            />
        </>
    );
};
export default Details;
