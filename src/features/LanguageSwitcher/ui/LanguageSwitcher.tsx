"use client";

import { customGetPathname } from "@/shared/config/i18n/routing";
import { cn } from "@/shared/lib/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const handleLangChange = (lang: string) => {
    if (lang) {
      const newPathname = customGetPathname({
        pathname,
        locale: lang,
      });

      const newUrl = `${newPathname}${
        searchParams.toString() ? `?${searchParams.toString()}` : ""
      }`;

      router.push(newUrl);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  return (
    <div className={cn(className)}>
      <Select onValueChange={handleLangChange} value={locale}>
        <SelectTrigger className="w-[145px]">
          <Globe className="mr-2 h-4 w-4" />
          <SelectValue placeholder={locale} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
