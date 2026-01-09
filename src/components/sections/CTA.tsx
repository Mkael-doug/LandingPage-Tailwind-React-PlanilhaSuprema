import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                >
                    Transforme sua gestão <br />
                    <span className="text-white block mt-2">empresarial hoje mesmo.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
                    >
                        Garantir Minha Planilha <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </motion.div>

                <p className="mt-8 text-gray-500 text-sm">Satisfação garantida ou seu dinheiro de volta em 7 dias.</p>
            </div>
        </section>
    );
}
