import React, { useState } from "react";
import { Button } from "./index";

/**
 * A Simple dropdown component.
 * @param labels - An Array of string labels to render
 * @param setValue - A function to set the value of `value`
 * @param value - The set `value` of the dropdown
 */
const DropDown:React.FC<{labels: string[], setValue: (value: string) => void, value: string}> = ({ labels, setValue, value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onPress = () => {
        setIsOpen(!isOpen)
    };

    const setCategoryPress = (label: string) => {
        setValue(label);
        onPress()
    };

    return (
        <div className="relative">
            <Button onPress={onPress} label={value || 'Select Category'} />
            {
                isOpen && (
                    <>
                        <button
                            onClick={onPress}
                            className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
                        />
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                            {
                                labels.map((label: string) => (
                                    <div
                                        key={label}
                                        onClick={() => setCategoryPress(label)}
                                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                    >
                                        {label}
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
};

export default DropDown
