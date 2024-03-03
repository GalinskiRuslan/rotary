import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from "next-intl";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stars of Rotary",
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Show a 404 error if the user requests an unknown locale
  if (locale !== locale) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>

        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>

      </html>
    </NextIntlClientProvider>
  );

}