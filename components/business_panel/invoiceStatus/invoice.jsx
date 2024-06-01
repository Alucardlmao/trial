'use client';
import React from 'react';
import Filter from '../customerDetails/filter';
import Search from '../customerDetails/search';
import Table from '@/components/common/Table';

const InvoiceStatus = () => {
    const tableHeaderData = [
        {
            label: 'S.no',
            value: 'sno',
        },
        {
            label: 'Date',
            value: 'date',
        },
        {
            label: 'Invoice no',
            value: 'invoiceno',
        },
        {
            label: 'ReceiptDate',
            value: 'receiptdate',
        },
        {
            label: 'ReceiptUrl',
            value: 'receipturl',
        },
        {
            label: 'Status',
            value: 'status',
        },
        {
            label: 'InvoiceLink',
            value: 'invoicelink',
        },
    ];

    const tableBodyData = [
        {
            sno: '1',
            date: '12-04-2024',
            invoiceno: '1234567',
            receiptdate: '12-04-2024',
            receipturl: 'www.example.com',
            status: 'paid',
            invoicelink: 'www.example.com',
        },
        {
            sno: '2',
            date: '12-04-2024',
            invoiceno: '1234567',
            receiptdate: '12-04-2024',
            receipturl: 'www.example.com',
            status: 'paid',
            invoicelink: 'www.example.com',
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
export default InvoiceStatus;
