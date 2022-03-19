import React from 'react';
import { loginAsUser, registerUser, testAuthentication } from "./api";

const dummyCreds = {
    user: {
        username: "BenOdisho1990",
        password: "2112IsAwesome"
    }
}
const LoggedOutExperience = (props) => {
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
            <button onClick={() => {
                registerUser(dummyCreds);
                isValidJWT();
            }}>Register User</button>
            <button onClick={async () => {
                await loginAsUser(dummyCreds);
                await isValidJWT();
            }}>Attempt Login</button>
        </>
    );
};

export default LoggedOutExperience;