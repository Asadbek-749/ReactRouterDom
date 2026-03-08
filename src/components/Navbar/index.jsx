import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <ul className="flex items-center gap-2">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                    isActive
                                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                                }`
                            }
                        >
                            Bosh sahifa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                    isActive
                                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                                }`
                            }
                        >
                            Haqida
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
