import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="hero-bg.png"
                    alt="Oficina Grupo RG"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/20 dark:bg-background-dark/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-8 backdrop-blur-md border border-white/30">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(79,182,244,0.8)]"></span>
                            Asesoría de confianza
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-display font-bold text-navy dark:text-white mb-8 leading-[1.1]">
                            Tu éxito, <br />
                            <span className="text-primary">nuestro compromiso</span>
                        </h1>

                        <p className="text-xl text-slate-700 dark:text-slate-300 mb-12 leading-relaxed max-w-lg">
                            Acompañamos tu proyecto empresarial con soluciones integrales en materia fiscal, laboral y jurídica. Gestionamos el presente para asegurar tu futuro.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="#contacto"
                                className="px-10 py-5 bg-[#4FB6F4] text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
                            >
                                Solicitar consulta gratuita
                            </a>
                            <a
                                href="#servicios"
                                className="px-10 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-lg text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center backdrop-blur-sm"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Soft edge transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </section>
    );
};

export default Hero;
