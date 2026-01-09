import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, DollarSign, Target, Smartphone } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: "Controle Automatizado",
        description: "Registre receitas e despesas com categorização automática e visão clara do fluxo de caixa."
    },
    {
        icon: Target,
        title: "Metas e Projeções",
        description: "Defina objetivos financeiros e acompanhe o progresso em tempo real com indicadores precisos."
    },
    {
        icon: PieChart,
        title: "Dashboard Inteligente",
        description: "Visualize todos os seus dados em gráficos interativos e dinâmicos que facilitam a análise."
    },
    {
        icon: TrendingUp,
        title: "Indicadores em Tempo Real",
        description: "Tenha acesso imediato a métricas vitais como ROI, Margem de Lucro e Ponto de Equilíbrio."
    },
    {
        icon: Smartphone,
        title: "Acesso Mobile",
        description: "Sua planilha otimizada para funcionar perfeitamente em tablets e smartphones."
    },
    {
        icon: BarChart3,
        title: "Relatórios Prontos",
        description: "Gere relatórios profissionais em PDF com um clique para apresentar a sócios ou investidores."
    }
];

export function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Por que a <span className="text-primary">Planilha Suprema</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Ferramentas avançadas simplificadas para você focar no que importa: o crescimento do seu negócio.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-8 rounded-2xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 relative z-10">
                                <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
