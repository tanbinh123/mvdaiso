import React from 'react';

const Test = ({ loadingUsers, users }) => {
    return (
        <div>
            <section>
                <h1>Get User</h1>
                {loadingUsers && '불러오는중 .. '}

                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Test;