import React from "react";

import RegistrationInput from "../inputs/RegistrationInput";

const SignLabel = ({subtitle, inputType, placeholder,tabindex}) => {

    return (
        <label>
            <h6 className="signUpForm-title">
                {subtitle}
            </h6>
            <RegistrationInput
                inputType={inputType}
                placeholder={placeholder}
                tabindex={tabindex} />
        </label>
    )
}

export default SignLabel;