import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Nosotros', href: '#nosotros' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-3">
                        <img
                            alt="Grupo RG Logo"
                            className="h-10 w-auto object-contain"
                            src="logo_sin_fondov2.png"
                        />
                        <span className="text-2xl font-display font-bold text-[#1e3a5f] dark:text-white tracking-tight">
                            Grupo<span className="text-[#4FB6F4]">RG</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-10">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[15px] font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <a
                                href="#contacto"
                                className="px-7 py-3 bg-[#4FB6F4] text-white rounded-full font-bold text-[15px] hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md shadow-primary/20"
                            >
                                Contacto
                            </a>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            className="text-slate-600 dark:text-slate-400 p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 px-4 py-8 space-y-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="block px-5 py-4 bg-primary text-white rounded-2xl font-bold text-center text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
