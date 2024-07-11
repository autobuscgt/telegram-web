import React from "react";
import '../styles/App.css';
import logo from "../images/logotype.png";
function Header(){
    return(
        <div>
        <header style={{ margin: '45px 45px 45px 45px' }}>
        <h1 style={{ fontFamily: 'MyCustomFont'}} class='nameof'>MKIT WEB APP</h1>
        <img src={logo} alt='logotype' class='logo' style={{ paddingBottom: 15, float: 'right' }}></img>
        </header>
        </div>
    );
}
export default Header;