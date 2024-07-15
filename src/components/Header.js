import React from "react";
import '../styles/App.css';
import DateComponent from '../assets/Timer/DateTimer'
import '../styles/Main.css'
function Header(){
    return(
        <div>
        <header>
        <h1 style={{ fontFamily: 'MyCustomFont'}} class='nameof'>MKIT WEB APP O_o</h1>
        </header>
        <DateComponent/>
        </div>
    );
}
export default Header;