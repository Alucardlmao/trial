import { ResetTvRounded } from '@mui/icons-material';
import React, { memo, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Table = ({ tableHeaderData, tableBodyData, onIconClick }) => {
    // const [isEditOpen, setIsEditOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);

    const handleIconClick = (item, action, indexNumber) => {
        onIconClick(item, action, indexNumber);
    };
    return (
        <div className=" max-w-[97%] w-[97%]  overflow-x-auto">
            <table className="table-auto divide-y w-full ml-5  divide-gray-200 mb-10">
                <thead className="bg-[#F3F3F3]  shadow-md ">
                    <tr>
                        {tableHeaderData.map((item) => {
                            return (
                                <th
                                    key={item.label}
                                    className="px-4 py-3 text-left text-[20px] font-semibold text-[#333333] tracking-wider"
                                >
                                    {item.label}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200 overflow-x-auto text-[18px] font-medium shadow-md">
                    {tableBodyData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {tableHeaderData.map((subitem) => {
                                    if (subitem.value == 'action') {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-3 py-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleViewClick(item)
                                                    }
                                                >
                                                    View
                                                </button> */}
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleEditClick(item)
                                                    }
                                                >
                                                    Edit
                                                </button> */}
                                                    <div>
                                                        <CiEdit
                                                            className="h-[20px] w-[20px] cursor-pointer"
                                                            onClick={() =>
                                                                handleIconClick(
                                                                    item,
                                                                    'edit',
                                                                    index
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <RiDeleteBin6Line
                                                            className="h-[20px] w-[20px] cursor-pointer"
                                                            onClick={() =>
                                                                handleIconClick(
                                                                    item,
                                                                    'delete'
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleDeleteClick(item)
                                                    }
                                                >
                                                    Delete
                                                </button> */}
                                                    {/* <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                                    edit
                                                </button>
                                                <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                                    delete
                                                </button> */}
                                                </div>
                                            </td>
                                        );
                                    }
                                    return (
                                        <td
                                            key={subitem.value}
                                            className="px-4 py-3"
                                        >
                                            {item[subitem.value]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}

                    {/* More rows */}
                </tbody>
            </table>
        </div>
    );
};

export default memo(Table);
