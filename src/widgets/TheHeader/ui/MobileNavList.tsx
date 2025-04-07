"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "@/shared/ui/Logo";
import { navlist } from "@/shared/constants/navlist";
import { ThemeDropdown } from "@/features/ThemeDropdown";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { DialogTitle } from "@/shared/ui/dialog";

export const MobileNavList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <DialogTitle></DialogTitle>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="!size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="px-6 pt-4 pb-12">
          <Logo />
          <div className="flex item-center gap-5">
            <Suspense fallback={null}>
              <LanguageSwitcher />
            </Suspense>
            <ThemeDropdown />
          </div>
          <ul className="list-none">
            {navlist.map(({ href, label }) => (
              <li key={href} className="pt-3">
                <Link
                  href={href}
                  className={cn(
                    "block text-lg font-medium hover:text-primary",
                    pathname === href && "text-primary font-semibold"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
