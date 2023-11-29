import React, { useState } from 'react';
import UserAdminsView from '../Components/UserAdminsView';
import { useNavigate } from 'react-router-dom';

function SystemAdminPage(props) {
    //new user admin data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');

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

    const handleCreateNewUserAdmin = async (event) => {
        event.preventDefault();
        if (password == repeatPassword) {
            console.log('tryna create a new admin huh?');
            console.log('collected values are', username, password, email);
        } if (password != repeatPassword) {
            alert('Passwords do not match! Please make sure they do.');
        }

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
            <form onSubmit={handleCreateNewUserAdmin}>
                <table>
                    <tr>
                        <td><label htmlFor="">Username</label></td>
                        <td><input type="text" name="username" onChange={e => { setUsername(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="text" name='email' onCanPlay={e => { setEmail(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Password</label></td>
                        <td><input type="password" name="password" onChange={e => { setPassword(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Repeat Password</label></td>
                        <td><input type="password" name="repeatPassword" onChange={e => { setRepeatPassword(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <button type='submit'>Create New User Admin</button>
                    </tr>
                </table>
            </form>
            <h1>Create New System Admin</h1>
            <form action="">

            </form>

        </div>
    );
}

export default SystemAdminPage;