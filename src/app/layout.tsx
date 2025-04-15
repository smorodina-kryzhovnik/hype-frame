import "./globals.css";
import Header from "@/components/Header";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hype Frame',
  description: 'Nevoobrazimiy hypeovoz dizayna i mydpoctu',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="box-border p-0 m-0 min-h-screen bg-dark-bg-primary text-dark-text-primary">
          <Header />
          <main className="pt-14">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>  
          </main>
        </div>
      </body>
    </html>
  );
}
