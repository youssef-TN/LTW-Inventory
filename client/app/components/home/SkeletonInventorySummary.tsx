// ~/components/home/SkeletonInventorySummary.tsx
"use client";

import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";

import { cn } from "~/lib/utils";

export default function SkeletonInventorySummary({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  return (
    // IS = inventory-summary
    <Card className={cn("@container/IS pt-0 gap-0 h-fit", className)}>
      <CardHeader className="px-3 py-4 bg-gray-100 rounded-t-xl items-center-safe gap-0">
        <CardTitle>{t("pages.home.widgets.inventorySummary.title")}</CardTitle>
      </CardHeader>
      <CardContent className="border-t px-3 py-8 flex flex-col gap-4 ">
        <div className="flex flex-row gap-4 items-center-safe justify-center-safe">
          <Skeleton className="h-8 w-3/4 rounded-lg bg-muted" />
          <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
        </div>
        <Separator orientation="horizontal" className="" />
        <div className="flex flex-row gap-4 items-center-safe justify-center-safe">
          <Skeleton className="h-8 w-3/4 rounded-lg bg-muted" />
          <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}