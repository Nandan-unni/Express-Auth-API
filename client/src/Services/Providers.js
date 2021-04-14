import { ShadeProvider } from "../Contexts/ShadeContext";
import { NavbarProvider } from "../Contexts/NavbarContext";
import { TabbarProvider } from "../Contexts/TabbarContext";
import { UserProvider } from "../Contexts/UserContext";

const Providers = (props) => {
    return <UserProvider>
        <ShadeProvider>
            <NavbarProvider>
                <TabbarProvider>
                    { props.children }
                </TabbarProvider>
            </NavbarProvider>
        </ShadeProvider>
    </UserProvider>
}

export default Providers;
