import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center px-4 py-2 rounded-full glass border-primary/30 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-neon-blue mr-2 animate-pulse" />
                    <span className="text-sm text-gray-300">Novidade: Versão 3.0 disponível</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    A Gestão da Sua Empresa <br />
                    <span className="text-gradient">Começa Aqui</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    A planilha empresarial mais completa, simples e inteligente que você já viu.
                    Controle total em uma única tela.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#pricing"
                        className="group relative px-8 py-4 bg-primary rounded-full text-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(67,56,202,0.5)] hover:shadow-[0_0_40px_rgba(67,56,202,0.7)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center">
                            Quero Acessar Agora <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                    </a>

                    <a
                        href="#product"
                        className="px-8 py-4 glass rounded-full text-lg font-semibold text-white hover:bg-white/10 transition-all flex items-center"
                    >
                        Ver Demonstração
                    </a>
                </motion.div>

                {/* Dashboard Preview Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring" }}
                    className="mt-20 mx-auto max-w-5xl perspective-1000"
                >
                    <div className="relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                            alt="Dashboard Preview"
                            className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
