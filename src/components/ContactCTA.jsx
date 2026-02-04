import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const ContactCTA = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/mbdknwzk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nombre: '', email: '', mensaje: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contacto" className="py-24 bg-slate-50 dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy dark:text-white mb-6">
                                ¿Listo para impulsar <br />
                                <span className="text-primary">tu negocio?</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                Déjanos tus datos y uno de nuestros expertos se pondrá en contacto contigo en menos de 24 horas para una primera sesión estratégica.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                        <Phone size={24} />
                                    </div>
                                    <h4 className="font-bold text-navy dark:text-white mb-1">Llámanos</h4>
                                    <div className="space-y-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Raquel Guardia</span>
                                            <a href="tel:+34640763897" className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors">640 763 897</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Juan Miguel Rodriguez</span>
                                            <a href="tel:+34669776507" className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors">669 776 507</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                        <Mail size={24} />
                                    </div>
                                    <h4 className="font-bold text-navy dark:text-white mb-1">Email</h4>
                                    <a href="mailto:rodriguezguardia@hotmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors text-[11.5px] min-[400px]:text-[13px] sm:text-xs md:text-sm lg:text-[13px] xl:text-base whitespace-nowrap block" title="rodriguezguardia@hotmail.com">rodriguezguardia@hotmail.com</a>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 sm:col-span-2">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                        <span className="material-icons-round">place</span>
                                    </div>
                                    <h4 className="font-bold text-navy dark:text-white mb-1">Ubicación</h4>
                                    <a
                                        href="https://maps.app.goo.gl/tVwPrr55o7ueQH7dA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors"
                                    >
                                        Avd Granada s/n, Jun. Granada 18213
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-navy/5 border border-slate-100 dark:border-slate-800 relative overflow-hidden h-full flex flex-col"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-12 flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">¡Mensaje enviado!</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                                        Gracias por contactar con Grupo RG. Te responderemos en menos de 24 horas.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 h-full flex flex-col"
                                >
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-bold text-navy dark:text-white mb-2">Nombre completo</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            required
                                            disabled={status === 'sending'}
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all dark:text-white"
                                            placeholder="Tu nombre aquí"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-navy dark:text-white mb-2">Correo electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            disabled={status === 'sending'}
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all dark:text-white"
                                            placeholder="email@ejemplo.com"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col">
                                        <label htmlFor="mensaje" className="block text-sm font-bold text-navy dark:text-white mb-2">Mensaje</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows="4"
                                            required
                                            disabled={status === 'sending'}
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            className="w-full flex-grow px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all dark:text-white resize-none"
                                            placeholder="¿En qué podemos ayudarte?"
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm font-medium">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className={`w-full py-5 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#4FB6F4] hover:bg-opacity-90 transform hover:-translate-y-1 shadow-primary/30'}`}
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Enviar Mensaje
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
