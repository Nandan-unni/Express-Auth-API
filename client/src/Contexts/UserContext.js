import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_DOMAIN } from "../Services/config";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [userId, setUserId] = useState(null);

    const [user, setUser] = useState({});
    const getUser = async () => {
        let response = await axios.get(`${API_DOMAIN}/user/get/${userId}`);
        setUser(response.data);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUser();
    }, [userId]);

    useEffect(() => {
        if (Object.keys(user).length !== 0 && userId)
            setIsLoading(true);
    }, [user, userId]);

    return (
        <UserContext.Provider 
            value={{ 
                userId, setUserId, 
                user, setUser, getUser, 
                isLoggedIn, setIsLoggedIn,
                isLoading
            }}
        >
            { props.children }
        </UserContext.Provider>
    );
};
