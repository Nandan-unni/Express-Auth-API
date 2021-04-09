import { createContext, useState } from "react";

export const TabbarContext = createContext();

export const TabbarProvider = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <TabbarContext.Provider value={{ selectedTab, setSelectedTab }}>
            {props.children}
        </TabbarContext.Provider>
    );
};
