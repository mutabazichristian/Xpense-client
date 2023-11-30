import React, { useState } from 'react';
import UserAdminsView from '../Components/UserAdminsView';
import { useNavigate } from 'react-router-dom';
import instance from '../API';
import NewUserAdmin from '../Components/NewUserAdmin';

function SystemAdminPage(props) {
    //new user admin data
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



    const handleCreateSystemAdmin = async (event) => {

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
            <NewUserAdmin />
            <h1>Create New System Admin</h1>
            <form onSubmit={handleCreateSystemAdmin}>
                <table>
                    <tr>
                        <td><label htmlFor="">Username</label></td>
                        <td><input type="text" name="username" onChange={e => { setUsername(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="text" name='email' onChange={e => { setEmail(e.target.value) }} /></td>
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
        </div>
    );
}

export default SystemAdminPage;