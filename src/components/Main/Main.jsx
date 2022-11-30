import Sidebar from '../Sidebar/Sidebar';
import University from '../University/Univetsity';

import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <Sidebar />
            <University />
            <University />
            <University />
            <University />
            <div className="main__pages">
                <p>{'<'}</p>
                <p className="main__pages--active">1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
                <p>7</p>
                <p>{'>'}</p>
            </div>
        </div>
    );
};

export default Main;
