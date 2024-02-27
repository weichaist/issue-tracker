import Link from "next/link";
import {GiBugNet} from "react-icons/gi";

const NavBar = () => {
    const links = [
        {name: "Dashboard", href: "/"},
        {name: "Issues", href: "/issues"},
    ];
    return (
        <nav className="flex space-x-6 border-b-2 mb-3 px-5 h-14 items-center">
            <Link href="/">
                <GiBugNet className="text-2xl" />
            </Link>
            <ul className="flex space-x-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            className="text-zinc-500 hover:text-zinc-800 transition-colors"
                            href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;