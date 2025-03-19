import { Button } from "@/shared/ui/button";
import { FC } from "react";

export const TestUikits: FC = () => {
  return (
    <div className="m-10 flex gap-4">
      <Button className="mt-5" variant="default">
        Click me
      </Button>
      <Button className="mt-5" variant="destructive">
        Click me
      </Button>
      <Button size="lg" className="mt-5" variant="outline">
        Click me
      </Button>
      <Button size="sm" className="mt-5" variant="link">
        Click me
      </Button>
    </div>
  );
};
