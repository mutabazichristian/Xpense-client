import React, { useNavigate } from 'react';
import UsersView from '../Components/UsersView';

function UsersAdminPage(props) {
    const { setUserType } = props;
    var navigate = useNavigate()
    const handleLogout = () => {
        console.log('this is handle log out running')
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const cookieSections = cookie.split('=');
            const cookieName = cookieSections[0].trim();
            document.cookie = `${cookieName}=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;`;
        })
        setUserType('');
        navigate('/');
    }

    return (
        <>
            <h1>User's Admin <button onClick={handleLogout}>Log Oout</button>
            </h1>
            <h5>Users</h5>
            <ul>
                <li><UsersView /></li>
                <li><UsersView /></li>
            </ul>
        </>
    );
}

export default UsersAdminPage;