import { cn } from "@/shared/lib/cn";
import { FC, JSX, ReactNode } from "react";

export const TEXT_VARIANTS = [
  "display-4",
  "display-3",
  "display-2",
  "display-1",
  "header-2",
  "header-1",
  "subheader-3",
  "subheader-2",
  "subheader-1",
  "body-3",
  "body-2",
  "body-1",
  "body-short",
  "caption-2",
  "caption-1",
  "code-3",
  "code-inline-3",
  "code-2",
  "code-inline-2",
  "code-1",
  "code-inline-1",
] as const;

export interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: (typeof TEXT_VARIANTS)[number] | "inherit";
  ellipsis?: boolean;
  ellipsisLines?: number;
  whiteSpace?: "nowrap" | "break-spaces";
  wordBreak?: "break-all" | "break-word";
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<NonNullable<TextProps["variant"]>, string> = {
  "display-4": "text-5xl font-semibold",
  "display-3": "text-4xl font-semibold",
  "display-2": "text-3xl font-semibold",
  "display-1": "text-2xl font-semibold",
  "header-2": "text-xl font-bold",
  "header-1": "text-lg font-bold",
  "subheader-3": "text-lg font-semibold",
  "subheader-2": "text-base font-semibold",
  "subheader-1": "text-sm font-semibold",
  "body-3": "text-lg",
  "body-2": "text-base",
  "body-1": "text-sm",
  "body-short": "text-sm leading-tight",
  "caption-2": "text-xs",
  "caption-1": "text-[10px]",
  "code-3": "text-lg font-mono",
  "code-inline-3": "text-lg font-mono inline",
  "code-2": "text-base font-mono",
  "code-inline-2": "text-base font-mono inline",
  "code-1": "text-sm font-mono",
  "code-inline-1": "text-sm font-mono inline",
  inherit: "",
};

const wordBreakStyles: Record<NonNullable<TextProps["wordBreak"]>, string> = {
  "break-all": "break-all",
  "break-word": "break-words",
};

const whiteSpaceStyles: Record<NonNullable<TextProps["whiteSpace"]>, string> = {
  nowrap: "whitespace-nowrap",
  "break-spaces": "whitespace-pre-wrap",
};

const ellipsisLineClamp = (lines: number) =>
  `overflow-hidden line-clamp-${lines} block`;

export const Text: FC<TextProps> = ({
  as: Tag = "p",
  variant = "body-1",
  ellipsis = false,
  ellipsisLines,
  whiteSpace,
  wordBreak,
  className,
  children,
}) => {
  return (
    <Tag
      className={cn(
        variantStyles[variant],
        ellipsis && "truncate",
        ellipsisLines && ellipsisLineClamp(ellipsisLines),
        whiteSpace && whiteSpaceStyles[whiteSpace],
        wordBreak && wordBreakStyles[wordBreak],
        className
      )}
      title={ellipsis ? String(children) : undefined}
    >
      {children}
    </Tag>
  );
};
