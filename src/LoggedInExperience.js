import React from 'react';
import { testAuthentication } from './api';

const LoggedInExperience = (props) => {
    const { setIsLoggedIn } = props;

    async function isValidJWT() {
        const token = localStorage.getItem("stranger_things_JWT");
        if (!token) setIsLoggedIn(false);
        else {
            const isValid = await testAuthentication();
            setIsLoggedIn(isValid);
        }
    }

    return (
        <>
            <button onClick={testAuthentication}>Test Auth</button>
            <button onClick={() => {
                localStorage.removeItem("stranger_things_JWT");
                isValidJWT();
            }}>Log Out</button>
        </>
    );
};

export default LoggedInExperience;