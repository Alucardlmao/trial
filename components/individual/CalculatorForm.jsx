import React, { useState, Fragment, useEffect } from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { MdDirectionsBus } from 'react-icons/md';
import Button from '../common/Button';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Dialog from '../common/Dialog';
import VehicleForm from './Stepform/VehicleForm';
import FlightForm from './Stepform/FlightForm';
import ElectricityForm from './Stepform/ElectricityForm';
import PublicTransportForm from './Stepform/PublicTransportForm';
import axios from 'axios';
import Success from '../common/Success'; // Import your Success component
import Failure from '../common/Failure';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

function loadScriptR(src) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
const CalculatorForm = ({
    setShowModal,
    userDetail,
    sectionRefs,
    isClickProceed,
    setIsClickProceed,
}) => {
    const [buttonState, setButtonState] = useState([
        {
            vehicle: true,
            flight: false,
            electricity: false,
            transport: false,
        },
    ]);
    const [commonState, setCommonState] = useState([]);
    const [country, setCountry] = useState('');
    const [project, setProject] = useState({});
    const [currency, setCurrency] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [commonCalcuateState, setCommonCalculateState] = useState([]);
    const [order, setOrder] = useState(null);
    const [formIndexState, setFormIndexState] = useState([0]);
    const params = useSearchParams();

    // console.log(commonState, 'commonState');
    useEffect(() => {
        if (isClickProceed) {
            handelProceedClick();
        }
    }, [isClickProceed]);

    const handelProceedClick = () => {
        if (country === 'India') {
            handelForSubmit();
        } else {
            handlePaymentModalOpen();
        }
    };
    useEffect(() => {
        if (params.get('success') == 'true') {
            // console.log("true ...")
            setShowSuccessModal(true);
            setIsClickProceed(false);
        } else if (params.get('success') == 'false') {
            // console.log("false ...")

            setShowFailureModal(true);
            setIsClickProceed(false);
        }
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                if (response.data && response.data.country_name === 'India') {
                    setCountry('India');
                }
            } catch (error) {
                toast.error(' Something went wrong. Please try again later');
                //  console.error('Error fetching location data:', error);
            }
        };
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/project-pricing?type=direct'
                );

                setProject(response.data.response);
            } catch (error) {
                // console.error('Error fetching project data:', error)
                toast.error(' Something went wrong. Please try again later');
            }
        };

        const fetchCurrencyData = async () => {
            try {
                let data = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/order/converter'
                );
                setCurrency(data.data.response);
            } catch (error) {
                // console.error('Error fetching location data:', error);
                toast.error(' Something went wrong. Please try again later');
            }
        };

        fetchCurrencyData();
        fetchCountryData();
        fetchProjectData();
    }, []);
    const calculatePrice = (credits) => {
        // console.log(project, credits * project.pricePerCredit, 'VVVV');
        if (credits !== '') {
            let price =
                country == 'India'
                    ? (credits * project.pricePerCredit) / currency
                    : credits * project.pricePerCredit;
            return Math.floor(price);
        } else {
            return 0;
        }
    };

    const handleVehicleDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'vehicle' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    modelId: data.vehicleModel,

                    vehicle: data.vehicleMake,
                    distance: data.distance,
                    distanceUnit: data.distanceUnit,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'vehicle',
                    id: data.id,
                    modelId: data.vehicleModel,
                    vehicle: data.vehicleMake,
                    distance: data.distance,
                    distanceUnit: data.distanceUnit,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };
    const handleElectricityDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'electricity' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    country: data.country,
                    consumption: data.consumption,
                    renewable: data.renewable,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'electricity',
                    id: data.id,
                    country: data.country,
                    consumption: data.consumption,
                    renewable: data.renewable,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };

    // const AllForms = [
    //     <VehicleForm
    //         key="VehicleForm"
    //         handleVehicleDataChange={handleVehicleDataChange}
    //         commonState={commonState[formIndexState]}
    //     />,
    //     <FlightForm key="FlightForm" />,
    //     <ElectricityForm key="ElectricityForm" />,
    //     <PublicTransportForm key="PublicTransportForm" />,
    // ];

    const handelToggleButtonState = (name, formIndex, formValue, id) => {
        setButtonState((preVal) => {
            for (const key in preVal[formIndex]) {
                preVal[formIndex][key] = false;
            }
            preVal[formIndex][name] = true;
            return [...preVal];
        });

        setFormIndexState((preVal) => {
            preVal[formIndex] = formValue;
            return [...preVal];
        });
        // console.log('Indise tggle', formIndex, '%%%', formValue);
        setCommonState((preVal) => {
            return preVal.filter((data, i) => {
                // console.log(data, i, formValue, '333342', formIndex);
                return data.index !== formIndex;
            });
        });
    };

    const renderCurrentForm = (formIndex, index) => {
        // console.log(formIndex, 'formIndex234', index);
        switch (formIndex) {
            case 0:
                return (
                    <VehicleForm
                        key="VehicleForm"
                        handleVehicleDataChange={handleVehicleDataChange}
                    />
                );
            case 1:
                return <FlightForm key="FlightForm" />;
            case 2:
                return (
                    <ElectricityForm
                        key="ElectricityForm"
                        handleElectricityDataChange={
                            handleElectricityDataChange
                        }
                    />
                );
            case 3:
                return <PublicTransportForm key="PublicTransportForm" />;
            default:
                return <VehicleForm key="VehicleForm" />;
        }
    };

    const handelAddForm = () => {
        setFormIndexState((preVal) => {
            return [...preVal, 0];
        });

        setButtonState((preVal) => {
            return [
                ...preVal,
                {
                    vehicle: true,
                    flight: false,
                    electricity: false,
                    transport: false,
                },
            ];
        });
    };
    const handleRemove = (id) => {
        setCommonCalculateState(
            commonCalcuateState.filter((item) => item.id !== id)
        );
    };

    const handleCalulate = async () => {
        const authData = await axios.post(
            `${process.env.NEXT_PUBLIC_CALCULATOR_API}auth/login`,
            {
                email: 'shubham.k@gortnm.in',
                password: 'Dosa@1234',
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        // console.log(authData, 'authData');
        let token = authData.data.data?.accessToken;
        if (token) {
            if (commonState.length !== 0) {
                commonState.map((data) => {
                    if (data.type === 'vehicle') {
                        try {
                            axios
                                .post(
                                    `${process.env.NEXT_PUBLIC_CALCULATOR_API}v1/individual-estimates/driving`,
                                    {
                                        distance: {
                                            value: data.distance,
                                            unit: data.distanceUnit,
                                        },
                                        vehicle_model_id: data.modelId,
                                    },
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            Authorization: `Bearer ${token}`,
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                )
                                .then((response) => {
                                    // console.log('Success:', response.data);
                                    let responseData =
                                        response.data.data.estimate.driving[
                                            response.data.data.estimate.driving
                                                .length - 1
                                        ];
                                    // console.log(responseData, 'response');
                                    let price = calculatePrice(
                                        responseData.response.co2
                                    );
                                    let obj = {
                                        ...data,
                                        credit: responseData.response.co2,
                                        scope: responseData.response.scope,
                                        factor: responseData.response.factor,
                                        price: price,
                                    };
                                    setCommonCalculateState((preVal) => {
                                        const existingItemIndex =
                                            preVal.findIndex(
                                                (item) => item.id === obj.id
                                            );

                                        if (existingItemIndex !== -1) {
                                            // If an item with the same id exists, update it
                                            const updatedItems = [...preVal];
                                            updatedItems[existingItemIndex] =
                                                obj;
                                            return updatedItems;
                                        } else {
                                            // If no item with the same id exists, add the new item
                                            return [...preVal, obj];
                                        }
                                    });
                                })
                                .catch((error) => {
                                    toast.error(
                                        ' Something went wrong. Please try again later'
                                    );
                                });
                        } catch (error) {
                            toast.error(
                                ' Something went wrong. Please try again later'
                            );
                        }
                    } else if (data.type === 'electricity') {
                        try {
                            axios
                                .post(
                                    `${process.env.NEXT_PUBLIC_CALCULATOR_API}v1/individual-estimates/electricity`,
                                    {
                                        volume: {
                                            value: data.consumption,
                                            unit: 'kWh',
                                        },
                                        country: data.country,
                                        hasRenewable: data.renewable,
                                    },
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            Authorization: `Bearer ${token}`,
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                )
                                .then((response) => {
                                    // console.log('Success:', response.data);
                                    let responseData =
                                        response.data.data.estimate.electricity[
                                            response.data.data.estimate
                                                .electricity.length - 1
                                        ];
                                    // console.log(responseData, 'response');
                                    let price = calculatePrice(
                                        responseData.response.co2
                                    );
                                    let obj = {
                                        ...data,
                                        credit: responseData.response.co2,
                                        scope: responseData.response.scope,
                                        factor: responseData.response.factor,
                                        price: price,
                                    };
                                    setCommonCalculateState((preVal) => {
                                        return [...preVal, obj];
                                    });
                                })
                                .catch((error) => {
                                    toast.error(
                                        ' Something went wrong. Please try again later'
                                    );
                                });
                        } catch (error) {
                            toast.error(
                                ' Something went wrong. Please try again later'
                            );
                        }
                    }
                });
            }
        } else {
            toast.error(' Something went wrong. Please try again later');
        }
    };

    // console.log(commonCalcuateState, 'commonCalcuateState');
    const handelRemoveForm = (index) => {
        formIndexState.splice(index, 1);
        setFormIndexState([...formIndexState]);

        buttonState.splice(index, 1);
        setButtonState([...buttonState]);
    };

    const handlePaymentModalOpen = () => {
        if (!userDetail) {
            setShowModal(true);
        } else {
            const isValid = commonCalcuateState.length > 0;
            if (isValid) {
                setShowPaymentOptions(true);
            }
        }
    };
    const handelForSubmit = async () => {
        // console.log('click', userDetail);
        if (!userDetail) {
            setShowModal(true);
        } else {
            const isValid = commonCalcuateState.length > 0;
            // console.log('falseeee', isValid);
            let price = commonCalcuateState.reduce(
                (acc, item) => acc + item.price,
                0
            );
            let credits = commonCalcuateState.reduce(
                (acc, item) => acc + item.credit,
                0
            );
            // return
            // console.log("json", process.env.NEXT_PUBLIC_LOCATION_URL, process.env.NEXT_PUBLIC_URL)
            const data = await axios.get(process.env.NEXT_PUBLIC_LOCATION_URL);
            // console.log(data.data, "data")
            if (isValid && data.data && price > 0) {
                if (country == 'India') {
                    // console.log(process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL)
                    const res = await loadScriptR(
                        process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL
                    );

                    if (!res) {
                        console.log('errror');
                        setShowFailureModal(true);
                        return;
                    }

                    let orderResult = await axios.post(
                        process.env.NEXT_PUBLIC_URL + '/order/razorpay',
                        { amount: price, credits: credits }
                    );
                    // console.log('razorpay', orderResult.data)
                    const { id, currency } = orderResult.data.response;

                    let orderDetails = await axios.post(
                        process.env.NEXT_PUBLIC_URL + '/order/',
                        {
                            total: price,
                            credits: credits,
                            paymentMethod: 'razorpay',
                            paymentSource: 'calculator',
                            projectDetails: project,
                            calculatorDetails: {
                                data: commonCalcuateState,
                            },
                            orderId: id,
                            ...userDetail,
                        }
                    );
                    let orderId = orderDetails?.data?.response?._id;
                    let orderData = orderDetails?.data?.response;
                    setOrder({ ...orderData });
                    const razorpayOptions = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                        amount: price * 100, // Amount is in currency subunits. Default currency is INR.
                        currency: currency,
                        order_id: id,
                        name: userDetail.firstName + ' ' + userDetail.lastName,
                        description: 'Test Transaction',
                        handler: async function (response) {
                            try {
                                // Handle Razorpay payment success
                                console.log('Payment success:', response);
                                const data = {
                                    orderCreationId: id,
                                    razorpayPaymentId:
                                        response.razorpay_payment_id,
                                    razorpayOrderId: response.razorpay_order_id,
                                    razorpaySignature:
                                        response.razorpay_signature,
                                };
                                const responseVerifyPayment = await axios.post(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/verify-razorpay',
                                    data
                                );
                                // console.log(responseVerifyPayment, 'ttt');
                                await axios.put(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/' +
                                        orderId,
                                    {
                                        paymentId: response.razorpay_payment_id,
                                        status: 'success',
                                        paymentDate: new Date(),
                                    }
                                );
                                // this will open the success modal but I want to refresh page before this modal opens
                                // window.location.reload();

                                handlePaymentSuccess();
                                // console.log('done');

                                // setIsLoading(false);
                                // You can perform additional actions here, such as updating the UI or redirecting the user
                            } catch (error) {
                                await axios.put(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/' +
                                        orderId,
                                    {
                                        status: 'failure',
                                    }
                                );
                                // console.log('fails', orderId);
                                console.error('Error:', error);
                            }
                        },
                        prefill: {
                            firstname: userDetail.firstName,
                            lastname: userDetail.lastName,
                            email: userDetail.email,
                            contact: userDetail.phoneNumber,
                        },
                        theme: {
                            color: '#61dafb',
                        },
                    };

                    const paymentObject = new window.Razorpay(razorpayOptions);

                    // console.log(paymentObject, 'paymentobject');
                    paymentObject.on(
                        'payment.failed',
                        async function (response) {
                            console.log('failss');
                            await axios.put(
                                process.env.NEXT_PUBLIC_URL +
                                    '/order/' +
                                    orderId,
                                {
                                    status: 'failed',
                                    paymentDate: new Date(),
                                }
                            );
                            handlePaymentFailure();
                        }
                    );
                    paymentObject.open();

                    paymentObject.on('modal.dismissed', async function () {
                        console.log('Payment cancelled by user');
                        await axios.put(
                            process.env.NEXT_PUBLIC_URL + '/order/' + orderId,
                            {
                                status: 'failed',
                                paymentDate: new Date(),
                            }
                        );
                        setShowFailureModal(true); // handle the cancellation in your own way
                    });
                }
            }
        }
    };
    const handelStripePayment = async () => {
        let price = commonCalcuateState.reduce(
            (acc, item) => acc + item.price,
            0
        );
        let credits = commonCalcuateState.reduce(
            (acc, item) => acc + item.credit,
            0
        );
        setShowPaymentOptions(false);
        console.log('stripe', price, credits);
        try {
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY
            );

            let orderDetails = await axios.post(
                process.env.NEXT_PUBLIC_URL + '/order/',
                {
                    total: price,
                    credits: credits,
                    paymentMethod: 'stripe',
                    paymentSource: 'calculator',
                    projectDetails: project,
                    calculatorDetails: {
                        data: commonCalcuateState,
                    },
                    ...userDetail,
                }
            );
            setOrder(orderDetails?.data?.response);
            let orderId = orderDetails?.data?.response?._id;
            const body = {
                amount: price,
                credits: credits ? credits : 0,
                orderId: orderId,
            };
            const headers = {
                'Content-Type': 'application/json',
            };
            // console.log(body)
            const response = await fetch(
                process.env.NEXT_PUBLIC_URL + '/order/stripe',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body),
                }
            );

            const session = await response.json();
            // console.log(session, 'session');
            if (!(session && session.response && session.response.id)) {
                toast.error('Something went wrong. Please try again later');
            }

            //update orderId in order
            await axios.put(process.env.NEXT_PUBLIC_URL + '/order/' + orderId, {
                orderId: session.response.id,
            });
            try {
                const result = await stripe.redirectToCheckout({
                    sessionId: session.response.id,
                });

                if (result?.error) {
                    console.log('Error during payment redirection');
                    handlePaymentFailure();
                    // Exit early if there's an error
                }

                console.log(result, 'result123');

                const data = await axios.put(
                    process.env.NEXT_PUBLIC_URL + '/order' + orderId,
                    {
                        status: 'completed',
                        paymentDate: new Date(),
                    }
                );

                console.log('Updated order data:', data.data);
                handlePaymentSuccess();
            } catch (error) {
                console.error('Error during payment process:', error);
                handlePaymentFailure();
            }
        } catch (error) {
            console.log(error, 'catch');
        }
    };

    const PayPalCheckout = (props) => {
        const { onSuccess } = props;
        let price = commonCalcuateState.reduce(
            (acc, item) => acc + item.price,
            0
        );
        let credits = commonCalcuateState.reduce(
            (acc, item) => acc + item.credit,
            0
        );
        useEffect(() => {
            const handleDocumentReady = () => {
                if (currency && price) {
                    // Load the PayPal SDK script dynamically
                    const script = document.createElement('script');
                    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
                    script.async = true;
                    script.onload = () => {
                        // Render the PayPal button when the script is loaded
                        window.paypal
                            .Buttons({
                                style: {
                                    layout: 'horizontal',
                                    color: 'black',
                                    shape: 'rect',
                                    label: 'pay',
                                },
                                createOrder: (data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: parseFloat(
                                                        price
                                                    ).toFixed(2),
                                                    currency_code: 'USD',
                                                },
                                                order_id: new Date().getTime(),
                                                description:
                                                    'Carbon Credit Purchased',
                                            },
                                        ],
                                    });
                                },
                                onApprove: (data, actions) => {
                                    return actions.order
                                        .capture()
                                        .then(async (details) => {
                                            console.log(details);
                                            let orderDetails = await axios.post(
                                                process.env.NEXT_PUBLIC_URL +
                                                    '/order/',
                                                {
                                                    total: price,
                                                    credits: credits,
                                                    paymentMethod: 'paypal',
                                                    paymentSource: 'calculator',
                                                    projectDetails: project,
                                                    calculatorDetails: {
                                                        data: commonCalcuateState,
                                                    },
                                                    orderId: details.id,
                                                    paymentId: details.id,
                                                    ...userDetail,
                                                }
                                            );
                                            let orderId =
                                                orderDetails?.data?.response
                                                    ?._id;
                                            setOrder(
                                                orderDetails?.data?.response
                                            );
                                            if (
                                                details.status.toUpperCase() ==
                                                'COMPLETED'
                                            ) {
                                                axios
                                                    .put(
                                                        process.env
                                                            .NEXT_PUBLIC_URL +
                                                            '/order/' +
                                                            orderId,
                                                        {
                                                            status: 'completed',
                                                            paymentDate:
                                                                new Date(),
                                                        }
                                                    )
                                                    .then(() => {
                                                        setShowSuccessModal(
                                                            true
                                                        );
                                                        onSuccess();
                                                    })
                                                    .catch((error) => {
                                                        console.log(
                                                            'ERROR in PAYPAL PAYMENT PROCESSS',
                                                            error
                                                        );
                                                    });
                                            }
                                        });
                                },
                                onError: (err) => {
                                    setShowFailureModal(true);

                                    console.error('Payment error', err);
                                },
                                onCancel: (data) => {
                                    setShowFailureModal(true);
                                    console.log('Payment cancelled', data);
                                },
                            })
                            .render('#paypal-button-container');
                    };
                    script.onerror = (err) => {
                        console.error('Error loading PayPal SDK script:', err);
                    };
                    document.body.appendChild(script);

                    // Cleanup: Remove the script when the component unmounts
                    return () => {
                        document.body.removeChild(script);
                    };
                }
            };

            // Check document readiness
            if (document.readyState === 'complete') {
                handleDocumentReady();
            } else {
                document.addEventListener(
                    'DOMContentLoaded',
                    handleDocumentReady
                );
            }
        }, [currency, price, onSuccess]);

        return <div id="paypal-button-container"></div>;
    };

    return (
        <section
            className="pt-2 lg:pl-[132px] px-2  mt-10"
            id="carbon-calculator"
            ref={(el) => (sectionRefs.current[1] = el)}
        >
            <div className="absolute right-0  -z-10">
                <Image
                    quality={100}
                    src="/Vector6.svg"
                    alt="shade1"
                    height={452.43}
                    width={613.5}
                />
                <Image
                    quality={100}
                    src="/Vector5.svg"
                    className="w-full"
                    alt="shade2"
                    height={491.32}
                    width={584.82}
                />
            </div>
            <div className="lg:w-3/4">
                <h3 className="text-[#2A3C5B] font-bold md:text-[3.25rem] md:leading-[4.40rem] text-4xl mb-10 max-lg:flex justify-center max-sm:text-center">
                    Your very own Carbon Calculator
                </h3>
                <div className="grid md:grid-cols-2 max-md:grid-rows-2 border rounded">
                    <div className="bg-[#F6F9F2] lg:border lg:border-[#DCE2DD] px-7 py-4 ">
                        <div className="h-[26rem] overflow-y-auto pr-2 ">
                            {formIndexState.map((state, i) => {
                                return (
                                    <Fragment key={i}>
                                        <div
                                            className={`h-fit ${i !== 0 && 'mt-4'} `}
                                        >
                                            <div className="sm:flex justify-between items-center">
                                                <p className="text-xl leading-[1.375rem] font-semibold text-[#33496F]">
                                                    Select Emission Type
                                                </p>
                                                {i !== 0 && (
                                                    <Button
                                                        className="text-red-500 font-medium text-xl leading-[1.375rem] cursor-pointer"
                                                        onClick={() =>
                                                            handelRemoveForm(i)
                                                        }
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                            <div className="sm:flex  justify-between mt-2 ">
                                                <Button
                                                    className={` font-medium text-[0.875rem] leading-[1.375rem] h-[3.875rem] w-[3.875rem] outline-none border rounded ${
                                                        buttonState[i]?.vehicle
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    }`}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'vehicle',
                                                            i,
                                                            0
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <FaCarAlt
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.vehicle
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            } `}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.vehicle
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64]'
                                                        } `}
                                                    >
                                                        Vehicle
                                                    </span>
                                                </Button>
                                                <Button
                                                    className={`h-[3.875rem] w-[3.875rem] outline-none  font-medium text-[0.875rem] leading-[1.375rem] border rounded ${
                                                        buttonState[i]?.flight
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'flight',
                                                            i,
                                                            1
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <BiSolidPlaneAlt
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.flight
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            }`}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.flight
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Flight
                                                    </span>
                                                </Button>
                                                <Button
                                                    className={` border h-[3.875rem] w-[3.875rem] outline-none font-medium text-[0.875rem] leading-[1.375rem] rounded ${
                                                        buttonState[i]
                                                            ?.electricity
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'electricity',
                                                            i,
                                                            2
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <RiLightbulbFlashFill
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.electricity
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            } `}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.electricity
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Electricity
                                                    </span>
                                                </Button>
                                                <Button
                                                    className={`h-[3.875rem] w-[3.875rem] outline-none border  font-medium text-[0.75rem] leading-[0.75rem] rounded ${
                                                        buttonState[i]
                                                            ?.transport
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'transport',
                                                            i,
                                                            3
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <MdDirectionsBus
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.transport
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            }   `}
                                                        />
                                                    </span>
                                                    <p
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.transport
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Public Transport
                                                    </p>
                                                    <p
                                                        className={`text-sm ${
                                                            buttonState[i]
                                                                ?.transport
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    ></p>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="text-sm mt-4 h-72 ">
                                            <p className="mt-1 font-semibold text-[1.25rem] leading-[1.375rem] text-[#5D7C64]">
                                                Add Transport Details :
                                            </p>

                                            {/* {AllForms[formIndexState[i]]} */}

                                            {renderCurrentForm(
                                                formIndexState[i],
                                                i
                                            )}
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                        <Button
                            className="font-semibold text-xl text-[#2F5738] mt-4 outline-none pr-2"
                            onClick={handelAddForm}
                        >
                            <span className="text-4xl">+</span> Add More
                        </Button>
                        <div className="w-full mt-7 pr-2">
                            <Button
                                className={` text-xl font-semibold py-2 text-[#2F5738] w-full hover:text-white rounded bg-[#FCFDFA] border border-[#2F5738]  hover:bg-[#2F5738] pb-[10px]`}
                                onClick={handleCalulate}
                            >
                                {' '}
                                Calculate
                            </Button>
                        </div>
                    </div>

                    <div className="px-7 py-4">
                        <div className="text-[#33496F]  font-semibold ">
                            <p className="text-xl leading-[1.375rem]">
                                Your Carbon
                            </p>
                            <h3 className="text-[2rem] leading-[1.375rem]">
                                Dashboard
                            </h3>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between py-1 border-b-2 ">
                                <p className="mb-2 font-semibold text-lg leading-[1.375rem]">
                                    Total Emission
                                </p>
                                <p className="text-[#666666] font-medium text-xl leading-[1.375rem]">
                                    {commonCalcuateState.reduce(
                                        (total, item) => total + item.credit,
                                        0
                                    )}{' '}
                                    CIT
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="h-56 overflow-y-auto">
                                {commonCalcuateState.map((item) => (
                                    <div
                                        className="mt-3 grid grid-cols-2"
                                        key={item.id}
                                    >
                                        <div className="text-[#666666]">
                                            <p className="font-semibold text-[1.375rem] leading-[1.375rem] ">
                                                {item.type}
                                            </p>
                                            <p className="font-medium text-xl leading-[1.375rem]">
                                                {item.credits} carbon credits
                                            </p>
                                        </div>
                                        <div className="col-end-4">
                                            <p className="text-[#5D7C64] font-semibold text-xl leading-[1.375rem] ">
                                                {country == 'India'
                                                    ? `${item.price}`
                                                    : `$ ${item.price}`}
                                            </p>
                                            <p
                                                className="text-red-500 font-medium text-xl leading-[1.375rem] cursor-pointer"
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                            >
                                                Remove
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-14">
                            <p className="font-semibold text-[1.375rem] leading-[1.375rem] ">
                                Total Amount
                            </p>
                            <p className="font-semibold text-xl leading-[1.375rem] text-[#5D7C64]">
                                {country == 'India'
                                    ? commonCalcuateState.reduce(
                                          (total, item) => total + item.price,
                                          0
                                      )
                                    : `$ ${commonCalcuateState.reduce((total, item) => total + item.price, 0)}`}
                            </p>
                        </div>
                        <div className="col-span-2 flex items-end">
                            {country === 'India' ? (
                                <Button
                                    type="button"
                                    onClick={handelForSubmit}
                                    className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[6px]"
                                >
                                    Offset Now
                                </Button>
                            ) : (
                                <div className="button-container w-full">
                                    {showPaymentOptions ? (
                                        <div className="payment-options">
                                            <Button
                                                type="button"
                                                onClick={handelStripePayment}
                                                className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] mb-2"
                                            >
                                                Pay with Stripe
                                            </Button>
                                            <PayPalCheckout></PayPalCheckout>
                                        </div>
                                    ) : (
                                        <Button
                                            type="button"
                                            onClick={handlePaymentModalOpen}
                                            className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[6px] "
                                        >
                                            Offset Now
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* <div className="w-full mt-3">
                            <Button
                                className={` text-xl leading-[1.375rem] font-semibold py-[11px]   px-3 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738] pb-[13px]`}
                                onClick={() => setShowModal(true)}
                            >
                                Offset Now
                            </Button>
                        </div> */}
                    </div>
                    <Dialog
                        setShowModal={setShowSuccessModal}
                        showModal={showSuccessModal}
                        handleCloseModal={() => {
                            setShowSuccessModal(false);
                            if (typeof window !== 'undefined') {
                                const url = new URL(window.location.href);
                                url.searchParams.delete('success');
                                window.location.replace(url.pathname);
                            }
                        }}
                        // divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        style={{ zIndex: 1000, position: 'relative' }}
                    >
                        <Success order={order} isModalOpen={true} />
                    </Dialog>
                    <Dialog
                        setShowModal={setShowFailureModal}
                        showModal={showFailureModal}
                        // divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        handleCloseModal={() => {
                            setShowSuccessModal(false);
                            if (typeof window !== 'undefined') {
                                const url = new URL(window.location.href);
                                url.searchParams.delete('success');
                                window.location.replace(url.pathname);
                            }
                        }}
                        style={{ zIndex: 1000, position: 'relative' }}
                    >
                        <Failure />
                    </Dialog>
                </div>
            </div>
        </section>
    );
};

export default CalculatorForm;
