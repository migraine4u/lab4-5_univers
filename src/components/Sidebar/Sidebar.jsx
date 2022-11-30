import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_container">
                <div className="sidebar_container__filter">
                    <div className="sidebar_container__filter__search">
                        <input
                            className="sidebar_container__filter__search_input"
                            type="text"
                            placeholder="Поиск по вузам"
                        ></input>
                    </div>
                    <p>ФИЛЬТР</p>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                    <button className="sidebar_container__filter-button">
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
