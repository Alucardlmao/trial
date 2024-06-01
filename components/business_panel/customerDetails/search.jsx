import React from 'react';
import { BiSearch } from 'react-icons/bi';
const Search = () => {
    return (
        <div className="flex items-center border rounded-full px-4 py-0">
            <input
                type="search "
                placeholder="Search"
                className="outline-none margin-0 rounded-full px-4 py-2"
            ></input>
            <BiSearch className="text-xl" />
        </div>
    );
};
export default Search;
