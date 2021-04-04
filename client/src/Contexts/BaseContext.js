import { createContext, useState } from "react";

export const CNameContext = createContext();

export const CNameProvider = (props) => {
    const [pname, setFName] = useState(0);

    return (
        <CNameContext.Provider value={{ pname, setFName }}>
            {props.children}
        </CNameContext.Provider>
    );
};
