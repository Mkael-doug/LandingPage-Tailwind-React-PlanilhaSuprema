import { motion, useScroll, useTransform } from 'framer-motion';

export function ProductShowcase() {
    const { scrollYProgress } = useScroll();
    const rotateX = useTransform(scrollYProgress, [0.2, 0.5], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

    return (
        <section id="product" className="py-24 bg-slate-900/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Visual Profissional, <br />
                        <span className="text-gradient">Dados Claros</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400">
                        Interface intuitiva projetada para facilitar a tomada de decisão.
                    </p>
                </div>

                {/* Mockups Container */}
                <div className="relative h-[600px] w-full max-w-6xl mx-auto flex justify-center items-center">

                    {/* Laptop (Center & Back) */}
                    <motion.div
                        style={{ rotateX, scale, opacity }}
                        className="absolute z-10 w-[100%] md:w-[80%] max-w-4xl shadow-2xl rounded-xl overflow-hidden border-4 border-slate-700 bg-slate-800"
                    >
                        <div className="bg-slate-800 h-6 flex items-center px-4 space-x-2 border-b border-slate-700">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <img
                            src="/assets/dashboard/start-desktop.png"
                            alt="Desktop Dashboard"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Tablet (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute left-0 -bottom-6 md:left-0 md:bottom-0 z-20 w-[45%] md:w-[40%] max-w-md shadow-2xl rounded-xl overflow-hidden border-4 border-slate-700 bg-slate-800"
                        style={{ y: 50 }}
                    >
                        <img
                            src="/assets/dashboard/start-tablet.png"
                            alt="Tablet Dashboard"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Mobile (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute right-0 -bottom-10 md:right-0 md:bottom-[-40px] z-30 w-[25%] md:w-[20%] max-w-[200px] shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-slate-700 bg-slate-800"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-slate-700 rounded-b-xl z-10" />
                        <img
                            src="/assets/dashboard/start-mobile.png"
                            alt="Mobile Dashboard"
                            className="w-full h-full object-cover aspect-[9/19]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
