import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Páscoa Mágica - Oferta Exclusiva",
  description: "Alegria instantânea por um preço pequeno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased min-h-screen font-sans`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.addEventListener('keydown', event => {
                if (event.ctrlKey && (event.key === 'c' || event.key === 'C' || event.key === 'x' || event.key === 'X' || event.key === 'P' || event.key === 'p' || event.key === 'S' || event.key === 's' || event.key === 'U' || event.key === 'u')) {
                  event.preventDefault();
                }
              });
              document.addEventListener('dragstart', event => event.preventDefault());
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
