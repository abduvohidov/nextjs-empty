"use client";

import React from "react";
import { Button } from "@/shared/ui/button";

export const TestUikits: React.FC = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-center gap-4">
        <Button size="lg" className="mt-5" variant="default">
          Click me
        </Button>
        <Button size="default" className="mt-5" variant="destructive">
          Click me
        </Button>
        <Button size="sm" className="mt-5" variant="outline">
          Click me
        </Button>
      </div>
    </div>
  );
};
