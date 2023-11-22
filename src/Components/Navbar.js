import React from "react";
import profileImage from "../Assets/profileImage.svg"
import ListNavigationList from "./ListNavigation";
import BtnNewExpense from "./BtnNewExpense";
import { useRef } from "react";

const handleLogout = () => {
    console.log('this is handle log out running')
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const cookieSections = cookie.split('=');
        const cookieName = cookieSections[0].trim();
        document.cookie = `${cookieName}=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;`;
    })
    localStorage.removeItem('userType')
}
function Navbar() {
    return (
        <div className="navbar" >
            {/* <img src={profileImage} alt="profile" /> */}
            <button onClick={handleLogout}>Log out</button>
            <ListNavigationList />
            <BtnNewExpense />
        </div>
    )
}

export default Navbar