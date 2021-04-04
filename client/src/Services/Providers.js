import { ShadeProvider } from "../Contexts/ShadeContext";
import { NavbarProvider } from "../Contexts/NavbarContext";

const Providers = (props) => {
    return <ShadeProvider>
        <NavbarProvider>
            { props.children }
        </NavbarProvider>
    </ShadeProvider>
}

export default Providers;
