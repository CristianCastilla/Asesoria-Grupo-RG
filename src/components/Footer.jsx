import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            alt="Grupo RG Logo"
                            className="h-10 w-auto"
                            src="/logo_sin_fondov2.png"
                        />
                        <span className="text-xl font-display font-bold text-navy dark:text-white">
                            Grupo<span className="text-primary">RG</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        {[
                            { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/gestoria.gruporg' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center text-sm text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8">
                    © {new Date().getFullYear()} Grupo RG Asesores. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
