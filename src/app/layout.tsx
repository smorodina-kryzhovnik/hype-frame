import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="box-border p-0 m-0 min-h-screen bg-neutral-900 text-neutral-200">
          {children}
        </div>
      </body>
    </html>
  );
}
