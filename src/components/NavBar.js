import React from 'react';
import '../styles/App.css';
import '../styles/Buttons.css';
import { useState } from 'react';
import Main from '../pages/Main';
import TimeTable from '../pages/TimeTable';
import Homework from '../pages/Homework';
import News from '../pages/News';
function NavBar() {
    const [activeComponent, setActiveComponent] = useState(null);
    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };
    return (
        <div style={{ marginTop: '2%'}}>
            <nav>
                <div style={{ padding: '15px' }}>
                    <button class='NavBar' id='Nav1' style={{ fontFamily: 'MyCustomFont' }} onClick={() => handleClick('Main')}>
                        Главная
                    </button>
                    <button class='NavBar' id='Nav2' style={{ fontFamily: 'MyCustomFont' }} onClick={() => handleClick('TimeTable')}>
                        Расписание
                    </button>
                    <button class='NavBar' id='Nav3' style={{ fontFamily: 'MyCustomFont', fontSize: '20px' }} onClick={() => handleClick('Homework')}>
                        ДЗ
                    </button>
                    <button class='NavBar' id='Nav4' style={{ fontFamily: 'MyCustomFont' }} onClick={() => handleClick('News')}>
                        Новости
                    </button>

                </div>
            </nav>
            <div style={{padding:'10px'}}>
            {activeComponent === 'News' && <News />}
            {activeComponent === 'Main' && <Main />}
            {activeComponent === 'TimeTable' && <TimeTable />}
            {activeComponent === 'Homework' && <Homework />}
            </div>
        </div>
    );
}

export default NavBar;




