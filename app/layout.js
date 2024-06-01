import { Darker_Grotesque } from 'next/font/google';
import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Script from 'next/script';
import StoreProvider from '../redux/StoreProvide';
import LoginModal from '@/components/LoginModal/page';
import CookieProviders from '@/components/cookieProviders';

const inter = Darker_Grotesque({ subsets: ['latin'] });

export const metadata = {
    title: 'Sustainology',
    description:
        'Our company is at the forefront of blockchain technology and committed to reducing carbon emissions. We have developed an innovative proprietary solution that combines carbon sequestration and blockchain integration systems to create a carbon bank ecosystem.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="sample, meta, tag, HTML"></meta>
                <meta name="author" content="Your Name"></meta>
            </Head>
            <body className={inter.className}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    theme="light"
                />
                <CookieProviders>
                    <StoreProvider>
                        <>
                            {children}
                            <LoginModal />
                        </>
                    </StoreProvider>
                </CookieProviders>
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-8PRQ1XQMTZ`}
                />
                <Script
                    id="google-analytics-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-8PRQ1XQMTZ');
                    `,
                    }}
                />

                <Script
                    id="microsoft-clarity-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "lgk488hyz2");
                `,
                    }}
                />
            </body>
        </html>
    );
}
