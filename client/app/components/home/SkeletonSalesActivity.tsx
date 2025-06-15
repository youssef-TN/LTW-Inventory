// ~/components/home/SkeletonSalesActivity.tsx
"use client";

import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";

import { cn } from "~/lib/utils";

export default function SkeletonSalesActivity({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  return (
    // SA = sales-activities
    <Card className={cn("@container/SA pt-0 gap-0", className)}>
      <CardHeader className="px-3 py-4 bg-gray-100 rounded-t-xl items-center-safe gap-0">
        <CardTitle>{t("pages.home.widgets.salesActivities.title")}</CardTitle>
      </CardHeader>
      <CardContent className="border-t px-3 py-8 gap-4 flex flex-row justify-evenly overflow-auto">
        <div className="flex flex-col gap-4 items-center-safe">
          <Skeleton className="h-20 w-20 rounded-full bg-muted" />
          <Skeleton className="h-8 w-full bg-muted" />
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>
        <div className="flex flex-col gap-4 items-center-safe">
          <Skeleton className="h-20 w-20 rounded-full bg-muted" />
          <Skeleton className="h-8 w-full bg-muted" />
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>
        <div className="flex flex-col gap-4 items-center-safe">
          <Skeleton className="h-20 w-20 rounded-full bg-muted" />
          <Skeleton className="h-8 w-full bg-muted" />
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>
        <div className="flex flex-col gap-4 items-center-safe">
          <Skeleton className="h-20 w-20 rounded-full bg-muted" />
          <Skeleton className="h-8 w-full bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
