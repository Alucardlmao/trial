import React from 'react';

const PlanDetails = () => {
    return (
        <div className="pr-[59px] mb-16 mx-5 bg-white shadow-md rounded-xl flex ">
            <div className="py-6 px-14 text-[20px] font-semibold grid grid-row-2 gap-7 items-center text-[#333333]">
                <label>
                    Plan Name
                    <br />
                    <input
                        type="text"
                        placeholder="Plan Name"
                        className="px-5"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            width: '552px',
                            height: '54px',
                        }}
                    />
                </label>

                <label>
                    Total Calls provided
                    <br />
                    <input
                        type="text"
                        placeholder="Total Calls"
                        className="px-5"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            width: '552px',
                            height: '54px',
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default PlanDetails;
