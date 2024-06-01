'use client';
import Navbar from '@/components/header/Header';
// import Banner from '@/components/project-overview-components/Banner';
import React, { use, useEffect, useRef, useState } from 'react';
import '../../styles/aboutUs.css';
import AboutUsBanner from '@/components/about-us/AboutUsBanner';
import MissionVision from '@/components/about-us/MissionVision';
import OurValues from '@/components/about-us/OurValues';
import Founders from '@/components/about-us/Founders';
import FounderDetailsModal from '@/components/about-us/FounderDetailsModal';
import StrategicPartners from '@/components/about-us/StrategicPartners';
import Customer from '../../components/home/Customer';
import Image from 'next/image';
import Address from '@/components/address/page';

// import Technology from '@/components/home/Technology';
import { useFetch } from '@/hook/getDataOnLoad';
import foundersData from '../../utils/foundersData';
import founderTempData from '../../utils/foundersTemp';
import advisorData from '@/utils/advisor';
import OurTechnology from '@/components/home/OurTechnology';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import TrustedBy from '@/components/about-us/TrustedBy';
import Footer from '@/components/footer/Footer';

export default function AboutUs() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [modalData, setModalData] = useState({});
    const [keyValue, setKeyValue] = useState(0);

    const bannerRef = useRef();

    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.6);

    const { data: testimonialData } = useFetch({
        url: `/testimonial/get-all-active`,
    });

    const testimonials = testimonialData?.response;

    useEffect(() => {
        setKeyValue(1);
    }, []);
    return (
        <main className="relative overflow-x-hidden">
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            {/* <Banner bannerRef={bannerRef} /> */}
            <AboutUsBanner bannerRef={bannerRef} />
            <MissionVision sectionRefs={sectionRefs} />
            <OurValues sectionRefs={sectionRefs} />
            <Founders
                setOpenDetail={setOpenDetail}
                title={'Founders'}
                data={founderTempData}
                setModalData={setModalData}
                id="founders"
                sectionRefs={sectionRefs}
                refIndex={2}
            />
            <Founders
                setOpenDetail={() => ''}
                title={'Partners'}
                data={advisorData}
                setModalData={() => ''}
                id="advisors"
                sectionRefs={sectionRefs}
                refIndex={3}
            />
            <StrategicPartners sectionRefs={sectionRefs} />
            <div className="accreditations-section mt-16 bottom-section">
                <TrustedBy />

                <Customer testimonials={testimonials} isAbout={true} />
            </div>

            <div
                id="about-technology"
                ref={(el) => {
                    sectionRefs.current[5] = el;
                }}
            >
                <OurTechnology
                    sectionRefs={sectionRefs}
                    refIndex={5}
                    key={keyValue}
                />
            </div>

            <FounderDetailsModal
                setDetailsModal={setOpenDetail}
                detailModal={openDetail}
                modalData={modalData}
            />
            <Address />

            {/* <div className="flex justify-center py-10 ">
                <p className="text-[52px] font-bold text-[#2A3C5B]">
                    Our Offices
                </p>
            </div>
            <div className="flex justify-center mb-20 flex-wrap max-md:flex-col max-md:items-center gap-6">
                <div className=" w-[268px] h-[309px] mb-10 max-sm:mb-10  bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4] items-center">
                    <Image
                        src="/dubai.png"
                        width="268"
                        height="119"
                        className="py-4"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">Dubai</p>
                    <p className="px-4 text-[20px] leading-6 font-semibold text-[#4C4C4C]">
                        Mezzanine Floor, The Meydan Hotel, Nad AL Sheba, Dubai -
                        UAE PO Box - 182421
                    </p>
                </div>

                <div className="mb-10 w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4]  items-center">
                    <Image
                        src="/USA.png"
                        width="268"
                        height="119"
                        className="px-2"
                    ></Image>
                    <p className="px-4 py-2 text-[28px] font-bold">U.S.A</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold text-[#4C4C4C]">
                        16192 Coastal Highway, Lewes, Delaware 19958, Country Of
                        Sussex, U.S.A
                    </p>
                </div>
                <div className=" mb-10 max-sm:mb-10 w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4] items-center ">
                    <Image
                        src="/UK.png"
                        width="268"
                        height="119"
                        className="py-3"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">U.K</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold  text-[#4C4C4C]">
                        2nd Floor College House, 17 King Edwards Road, Ruislip,
                        London, U.K, HA47AE
                    </p>
                </div>
                <div className="w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4]  items-center">
                    <Image
                        src="/ind.png"
                        width="268"
                        height="119"
                        className="py-2"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">INDIA</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold text-[#4C4C4C]">
                        8th Floor, Brigade Metropolis Summit A Block. #73/1,
                        Whitefield Road, Bangalore, India
                    </p>
                </div>
            </div> */}
            <Footer />
        </main>
    );
}
