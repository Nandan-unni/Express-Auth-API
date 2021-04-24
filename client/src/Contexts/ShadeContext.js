import { createContext, useState } from "react";

export const ShadeContext = createContext();

export const ShadeProvider = (props) => {

    const [shade, setShade] = useState(["dodgerblue", "#E8F4FE"]);
    // const [shade, setShade] = useState(["#F1AB1D", "#FDF6E8"]);
    // const [shade, setShade] = useState(["#E34F5D", "#F9E8ED"]);
    // const [shade, setShade] = useState(["#7B53C4", "#F0E9F9"]);
    // const [shade, setShade] = useState(["#E55820", "#FAEAE6"]);
    // const [shade, setShade] = useState(["#6DC164", "#EAF8F0"]);

    return (
        <ShadeContext.Provider value={{ shade, setShade }}>
            {props.children}
        </ShadeContext.Provider>
    );
};
