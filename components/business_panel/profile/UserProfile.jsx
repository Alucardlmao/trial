import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
    return (
        <div className="py-4 pr-[59px] px-5 bg-white rounded-xl shadow-md  w-[95%] ml-5 mt-6 flex gap-8">
            <div className="h-[123px] w-[123px] rounded-full overflow-hidden">
                <Image
                    src={'/images/founders/ansh-detail.png'}
                    alt="profile"
                    height={123}
                    width={123}
                    sizes={'100vw'}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="text-[20px] font-semibold grid grid-cols-2 gap-7 items-center">
                <label>
                    Full Name
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="px-4"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            width: '300px',

                            height: '44px',
                        }}
                    />
                </label>

                <label>
                    Email ID
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your EmailId"
                        className="px-4"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            width: '300px',
                            height: '44px',
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default UserProfile;
