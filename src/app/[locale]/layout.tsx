import { ThemeProvider } from "../../shared/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./styles/global.css";

type RootLayoutTypeProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: RootLayoutTypeProps) {
  const locale = await getLocale();
  const messages = getMessages();

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
