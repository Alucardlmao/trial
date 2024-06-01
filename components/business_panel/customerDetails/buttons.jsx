'use client';
import React from 'react';
import Search from './search';
import Filter from './filter';
import Download from './download';
import Table from '@/components/common/Table';
const Button = () => {
    const tableHeaderData = [
        {
            label: 'Name',
            value: 'name',
        },
        {
            label: 'Email',
            value: 'email',
        },
        {
            label: 'ContactNo',
            value: 'contactNo',
        },
        {
            label: 'ProductID',
            value: 'productID',
        },
        {
            label: 'Amount',
            value: 'amount',
        },
        {
            label: 'CertificateUrl',
            value: 'certificateUrl',
        },
        {
            label: 'DateOfpurchase',
            value: 'dateOfPurchase',
        },

        {
            label: 'Action',
            value: 'action',
        },
    ];

    const tableBodyData = [
        {
            name: 'Frodo Baggins',
            email: 'fbaggins@mail.com',
            contactNo: '98765432',
            productID: '1234567',
            amount: '12000',
            certificateUrl: 'https://www.google.com',
            dateOfPurchase: '15-05-2023',
        },

        // More rows...
    ];
    return (
        <>
            <div className="flex justify-end py-10 px-8 gap-3">
                <Filter />
                <Download />
                <Search />
            </div>
            <Table
                tableHeaderData={tableHeaderData}
                tableBodyData={tableBodyData}
            />
        </>
    );
};

export default Button;
