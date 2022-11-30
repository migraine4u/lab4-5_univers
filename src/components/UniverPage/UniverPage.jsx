import React from 'react';
import './UniverPage.scss';

import { ReactComponent as PicSvg } from '../../assets/picture.svg';
const UniverPage = () => {
    return (
        <div className="univerPage">
            <div className="univerPage_content">
                <div className="univerPage_content_photo">
                    <PicSvg />
                </div>
                <div className="univerPage_content_info">
                    <div className="univerPage_content_info__city">Город</div>
                    <div className="univerPage_content_info__name">
                        Название вуза
                    </div>
                    <div className="univerPage_content_info__desc">
                        Описание
                    </div>
                </div>
            </div>
            <div className="univerPage_exam">
                <div className="univerPage_exam__inform">
                    <h4>Средний балл ЕГЭ: ...</h4>
                    <h4>.....................................</h4>
                    <h4>.....................................</h4>
                    <button>Проверить шансы</button>
                </div>
                <div className="univerPage_exam__inform">
                    <h4>О вузе: ...</h4>
                    <h4>.................</h4>
                    <h4>.................</h4>
                    <button>Буду поступать</button>
                </div>
            </div>
        </div>
    );
};

export default UniverPage;
