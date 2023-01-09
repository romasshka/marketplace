import React from "react";

const RegistrationInput = ({ inputType, placeholder, tabindex }) => {

    return (
        <input className="signInForm-input"
            type={inputType}
            placeholder={placeholder}
            tabIndex={tabindex}
        />
    )
}

export default RegistrationInput;