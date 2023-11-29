import React from 'react';
import UserAdminsView from '../Components/UserAdminsView';
import { useNavigate } from 'react-router-dom';

function SystemAdminPage(props) {
    const { setUserType } = props;
    const navigate = useNavigate();
    var userAdmins = [];
    console.log(userAdmins.length)

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
        <div>
            <h1>System Admin <button onClick={handleLogout}> Log Out</button></h1>
            <h5>User's Admin Accounts</h5>
            <ul style={{ border: "1px solid blacks" }}>
                {
                    userAdmins == 0 ?
                        <p>no User Admins Yet</p>
                        :

                        <li><UserAdminsView /></li>

                }
            </ul>
            <h1>Create New User Admin</h1>
            <form action="">

            </form>
            <h1>Create New System Admin</h1>
            <form action="">

            </form>

        </div>
    );
}

export default SystemAdminPage;