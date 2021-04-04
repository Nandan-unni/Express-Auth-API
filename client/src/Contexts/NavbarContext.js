import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
    const [selectedNav, setSelectedNav] = useState(1);

    return (
        <NavbarContext.Provider value={{ selectedNav, setSelectedNav }}>
            {props.children}
        </NavbarContext.Provider>
    );
};
