import { FC } from "react";
import { Text } from "../Text";
import { cn } from "@/shared/lib/cn";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Text variant="code-inline-2" className={cn(className, "italic")}>
      NextJS
    </Text>
  );
};