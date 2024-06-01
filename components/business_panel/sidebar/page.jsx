'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoHomeSharp } from 'react-icons/io5';
import Link from 'next/link';
const navItems = [
    {
        name: 'Dashboard',
        id: 'dashboard',
        icon: '/Dashboard.png',
        path: '/business/profile',
    },
    {
        name: 'Customer Details',
        id: 'customerDetails',
        icon: '/customerdetails.png',
        path: '/business/customerDetails',
    },
    {
        name: 'Transcation',
        id: 'trancation',
        icon: '/transcation.png',
        path: '/business/transcation',
    },
    {
        name: 'Invoice Status',
        id: 'invoiceStatus',
        icon: '/status.png',
        path: '/business/invoiceStatus',
    },
    {
        name: 'Contact Us',
        id: 'contactUs',
        icon: '/contactus.png',
        path: '/business/contactUs',
    },
    {
        name: 'Profile',
        id: 'profile',
        icon: '/profiles.png',
        path: '/business/profile',
    },
];

const Sidebar = () => {
    const [active, setActive] = useState('dashboard');
    return (
        <div className="overflow-hidden ">
            <div className="flex items-center px-10 py-5 gap-2 mb-5 ">
                <Image
                    src="/climainvest.png"
                    alt=""
                    width={40}
                    height={41}
                ></Image>
                <h1 className="text-[28px] font-bold text-[#333333]">
                    ClimaInvest
                </h1>
            </div>
            {/* <ul>
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={` flex items-center  gap-3 text-[20px] font-bold  p-4 px-7 text-[#666666] cursor-pointer ml-3 ${
                            active === item.id
                                ? 'bg-[#2F5738] text-[#FFFFFF] rounded-lg flex items-center h-[48px] w-[70%]'
                                : ''
                        }`}
                        onClick={() => setActive(item.id)}
                    >
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={18}
                            height={18}
                        />
                        {item.name}
                    </li>
                ))}
            </ul> */}
            <ul>
                {navItems.map((item) => (
                    <li key={item.id} className="ml-3">
                        <Link href={item.path} legacyBehavior>
                            <div
                                className={`flex items-center gap-3 text-[20px] font-bold p-4 px-7 text-[#666666] cursor-pointer ${
                                    active === item.id
                                        ? 'bg-[#2F5738] text-[#FFFFFF] rounded-lg h-[48px] w-[70%]'
                                        : ''
                                }`}
                                onClick={() => setActive(item.id)}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={18}
                                    height={18}
                                    // className={
                                    //     active === item.id ? 'bg' : 'green'
                                    // }
                                />
                                {item.name}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="py-32 text-[16px] px-8 gap-3 font-semibold flex items-center">
                <Image src="/logo.png" alt="" width={40} height={39}></Image>
                <p className=" text-[#666666] leading-4">
                    {' '}
                    Powered By <br />
                    <span className="text-[black] font-bold]">
                        SUSTAINOLOGY{' '}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
