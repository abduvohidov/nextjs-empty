import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Text variant="display-4">Next JS</Text>
        <Text variant="display-2" className="font-medium text-center">
          {t("landing.title")}
        </Text>
      </div>
    </>
  );
}
