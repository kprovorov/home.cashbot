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
    <html
      lang="en"
      className="antialiased bg-gray-lightest text-base text-gray-dark h-full"
    >
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#f4f4f5" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />
        <title>Cashbot</title>
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
