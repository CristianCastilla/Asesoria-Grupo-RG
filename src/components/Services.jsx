import React from 'react';
import { Wallet, Users, Gavel, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Fiscal & Contable',
            description: 'Optimización de impuestos, gestión contable diaria y presentación de declaraciones ante la Agencia Tributaria.',
            icon: <img src="fiscarycontable.png" alt="Fiscal y Contable" className="w-12 h-12 object-contain" />,
            features: ['IVA, IRPF e Impuesto de Sociedades', 'Auditoría interna de cuentas']
        },
        {
            title: 'Laboral',
            description: 'Gestión de nóminas, contratos, altas/ bajas en la Seguridad Social y asesoramiento en recursos humanos.',
            icon: <img src="laboral.png" alt="Laboral" className="w-12 h-12 object-contain" />,
            features: ['Gestión de Seguros Sociales', 'Conciliaciones y despidos']
        },
        {
            title: 'Jurídico & Legal',
            description: 'Defensa legal integral para particulares y empresas. Mercantil, civil y administrativo.',
            icon: <img src="juridico.png" alt="Jurídico" className="w-12 h-12 object-contain" />,
            features: ['Constitución de sociedades', 'Redacción de contratos complejos']
        },
        {
            title: 'Inmobiliario',
            description: 'Gestión integral de compraventa y alquileres. Asesoramiento profesional para encontrar tu inmueble ideal.',
            icon: <img src="remax.png" alt="Inmobiliario" className="w-12 h-12 object-contain" />,
            features: ['Compraventas y Alquileres', 'Valoraciones de mercado']
        },
        {
            title: 'Seguros',
            description: 'Como sucursal autorizada de Mapfre, ofrecemos las mejores coberturas para tu seguridad y la de tu negocio.',
            icon: <img src="mapfre.png" alt="Seguros" className="w-12 h-12 object-contain" />,
            features: ['Seguros de Hogar y Auto', 'Pólizas para Empresas y Autónomos']
        }
    ];

    return (
        <section id="servicios" className="py-24 bg-slate-100 dark:bg-slate-900/50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy dark:text-white mb-4">Servicios Especializados</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Ofrecemos una cobertura integral para que solo tengas que preocuparte de lo que realmente importa: hacer crecer tu negocio.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold mb-4 text-navy dark:text-white">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                                {service.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <CheckCircle size={14} className="text-primary flex-shrink-0" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
