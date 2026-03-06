import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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

        {/* UTMfy Pixel Script */}
        <Script id="utmfy-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "69aa280dacfe402920a132b0";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* UTMfy UTMS Script */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
