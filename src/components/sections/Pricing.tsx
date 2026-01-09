import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

const plans = [
    {
        name: 'Essencial',
        price: 'R$ 97',
        description: 'Para MEI e pequenas empresas que estão começando.',
        features: ['Controle de Fluxo de Caixa', 'Relatórios Básicos em PDF', 'Suporte por Email', '3 Usuários'],
        popular: false
    },
    {
        name: 'Profissional',
        price: 'R$ 197',
        description: 'A escolha certa para empresas em crescimento constante.',
        features: ['Tudo do Essencial', 'Dashboard Avançado', 'Projeção de Metas', 'Suporte Prioritário', '10 Usuários', 'Importação de OFX'],
        popular: true
    },
    {
        name: 'Empresa Plus',
        price: 'R$ 297',
        description: 'Gestão completa para negócios consolidados.',
        features: ['Tudo do Profissional', 'Multi-CNPJ', 'Integração via API', 'Gerente de Contas', 'Usuários Ilimitados', 'Consultoria Inicial'],
        popular: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Escolha o Plano Ideal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Pagamento único, acesso vitalício. Sem mensalidades surpresa.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={cn(
                                "relative p-8 rounded-2xl glass-card flex flex-col h-full",
                                plan.popular ? "border-primary shadow-[0_0_30px_rgba(67,56,202,0.3)] scale-105 z-10" : "border-white/10"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                    Mais Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-500 ml-2">/único</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-neon-blue mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "w-full py-3 rounded-lg font-semibold transition-all duration-300",
                                plan.popular
                                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50"
                                    : "bg-white/10 hover:bg-white/20 text-white"
                            )}>
                                Escolher {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
