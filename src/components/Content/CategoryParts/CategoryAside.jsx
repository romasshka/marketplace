import React from "react";

const CategoryAside = ({elements}) => {

    return (
        <aside className="category__aside">
            <h4 className="category__aside-title">
                Category menu
            </h4>
            <ul className="category__aside-list">
                {elements.map(element =>
                    <li key={element.id} className="category__aside-item">
                        <a className="category__aside-link" href="#" >
                            {element.title}
                        </a>
                    </li>
                )}
            </ul>

            <a className="category__btn" href="#">
                More categories
            </a>
        </aside>
    )
}

export default CategoryAside;