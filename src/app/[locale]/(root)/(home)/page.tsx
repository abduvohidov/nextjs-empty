import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/Text";
import { TheHeader } from "@/widgets/TheHeader";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <TheHeader />
      <div className="flex flex-col justify-center items-center h-screen">
        <Text variant="display-4">Next JS</Text>
        <Button className="mt-3 text-lg" variant="default" size="sm">
          <Link
            href="https://nextjs.org/docs/app/getting-started/installation"
            target="_blank"
          >
            {t("HomePage.readMore")}
          </Link>
        </Button>
      </div>
    </>
  );
}
