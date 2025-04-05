import { ThemeProvider } from "../../shared/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { TheHeader } from "@/widgets/TheHeader";
import { notFound } from "next/navigation";
import { routing } from "@/shared/config/i18n/routing";

import "./styles/global.css";

type RootLayoutTypeProps = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutTypeProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TheHeader />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
