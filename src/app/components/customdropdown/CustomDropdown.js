import React, { useState } from "react";

function CustomDropdown({ options, selectedOption, onOptionChange, placeholder }) {
    const [inputValue, setInputValue] = useState(selectedOption.label || "");
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onOptionChange({ label: value, value });
    };

    const handleOptionClick = (option) => {
        setInputValue(option.label);
        onOptionChange(option);
        setIsOpen(false);
    };

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <input
                type="text"
                placeholder={placeholder || "Select or type..."}
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    height: "100%",
                }}
            />
            {isOpen && (
                <ul
                    style={{
                        backgroundColor: "#0B6477",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        borderRadius: "8px",
                        zIndex: 1000,
                        maxHeight: "150px",
                        overflowY: "auto",
                        listStyleType: "none",
                        margin: 0,
                        padding: "5px",
                    }}
                >
                    {options
                        .filter((option) =>
                            option.label.toLowerCase().includes(inputValue.toLowerCase())
                        )
                        .map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    padding: "8px",
                                    cursor: "pointer",
                                    borderRadius: "0px",
                                    marginBottom: "5px",
                                }}
                            >
                                {option.label}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default CustomDropdown;
