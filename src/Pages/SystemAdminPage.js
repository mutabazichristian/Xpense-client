import React, { useEffect, useState } from 'react';
import UserAdmins from '../Components/UserAdmins';
import { useNavigate } from 'react-router-dom';
import NewUserAdmin from '../Components/NewUserAdmin';
import NewSystemAdmin from '../Components/NewSystemAdmin';
import instance from '../API';

function SystemAdminPage(props) {
    const [useradmins, setUseradmins] = useState([]);
    //new user admin data
    const { setUserType } = props;
    const navigate = useNavigate();

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
    const getUserAdmins = async () => {
        instance
            .get('/useradmin')
            .then(res => {
                console.log(res.data);
                setUseradmins(res.data)
            })
            .catch((error) => {
                console.log('Error form server', error);
            })
    }
    useEffect(() => {
        getUserAdmins();
    }, [])
    return (
        <div>
            <h1>System Admin <button onClick={handleLogout}> Log Out</button></h1>
            <h5>User's Admin Accounts</h5>
            <ul style={{ border: "1px solid blacks" }}>
                {
                    useradmins == 0 ?
                        <p>no User Admins Yet</p>
                        :

                        // <li><UserAdmins useradmins={useradmins} /></li>
                        <li></li>

                }
            </ul>
            <h1>Create New User Admin</h1>
            <NewUserAdmin />
            <h1>Create New System Admin</h1>
            <NewSystemAdmin />
        </div>
    );
}

export default SystemAdminPage;