import "./globals.css";

export const metadata = {
  title: "Cashbot",
  description: "Plan your finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full bg-zinc-100">
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
