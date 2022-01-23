import React, { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider(props) {
    const [userLogin, setUserLogin] = useState(localStorage.getItem('userLogin')||false);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo'))||{});
    const loginUser = (userInfo) => {
        setUserInfo(userInfo);
        setUserLogin(true);
        localStorage.setItem("userLogin", true);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    const logoutUser = () => {
        setUserLogin(false);
        localStorage.removeItem("userLogin");
        localStorage.removeItem("userInfo");
    }
    return (
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;