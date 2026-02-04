import React from 'react';
import { Gauge, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Años de experiencia', value: '15+', color: 'bg-primary' },
        { label: 'Clientes satisfechos', value: '500+', color: 'bg-navy dark:bg-slate-800' },
        { label: 'Soporte continuo', value: '24/7', color: 'bg-white dark:bg-slate-800', textColor: 'text-primary' },
        { label: 'Personalizado', value: '100%', color: 'bg-white dark:bg-slate-800', textColor: 'text-primary' }
    ];

    return (
        <section id="nosotros" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${stat.color} p-8 rounded-2xl ${stat.textColor ? '' : 'text-white'} ${stat.textColor ? 'border border-slate-200 dark:border-slate-700' : ''}`}
                                >
                                    <div className={`text-4xl font-bold mb-2 ${stat.textColor || ''}`}>{stat.value}</div>
                                    <div className={`text-sm opacity-90 font-medium ${stat.textColor ? 'text-slate-500 dark:text-slate-400' : ''}`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 order-1 lg:order-2"
                    >
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy dark:text-white mb-6">¿Por qué elegir <span className="text-primary">Grupo RG</span>?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Nacimos con la vocación de simplificar la vida de los emprendedores. Al igual que nuestra icónica scooter, representamos la agilidad, el estilo y la eficiencia en el movimiento.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-icons-round">speed</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white text-lg">Rapidez de respuesta</h4>
                                    <p className="text-slate-500 dark:text-slate-400">No te hacemos esperar. Sabemos que el tiempo es tu recurso más valioso.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-icons-round">handshake</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white text-lg">Trato cercano</h4>
                                    <p className="text-slate-500 dark:text-slate-400">Hablamos tu idioma, sin tecnicismos innecesarios.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
