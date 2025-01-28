// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Menu, X } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'República Dauhma',
  description: 'O lugar onde tradição e inovação se encontram',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Sticky Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around items-center h-16">
              {/* Logo */}
              <a href="#inicio" className="text-2xl font-bold">
                República Dauhma
              </a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#inicio" className="hover:text-purple-200 transition duration-300">
                  Início
                </a>
                <a href="#sobre-casa" className="hover:text-purple-200 transition duration-300">
                  Sobre a Casa
                </a>
                <a href="#sobre-nos" className="hover:text-purple-200 transition duration-300">
                  Sobre Nós
                </a>
                <a href="#contato" className="hover:text-purple-200 transition duration-300">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>© 2024 República Dauhma. Todos os direitos reservados.</div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300">Desenvolvedor</a>
                <a href="#" className="hover:text-gray-300">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}