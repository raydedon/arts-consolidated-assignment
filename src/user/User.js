import React from 'react';

const User = (props) => {
    const {user} = props;
    return (
        <div>
            {JSON.stringify(user, null, 4)}
        </div>
    );
}

export {User};
export default User;
