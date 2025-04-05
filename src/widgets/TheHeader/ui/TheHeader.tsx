import { FC, Suspense } from "react";
import { NavList } from "./NavList";
import { MobileNavList } from "./MobileNavList";
import { Logo } from "@/shared/ui/Logo";
import { ThemeDropdown } from "@/features/ThemeDropdown";
import { LanguageSwitcher } from "@/features/LanguageSwitcher/ui/LanguageSwitcher";

export const TheHeader: FC = () => {
  return (
    <header>
      <div className="container mx-auto pt-5 px-10">
        <div className="flex justify-between items-center">
          <Logo />
          <NavList className="max-lg:hidden" />

          <div className="max-lg:hidden flex item-center gap-5">
            <Suspense fallback={null}>
              <LanguageSwitcher />
            </Suspense>
            <ThemeDropdown />
          </div>

          <MobileNavList />
        </div>
      </div>
    </header>
  );
};
