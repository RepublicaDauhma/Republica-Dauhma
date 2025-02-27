// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { GoogleTag } from "../../components/GoogleTag/GoogleTag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "República Dauhma",
  description: "O lugar onde tradição e inovação se encontram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
    <GoogleTag />
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://i.ibb.co/8Dgb1sJP/logo-dauhma-bata-branco.png"
        />
        <meta
          property="og:title"
          content="República Dauhma - Estudantes Universitários em São Carlos"
        />
        <meta
          property="og:descri ption"
          content="A República Dauhma é uma comunidade de estudantes universitários em São Carlos, oferecendo um ambiente de moradia e convivência para jovens universitários."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/1fFyhrXs/image.png"
        />

        <title>
          República Dauhma - Estudantes Universitários em São Carlos
        </title>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Sticky Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-gray text-white shadow-lg backdrop-blur-sm">
          <Navbar></Navbar>
        </nav>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <footer>
                © 2024 República Dauhma. Todos os direitos reservados.
              </footer>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/cyrqrz"
                  className="hover:text-gray-300"
                >
                  Desenvolvedor
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
