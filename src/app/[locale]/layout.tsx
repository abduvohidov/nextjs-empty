import { ThemeProvider } from "../../shared/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import "./styles/global.css";
import { TheHeader } from "@/widgets/TheHeader";

type RootLayoutTypeProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: RootLayoutTypeProps) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme={"dark"}>
            <TheHeader />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
