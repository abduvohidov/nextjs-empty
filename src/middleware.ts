import createMiddleware from "next-intl/middleware";
import { locales } from "@/shared/constants/locales";

export default createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ru)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
