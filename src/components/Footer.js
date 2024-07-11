import React from "react";
import '../styles/App.css';
import logo from "../images/logotype.png";
function Footer() {
    return (
        <div>
            <footer style={{ margin: '45px 45px 45px 45px' }}>
                <img src={logo} alt='logotype' class='logo' style={{ paddingBottom: 15, float: 'right' }}></img>
            </footer>
        </div>
    );
}
export default Footer;