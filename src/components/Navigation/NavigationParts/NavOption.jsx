import React from "react";

const NavOption = ({ options }) => {

    return (
        <div className="navbar-content">
            {
                options.map(option =>
                    <a href="#">
                        {option}
                    </a>)
            }
        </div>
    )
}

export default NavOption;