import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';

const Banner = ({ bannerRef, isDecarbon = false, buttons }) => {
    const stylesBg = {
        height: '790.67px',
        width: ' 100%',
        position: 'absolute',
        top: '0',
        zIndex: '-1',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `radial-gradient(78.98% 50% at 50% 50%, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.55) 100%),url("../../public/videos/${isDecarbon ? 'Deacrbonization hero.mp4' : 'ESG Page hero.mp4'}");`,
    };
    return (
        <section className="banner-container overflow-hidden relative">
            <div className="business_bg" />
            <div className="h-[790.67px] w-full  absolute -z-10">
                <video
                    type="video/mp4"
                    src={`/videos/${isDecarbon ? 'Deacrbonization_hero.mp4' : 'ESG_Page_hero.mp4'}`}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="h-[790.67px] object-cover object-center w-full"
                />
            </div>

            <div className="flex items-center justify-center h-full bg-400">
                {isDecarbon ? (
                    <span className="sm:w-3/4 md:w-[65%]  text-white text-center">
                        <h1 className="font-bold md:text-[3.25rem] md:leading-[rem] text-[38px] leading-[2.25rem]">
                            SOLUTIONS FOR BUSINESS
                        </h1>
                        <p className="font-medium md:text-2xl text-[20px] leading-[1.3rem] mt-6">
                            Access a suite of carbon credit solutions and
                            decarbonisation strategies, enabling your business
                            to pioneer comprehensive sustainability initiatives
                        </p>
                    </span>
                ) : (
                    <span className="sm:w-3/4 md:w-2/3  text-white text-center">
                        <h1 className="font-bold md:text-[2.75rem] md:leading-[3.72rem] text-[38px] leading-[2.25rem]">
                            ESG & CIRCULAR ECONOMY SOLUTIONS
                        </h1>
                        <p className="font-medium md:text-[1.25rem] md:leading-[1.659rem] text-[20px] leading-[1.3rem] mt-6">
                            Forge Your Path to Sustainability with Comprehensive
                            ESG Strategies and Green Innovation
                        </p>
                    </span>
                )}
            </div>
            <div
                className="fixed top-1/2 right-0  lg:mr-8 space-y-5 text-[#2A3C5B] font-bold text-[1rem] leading-[1.3rem] hidden lg:block w-36 z-50"
                style={{ transform: 'translate(0px, -50px)' }}
            >
                {buttons?.map((button) => (
                    <Link
                        href={button?.href}
                        key={button?.label}
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] py-[10px] rounded-[40px] w-full block nav-link"
                    >
                        {button?.label}
                    </Link>
                ))}
            </div>
            <span ref={bannerRef} />
        </section>
    );
};

export default Banner;
