import './Cabinet.scss';
import Profile from '../Profile/Profile';
import Professions from '../Professions/Professions';

const Cabinet = () => {
    return (
        <div className="cabinet">
            <div className="cabinet_header">
                <h3>Профиль</h3>
                <h3>Программы</h3>
                <h3>Учебные заведения</h3>
                <h3>Специальности</h3>
                <h3 className="cabinet_header--active">Профессии</h3>
                <h3>Сервисы</h3>
            </div>
            <div className="cabinet_container">
                <Profile />
            </div>
        </div>
    );
};

export default Cabinet;
