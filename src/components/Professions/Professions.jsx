import React from 'react';

import './Professions.scss';

const Professions = () => {
    return (
        <div className="professions">
            <h3>Мои профессии</h3>
            <p>Нет выбранных профессий</p>
            <div className="professions_form">
                <button className="professions_form__button">
                    Добавить профессию
                </button>
                <button className="professions_form__button">
                    Помочь выбрать профессию?
                </button>
            </div>
        </div>
    );
};

export default Professions;
