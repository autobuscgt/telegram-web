import React from "react";
import '../styles/App.css';
import logo from "../images/logotype.png";
import '../styles/Footer.css'
function Footer() {
    return (
        <div>
            <footer>
                <img src={logo} alt='logotype' class='logo' style={{  float: 'right' }}></img>
                <a href='https://github.com/autobuscgt' style={{ fontFamily: 'MyCustomFont', fontSize: '32px' ,margin:'5px'}} >
                    Создатель Autobus
                </a>
            </footer>
        </div>
    );
}
export default Footer;