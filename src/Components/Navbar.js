import React from "react";
import profileImage from "../Assets/profileImage.svg"
import ListNavigationList from "./ListNavigation";
import BtnNewExpense from "./BtnNewExpense";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    const { userType, setUserType } = props;
    const handleLogout = () => {
        console.log('this is handle log out running')
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const cookieSections = cookie.split('=');
            const cookieName = cookieSections[0].trim();
            document.cookie = `${cookieName}=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;`;
        })
        setUserType('');
    }

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