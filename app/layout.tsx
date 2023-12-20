import "./globals.css";
import Image from "next/image";

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
      <body className="h-full">
        <div className="flex flex-col justify-between items-center p-12 h-full">
          <div className="flex flex-col justify-start items-stretch gap-10">
            <div className="flex justify-center">
              <Image alt="cashbot" src="/icon.svg" width="100" height="100" />
            </div>
            <div>{children}</div>
          </div>
          <div className="text-gray">Made in Ukraine 🇺🇦</div>
        </div>
      </body>
    </html>
  );
}
