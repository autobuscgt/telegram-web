import React from 'react';
import './styles/App.css';
import './styles/Buttons.css';
function NavBar() {
    return (
        <div style={{marginTop:'2%'}}>
            <nav style={{ paddingLeft: '1px' }}>
                <div style={{padding:'15px'}}>
                    <button class='NavBar' id='Nav1' style={{ fontFamily: 'MyCustomFont' }}>
                        Главная
                    </button>
                    <button class='NavBar' id='Nav2' style={{ fontFamily: 'MyCustomFont' }}>
                        Расписание
                    </button>
                    <button class='NavBar' id='Nav3' style={{ fontFamily: 'MyCustomFont', fontSize: '20px' }}>
                        ДЗ
                    </button>
                    <button class='NavBar' id='Nav4' style={{ fontFamily: 'MyCustomFont' }}>
                        Новости
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;




