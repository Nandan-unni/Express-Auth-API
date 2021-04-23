import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_DOMAIN } from "../Services/config";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [userId, setUserId] = useState(null);

    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            if (userId !== null) {
                let response = await axios.get(`${API_DOMAIN}/user/get/${userId}`);
                setUser(response.data);
            }
        };
        getUser();
    }, [userId]);

    useEffect(() => {
        if (Object.keys(user).length !== 0 ) {
            setIsLoading(false);
        }
    }, [user]);

    return (
        <UserContext.Provider 
            value={{ 
                userId, setUserId, 
                user, setUser,
                isLoggedIn, setIsLoggedIn,
                isLoading
            }}
        >
            { props.children }
        </UserContext.Provider>
    );
};
