import { FC } from "react";
import { ThemeDropdown } from "@/features/ThemeDropdown";

export const TheHeader: FC = () => {
  return (
    <header>
      <div className="container mx-auto pt-5">
        <div className="flex justify-end">
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
};
