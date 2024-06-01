import React from 'react';
import { FiDownload } from 'react-icons/fi';
const Download = () => {
    return (
        <div className="">
            <button
                className="flex justify-center items-center w-[40px] h-[40px] bg-[#2F5738]"
                style={{ border: '1px solid #2F5738', borderRadius: '8px' }}
            >
                <FiDownload className="text-[white] text-xl " />
            </button>
        </div>
    );
};
export default Download;
