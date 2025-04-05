"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";
import { navlist } from "@/shared/constants/navlist";
import Link from "next/link"; // Correct Link import
import { useLocale } from "next-intl";

interface NavListProps {
  className?: string;
}

export const NavList: React.FC<NavListProps> = (props) => {
  const { className } = props;
  const locale = useLocale();
  const pathname = usePathname();

  function renderNavigationMenuLink() {
    if (!navlist) return null;

    return navlist.map(({ href, label }) => {
      const linkPath = `/${locale}${href}`;
      const normalizedPathname = pathname.replace(/\/$/, ""); 
      const normalizedLinkPath = linkPath.replace(/\/$/, "");
      const isActive = normalizedPathname === normalizedLinkPath;

      return (
        <NavigationMenuItem key={href} className="list-none">
          <Link href={linkPath} passHref legacyBehavior>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                isActive && "bg-accent"
              )}
            >
              {label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    });
  }

  return (
    <NavigationMenu className={cn(className, "gap-4")}>
      {renderNavigationMenuLink()}
    </NavigationMenu>
  );
};
