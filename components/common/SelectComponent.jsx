import React, { memo } from 'react';

const SelectComponent = ({
    options,
    optionClassName,
    onChange,
    defaultValue,
    ...selectProps
}) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (
        <select
            {...selectProps}
            onChange={handleChange}
            defaultValue={defaultValue}
        >
            {options?.map((optionItems) => (
                <option
                    value={optionItems?.value || optionItems?.data?.id}
                    key={optionItems?.id || optionItems?.data?.id}
                    className={optionClassName}
                >
                    {optionItems?.label || optionItems?.data?.attributes?.name}
                </option>
            ))}
        </select>
    );
};

export default memo(SelectComponent);
