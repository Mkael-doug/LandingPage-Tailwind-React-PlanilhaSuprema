import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Benefícios', href: '#benefits' },
        { name: 'Produto', href: '#product' },
        { name: 'Planos', href: '#pricing' },
        { name: 'Depoimentos', href: '#testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Planilha<span className="text-primary">Suprema</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white hover:text-neon-blue transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#pricing"
                        className="px-6 py-2 bg-primary hover:bg-primary/80 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(67,56,202,0.5)] hover:shadow-[0_0_25px_rgba(67,56,202,0.6)]"
                    >
                        Comprar Agora
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-white/10"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            className="px-6 py-2 bg-primary text-center text-white rounded-full font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Comprar Agora
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
