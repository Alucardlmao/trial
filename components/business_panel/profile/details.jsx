'use client';
import UserDetails from './userDetails';
import React, { useEffect, useState } from 'react';
import PlanDetails from './planDeatils';
import ChangePassword from './changePassword';
import axiosInstance from '@/utils/service';
import { toast } from 'react-toastify';
import AddUserModal from './addUser';
import { FiPlusCircle } from 'react-icons/fi';

const labels = [
    { label: 'User Details', value: 0 },
    { label: 'Plan Details', value: 1 },
    { label: 'Change Password', value: 2 },
];

const Details = () => {
    const [selectedLabel, setSelectedLabel] = useState(labels[0].value);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!isModalOpen) {
            setSelectedUser(null);
        }
    }, [isModalOpen]);

    const arr = [UserDetails, PlanDetails, ChangePassword];
    const fetchUsers = async () => {
        try {
            console.log('Fetching users...');
            const response = await axiosInstance.get(
                '/business-user/all?parentUser=664375f42c7ab6569a69a3bb'
            );
            console.log('Response received:', response);
            if (response.data) {
                console.log('Data received:', response.data);
                setUsers(response.data.response);
            } else {
                throw new Error('No data received');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            // setError('Error fetching users. Please try again later.');
            toast.error(error?.message || 'Failed');
            setLoading(false);
        }
    };
    const handleIconClick = (user, action, indexNumber) => {
        switch (action) {
            case 'edit':
                setSelectedUser(users[indexNumber]);
                setIsUpdateModalOpen(true);
                setIsModalOpen(true);
                console.log(users[indexNumber], indexNumber);

                break;
            case 'delete':
                handleDeleteClick(user);
                break;
            default:
                break;
        }
    };

    const renderContent = () => {
        switch (selectedLabel) {
            case 0:
                return (
                    <div>
                        <UserDetails
                            fetchUsers={fetchUsers}
                            users={users}
                            onIconClick={handleIconClick}
                        />
                    </div>
                );
            case 1:
                return (
                    <div>
                        <PlanDetails />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <ChangePassword />
                    </div>
                );
            default:
                return <div>Select a label to view details</div>;
        }
    };

    const addUsers = async function ({
        setSubmitting,
        resetForm,
        values,
        onClose,
        type,
    }) {
        try {
            const body = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                designation: values.designation,
                parentUser: '664375f42c7ab6569a69a3bb',
                password: values.createPassword,
            };
            let response;
            if (type == 'add') {
                response = await axiosInstance.post(
                    `/business-user/register`,
                    body
                );
            } else {
                response = await axiosInstance.put(
                    `/business-user/${values.id}`,
                    body
                );
            }

            console.log('User registered successfully:', response.data);
            resetForm();
            toast.success('User registered successfully!');
            onClose();
            fetchUsers();
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error(error?.message || 'Failed');
        } finally {
            setSubmitting(false);
        }
    };

    const updateUsers = async ({
        setSubmitting,
        resetForm,
        values,
        onClose,
    }) => {
        try {
            const body = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                designation: values.designation,
            };
            const response = await axiosInstance.put(
                `/business-user/${values.id}`,
                body
            );
            resetForm();
            toast.success('User updated successfully!');
            onClose();
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error(error?.message || 'Failed');
        } finally {
            setSubmitting(false);
        }
    };

    // const handleIconClick = (user, action) => {
    //     switch (action) {
    //         case 'edit':
    //             setSelectedUser(user);
    //             setIsUpdateModalOpen(true);
    //             break;
    //         case 'delete':
    //             handleDeleteClick(user);
    //             break;
    //         default:
    //             break;
    //     }
    // };

    const handleDeleteClick = async (user) => {
        try {
            await axiosInstance.delete(`/business-user/${user._id}`);
            toast.success('User deleted successfully!');
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user.');
        }
    };
    return (
        <>
            <div className="px-6 py-8 flex justify-between text-[20px] font-semibold text-[#808080]">
                <div className="flex gap-4  items-center  ">
                    {/* let arrayLabel1=labels.label */}
                    {/* <label>User Detail</label>
                <label>PlanDetail</label>
                <label>Change Password</label> */}

                    {/* {labels.map((item, index) => (
                    <label key={index}>{item.label}</label>
                ))} */}
                    {labels.map((item) => (
                        <label
                            key={item.value}
                            onClick={() => setSelectedLabel(item.value)}
                            className={`cursor-pointer ${
                                selectedLabel === item.value
                                    ? 'text-[#2F5738] underline'
                                    : 'text-[#808080]'
                            }`}
                            style={{
                                cursor: 'pointer',
                                color:
                                    selectedLabel === item.value
                                        ? '#2F5738'
                                        : '#808080',
                                textDecoration:
                                    selectedLabel === item.value
                                        ? 'underline'
                                        : 'none',
                                textUnderlineOffset:
                                    selectedLabel === item.value
                                        ? '8px'
                                        : 'none',
                            }}
                        >
                            {item.label}
                        </label>
                    ))}
                </div>
                <div
                    className="w-[168px] h-[44px] bg-[#2F5738] text-white flex items-center justify-center"
                    style={{ borderRadius: '8px' }}
                >
                    <button
                        className="flex items-center justify-center gap-3"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {' '}
                        {/* <Image
                            src="/plus2.png"
                            width={12}
                            height={12}
                            alt=""
                        ></Image> */}
                        <FiPlusCircle />
                        <span>Add User</span>
                    </button>
                </div>
            </div>
            <div>{renderContent()}</div>
            <AddUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addUsers}
                type={selectedUser ? 'update' : 'add'}
                // userData={selectedUser}
                selectedUsers={selectedUser}

                // submitting={submitting}
            />
            {/* {selectedUser && (
                <UpdateUserModal
                    isOpen={isUpdateModalOpen}
                    onClose={() => setIsUpdateModalOpen(false)}
                    onSubmit={updateUsers}
                    user={selectedUser}
                />
            )} */}
        </>
    );
};

export default Details;
