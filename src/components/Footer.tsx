import NavIcon from "../assets/logo-footer.png";

const Footer = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
                <div
                    className="
                        relative overflow-hidden
                        rounded-2xl sm:rounded-3xl
                        border
                        bg-gradient-to-r from-white via-white to-orange-100
                        text-center
                        py-10 sm:py-14
                        px-4 sm:px-6
                    "
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        Subscribe to our Newsletter
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                w-full
                                min-w-0
                                border
                                rounded-lg
                                px-4 py-3
                                text-sm
                                focus:outline-none
                                focus:ring-2
                                focus:ring-orange-300
                            "
                        />

                        <button
                            className="
                                w-full sm:w-auto
                                bg-gradient-to-r
                                from-pink-400 to-orange-300
                                text-white
                                font-semibold
                                px-5 py-3
                                rounded-lg
                                whitespace-nowrap
                            "
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-950 text-gray-300 mt-12 sm:mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8">

                    <div className="flex justify-center mb-8 sm:mb-10">
                        <img
                            src={NavIcon}
                            alt="Cricket logo"
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">

                        <div>
                            <h4 className="text-white font-semibold mb-3">
                                About Us
                            </h4>

                            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                                We are a passionate team dedicated to providing the best
                                services to our customers.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-3">
                                Quick Links
                            </h4>

                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-3">
                                Subscribe
                            </h4>

                            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                                Subscribe to our newsletter for the latest updates.
                            </p>

                            <div className="flex flex-col gap-2 w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                       w-full
        min-w-0
        rounded-lg
        bg-slate-900
        px-3 py-3
        text-sm
        text-white
        placeholder:text-white/70
        focus:outline-none
        border border-gray-700
                                    "
                                />

                                <button
                                    className="
                                        w-full
                                        bg-gradient-to-r
                                        from-pink-400 to-orange-300
                                        text-white
                                        font-semibold
                                        px-4 py-3
                                        rounded-lg
                                        text-sm
                                        whitespace-nowrap
                                    "
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="border-t border-gray-800 pt-5 sm:pt-6 text-center text-xs text-gray-500">
                        @2024 Your Company All Rights Reserved.
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;