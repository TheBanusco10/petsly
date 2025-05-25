import { Link } from "wouter";

interface NavbarItemProps {
    href?: string;
    label: string;
    callback?: () => void;
}

export const NavbarItem = ({ href, label, callback }: NavbarItemProps) => {
    const handleItemClick = () => {
        const event = new CustomEvent('onNavbarItemClicked', {
            detail: {
                href,
                label,
                callback
            }
        });

        document.dispatchEvent(event);

        if (callback) callback();
    }

    return (
        <li>
            {href ? (
                <Link href={href} className="p-2" onClick={handleItemClick}>
                    {label}
                </Link>
            ) : (
                <button className="p-2" onClick={handleItemClick}>
                    {label}
                </button>
            )}
        </li>
    )
}