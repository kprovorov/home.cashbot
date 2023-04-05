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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
