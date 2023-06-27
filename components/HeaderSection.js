import Link from 'next/link'

const HeaderSection = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <nav className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">My Website</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/home" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-gray-300">Services</Link>
                    </li>
                    <li>
                        <Link href="/team" className="hover:text-gray-300">Team</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderSection;
