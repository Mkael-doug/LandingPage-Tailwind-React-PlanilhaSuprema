export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p className="mb-4">&copy; {new Date().getFullYear()} Planilha Empresarial Suprema. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Suporte</a>
                </div>
            </div>
        </footer>
    );
}
