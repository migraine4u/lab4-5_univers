import './University.scss';

import { ReactComponent as PicSvg } from '../../assets/picture.svg';

const Univetsity = () => {
    return (
        <div className="univer">
            <div className="univer_photo">
                <PicSvg />
            </div>
            <div className="univer_info">
                <div className="univer_info__city"></div>
                <div className="univer_info__name"></div>
                <div className="univer_info__desc"></div>
                <button className="univer_info__button">Подробнее</button>
            </div>
            <div className="univer_exam">
                <div className="univer_exam__inform"></div>
                <div className="univer_exam__inform"></div>
                <div className="univer_exam__inform"></div>
                <div className="univer_exam__inform"></div>
            </div>
        </div>
    );
};

export default Univetsity;
