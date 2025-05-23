import { MdMenu } from "react-icons/md";
import { GothamNavbar } from "./Navbar";
import { useEffect, useRef } from "react";

export const GothamDrawer = ({ children }: { children: React.ReactNode }) => {
    const drawerCheckbox = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.addEventListener('onNavbarItemClicked', () => {
            if (drawerCheckbox.current) {
                drawerCheckbox.current.checked = false;
            }
        });

        return () => {
            document.removeEventListener('onNavbarItemClicked', () => { });
        }
    }, []);

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" ref={drawerCheckbox} />
                <div className="drawer-content h-screen">
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-circle rounded-full drawer-button lg:hidden my-4 ml-4">
                        <MdMenu size={20} />
                    </label>
                    <div id="main-content" className="px-4">
                        {children}
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <GothamNavbar />
                </div>
            </div>
        </>
    )
}