import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/shared/constants/locales";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

type CustomGetPathnameTypes = {
  pathname?: string;
  locale: string;
};

export const customGetPathname = ({
  pathname,
  locale,
}: CustomGetPathnameTypes) => {
  if (pathname === "/" || !pathname) return `/${locale}`;
  return pathname.replace(/^\/[^/]+/, `/${locale}`);
};
