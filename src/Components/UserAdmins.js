import React from 'react';

function UserAdmins(props) {
    const { useradmins } = props;
    return (
        <ul>
            {useradmins.map((user, index) => (
                <li key={index}>
                    {/* Display the username property */}
                    Username: {user.username}
                    {/* You can add more properties if needed */}
                    {/* Admin Password: {user.adminPassword} */}
                    {/* Created At: {user.createdAt} */}
                </li>
            ))}
        </ul>
    );

}

export default UserAdmins;