import React from 'react';
import { useState } from 'react';
import PhoneInput from '@/components/common/InputwithOption';
import LabelComponent from '@/components/common/LabelComponent';
import SelectComponent from '@/components/common/SelectComponent';

const FlightForm = () => {
    const [distance, setDistance] = useState(null);
    const [distanceUnit, setDistanceUnit] = useState(null);

    const handleDistanceChange = (unit, distance) => {
        console.log(unit, distance, 'data');
        setDistanceUnit(unit);
        setDistance(distance);
    };
    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    value="What Class Did You Go With?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem]"
                />
                <br />
                <SelectComponent
                    options={[
                        {
                            id: 1,
                            value: '',
                            label: 'Long first class flight',
                        },
                    ]}
                    className="p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none"
                />
            </div>

            <div className="mt-4">
                <LabelComponent
                    value="What Distance Did You Travelled?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem]"
                />
                <PhoneInput
                    options={[{ value: 'km', label: 'Km' }]}
                    onChange={handleDistanceChange}
                />
            </div>
        </>
    );
};

export default FlightForm;
