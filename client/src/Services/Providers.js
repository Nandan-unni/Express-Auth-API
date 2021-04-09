import { ShadeProvider } from "../Contexts/ShadeContext";
import { NavbarProvider } from "../Contexts/NavbarContext";
import { TabbarProvider } from "../Contexts/TabbarContext";

const Providers = (props) => {
    return <ShadeProvider>
        <NavbarProvider>
            <TabbarProvider>
                { props.children }
            </TabbarProvider>
        </NavbarProvider>
    </ShadeProvider>
}

export default Providers;
