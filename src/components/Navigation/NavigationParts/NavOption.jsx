import React from "react";

const NavOption = ({ options }) => {

    return (
        <div className="navbar-content">
            {
                options.map(option =>
                    <a>
                        {option}
                    </a>)
            }
        </div>
    )
}

export default NavOption;