import React from 'react';
import { useState } from 'react';
import instance from '../API';

function NewUserAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [waiting, setWaiting] = useState(false);
    const handleCreateNewUserAdmin = async (event) => {
        event.preventDefault();
        if (password == repeatPassword) {
            console.log('tryna create a new admin huh?');
            console.log('collected values are', username, password, email);
            setWaiting(true)
            instance
                .post('/signup/useradmin', { username, password, email })
                .then((res) => {
                    console.log('response from server', res.data);
                    setWaiting(false);
                })
                .catch((error) => {
                    console.log('this is the error from the server', error);
                    setWaiting(false);
                })


        } if (password != repeatPassword) {
            alert('Passwords do not match! Please make sure they do.');
        }

    }
    return (
        <form onSubmit={handleCreateNewUserAdmin}>
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
                {waiting && <p style={{ color: 'black' }}> Waiting for response</p>}
                {message && <p style={{ color: 'red' }}> {message}</p>}
                <tr>
                    <button type='submit'>Create New User Admin</button>
                </tr>
            </table>
        </form>
    );
}

export default NewUserAdmin;