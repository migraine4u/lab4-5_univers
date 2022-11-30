import React from 'react';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import UniverPage from './components/UniverPage/UniverPage';

function App() {
    const [open, setOpen] = React.useState(false);
    const [help, setHelp] = React.useState(false);
    return (
        <div className="wrapper">
            <Header open={open} setOpen={setOpen} />
            <Login open={open} setOpen={setOpen} />
            <Main />
            <Footer help={help} setHelp={setHelp} />
        </div>
    );
}

export default App;
