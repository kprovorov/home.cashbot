import "./globals.css";

export const metadata = {
  title: "Cashbot",
  description: "Plan your finances",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#f4f4f5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="antialiased bg-gray-lightest text-base text-gray-dark h-full"
    >
      <body className="h-full">{children}</body>
    </html>
  );
}
