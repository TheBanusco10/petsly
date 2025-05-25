import { useAuth } from "../../../shared/hooks/useAuth"
import { NavbarItem } from "../../../shared/components/Gotham/Navbar/NavbarItem"

export const LogOutButton = () => {
    const { logOut } = useAuth();

    return (
        <NavbarItem callback={logOut} label="Cerrar sesión" />
    )
}