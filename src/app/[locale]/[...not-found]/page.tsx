import { useTranslations } from "next-intl";
import { Link } from "@/shared/config/i18n/routing";
import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/Text";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div>
      <div className="container mx-auto sm:py-48 py-40 px-5 sm:px-0">
        <Text className="text-center font-extrabold text-9xl">404</Text>
        <Text variant="display-3" className="text-center">
          {t("notfound.title")}
        </Text>
        <Text variant="body-3" className="font-normal text-center">
          {t("notfound.description")}
        </Text>
        <div className="flex justify-center mt-3">
          <Link href="/">
            <Button variant={"secondary"}>{t("notfound.gohome")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
