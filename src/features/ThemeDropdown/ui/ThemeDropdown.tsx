"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/cn";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";

interface ThemeDropdownProps {
  className?: string;
}

export const ThemeDropdown: React.FC<ThemeDropdownProps> = ({ className }) => {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("theme");

  const renderIcon =
    theme === "light" ? (
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    ) : (
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    );

  const renderThemeText = theme === "dark" ? t("dark") : t("light");

  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="lg">
            {renderIcon}
            <Text>{renderThemeText}</Text>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            {t("light")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {t("dark")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
