import './Header.scss';
import { ReactComponent as LogoutSvg } from '../../assets/logout.svg';

const Header = ({ setOpen }) => {
    return (
        <div className="header">
            <div className="header_logo">
                <h2>UNIVERS</h2>
                <h3>Помощник абитуриента</h3>
            </div>
            <div className="header_nav">
                <div className="header_nav__main">
                    <h4>Главная</h4>
                </div>
                <div className="header_nav__news">
                    <h4>Новости</h4>
                </div>
                <div className="header_nav__cabinet">
                    <h4>Личный кабинет</h4>
                </div>
            </div>
            <div className="header_search">
                <input
                    className="header_search__input"
                    type="text"
                    placeholder="Поиск по сайту"
                ></input>
                <div
                    className="header_search__login"
                    onClick={() => setOpen(true)}
                >
                    <p>USERNAME</p>
                    <LogoutSvg />
                </div>
            </div>
        </div>
    );
};

export default Header;
