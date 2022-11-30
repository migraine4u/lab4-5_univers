import React from 'react';
import './Help.scss';

const Help = () => {
    return (
        <div className="help">
            <div className="help_form">
                <h3>Нужна помощь?</h3>
                <div className="help_form__content">
                    <h5>Тема</h5>
                    <input></input>
                    <h5>Что случилось?</h5>
                    <input></input>
                    <button>Отправить</button>
                    <h4>ИЛИ</h4>
                    <h5>Напишите нам:</h5>
                    <p>example@mail.ru</p>
                    <p>+79XXXXXXXXX</p>
                </div>
            </div>
        </div>
    );
};

export default Help;
