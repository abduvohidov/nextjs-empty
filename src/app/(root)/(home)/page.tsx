import { ThemeDropdown } from "@/features/ThemeDropdown/ui/ThemeDropdown";
import { Button } from "@/shared/ui/button";
import { TestUikits } from "@/widgets/TestUiKits";
import { TheHeader } from "@/widgets/TheHeader";

export default function Home() {
  return (
    <>
      <TheHeader />
      <TestUikits />
    </>
  );
}
