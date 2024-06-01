'use client';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RootLayout = ({ children }) => {
    const [cookie] = useCookies(['user']);
    const router = useRouter();

    useEffect(() => {
        if (cookie?.user?.token) {
            router.push('/business/profile');
        } else {
            router.push('/');
        }
        // router.push('/business/profile');
    }, [cookie, router]);

    return <main>{children}</main>;
};

export default RootLayout;
