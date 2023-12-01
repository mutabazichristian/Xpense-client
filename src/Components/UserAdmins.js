import React from 'react';

function UserAdmins(props) {
    const { useradmins } = props;
    return (
        <ul>
            {useradmins.map((user, index) => (
                <li key={index}>
                    {/* Display the username, adminPassword, and email properties */}
                    Username: {user.username} <br />
                    Admin Password: {user.adminPassword} <br />
                    Email: {user.email}
                </li>
            ))}
        </ul>
    );

}

export default UserAdmins;