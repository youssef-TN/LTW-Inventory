// ~/components/home/SkeletonItemDetails.tsx
"use client";

import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";

import { cn } from "~/lib/utils";

export default function SkeletonItemDetails({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  return (
    // ID = item-details
    <Card className={cn("@container/ID pt-0 gap-0 h-fit", className)}>
      <CardHeader className="px-3 py-4 bg-gray-100 rounded-t-xl items-center-safe gap-0">
        <CardTitle>{t("pages.home.widgets.itemDetails.title")}</CardTitle>
      </CardHeader>
      <CardContent className="border-t px-3 py-8 gap-4 flex flex-row justify-baseline overflow-auto">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center-safe justify-center-safe">
            <Skeleton className="h-8 w-3/4 rounded-lg bg-muted" />
            <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
          </div>
          <Separator orientation="horizontal" className="" />
          <div className="flex flex-row gap-4 items-center-safe justify-center-safe">
            <Skeleton className="h-8 w-3/4 rounded-lg bg-muted" />
            <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
          </div>
          <Separator orientation="horizontal" className="" />
          <div className="flex flex-row gap-4 items-center-safe justify-center-safe">
            <Skeleton className="h-8 w-3/4 rounded-lg bg-muted" />
            <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
          </div>
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>

        <div className="flex-none flex flex-col gap-4 items-center-safe justify-center-safe">
          <Skeleton className="h-8 w-full rounded-lg bg-muted" />
          <Skeleton className="h-32 w-32 rounded-full bg-muted flex items-center-safe justify-center-safe">
            <Skeleton className="h-16 w-16 rounded-full bg-white"></Skeleton>
          </Skeleton>
        </div>
      </CardContent>
    </Card>
  );
}
