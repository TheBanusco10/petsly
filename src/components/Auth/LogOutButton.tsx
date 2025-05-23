import { useAuth } from "../../hooks/useAuth"
import { NavbarItem } from "../Gotham/Navbar/NavbarItem"

export const LogOutButton = () => {
    const { logOut } = useAuth();

    return (
        <NavbarItem callback={logOut} label="Cerrar sesión" />
    )
}