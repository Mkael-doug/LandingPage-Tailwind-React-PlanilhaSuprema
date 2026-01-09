

const testimonials = [
    {
        name: "Carlos Eduardo",
        role: "CEO na TechStart",
        text: "Mudou completamente a forma como enxergamos o financeiro da empresa. Visual incrível e muito fácil de usar.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Fernanda Silva",
        role: "Diretora Financeira",
        text: "Já testei dezenas de planilhas e softwares, mas nada se compara à praticidade e beleza da Planilha Suprema.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Roberto Mendes",
        role: "Empreendedor",
        text: "O dashboard automático é sensacional. Consigo tomar decisões rápidas olhando apenas uma tela.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Juliana Costa",
        role: "Gerente de Loja",
        text: "Simplesmente fantástica. O suporte é rápido e a planilha é muito intuitive. Recomendo para todos.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
                <p className="text-gray-400">Junte-se a milhares de empresários satisfeitos.</p>
            </div>

            <div className="relative overflow-hidden w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900/50 to-transparent z-10" />

                <div className="flex w-max animate-marquee gap-8 px-8">
                    {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
                        <div key={index} className="w-[350px] glass-card p-6 rounded-xl flex-shrink-0">
                            <div className="flex items-center mb-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary/50" />
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-gray-400">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline styles for custom marquee animation not covered by Tailwind defaults easily without config */}
            <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
