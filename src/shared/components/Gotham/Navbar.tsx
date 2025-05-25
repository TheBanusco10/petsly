import { LogOutButton } from "../../../features/auth/components/LogOutButton";
import { useAuth } from "../../hooks/useAuth";
import { NavbarItem } from "./Navbar/NavbarItem";

export const GothamNavbar = () => {
    const links = [
        { href: "/", label: "Panel de control" },
    ];

    const { session } = useAuth();

    return (
        <>
            <div className="menu bg-base-200 justify-between text-base-content min-h-full w-80 p-4">
                <section>
                    {session?.user && (
                        <ul>
                            {links.map((link) => (
                                <NavbarItem key={link.href} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    )}
                </section>
                <section>
                    <ul>
                        {session && (
                            <>
                                <LogOutButton />
                                <div className="divider"></div>
                                <NavbarItem href="/profile" label="Perfil" />
                            </>
                        )}
                        {!session && <NavbarItem href="/login" label="Iniciar sesión" />}
                    </ul>
                    <p className="text-xs text-base-content/70 mt-2">
                        v{__APP_VERSION__}
                    </p>
                </section>
            </div>
        </>
    )
}