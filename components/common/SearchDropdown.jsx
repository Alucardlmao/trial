import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchDropdown = ({ options, onChange }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        const filtered = options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredOptions(filtered);
    };

    const handleOptionClick = (option) => {
        setSearchValue(option);
        setFilteredOptions([]);
        onChange(option);
    };

    return (
        <div className="relative mt-1">
            <div className="border bg-white border-gray-300 p-2 rounded-md w-full flex justify-between items-center ">
                <input
                    type="text"
                    className="w-full outline-none font-normal text-xl leading-[1.375rem] text-[#666666]"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                <IoSearch className="text-[#666666]" />
            </div>
            {filteredOptions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 p-2 rounded-md w-full mt-1 z-10">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchDropdown;
