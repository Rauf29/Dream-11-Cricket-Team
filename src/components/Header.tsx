import Logo from "../assets/logo.png";

const Header = ({ coin }: { coin: number }) => {
    return (
        <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-gray-900">Home</a>
                <a href="#" className="hover:text-gray-900">Fixture</a>
                <a href="#" className="hover:text-gray-900">Teams</a>
                <a href="#" className="hover:text-gray-900">Schedules</a>
            </nav>

            <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-semibold">
                <span>{coin} Coin</span>
                <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block"></span>
            </div>

        </header>
    );
};

export default Header;