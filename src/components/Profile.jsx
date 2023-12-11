import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? <div>Welcome {user.userName}.</div> : <div>There is no user!</div>}
        </div>
    );
};

export default Profile;