'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function BusinessHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 pr-[59px] px-5  text-[#101010] bg-[#FFFFFF] border border-[#E8E8E8] h-[74px]">
            <h1 className="text-3xl leading-[40.68px] font-semibold">
                Profile
            </h1>
            <div className="relative">
                <button
                    className="focus:outline-none flex gap-2 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="h-9 w-9 rounded-full overflow-hidden">
                        <Image
                            src={'/images/founders/ansh-detail.png'}
                            alt="profile"
                            height={35}
                            width={35}
                            sizes={'100vw'}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                        </svg>
                    </div>
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <ul className="py-1">
                            <li>
                                <a
                                    href="/profile"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/settings"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/logout"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
