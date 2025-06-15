// ~/components/home/SkeletonPurchaseOrder.tsx
"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";

import { cn } from "~/lib/utils";

export default function SkeletonPurchaseOrder({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  const dateList = [
    t("common.time.periods.today"),
    t("common.time.periods.yesterday"),
    t("common.time.periods.thisWeek"),
    t("common.time.periods.lastWeek"),
    t("common.time.periods.thisMonth"),
    t("common.time.periods.lastMonth"),
    t("common.time.periods.thisYear"),
    t("common.time.periods.lastYear"),
  ];
  const [sortByDate, setSortByDate] = useState(2);
  return (
    // PO = purchase-order
    <Card className={cn("@container/PO pt-0 gap-0 h-fit", className)}>
      <CardHeader className="px-3 py-4 bg-gray-100 rounded-t-xl flex flex-row items-center-safe justify-between gap-0">
        <CardTitle>{t("pages.home.widgets.purchaseOrder.title")}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{dateList[sortByDate]}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup
              value={sortByDate.toString()}
              onValueChange={(value) => setSortByDate(Number(value))}
            >
              {dateList.map((value, index) => (
                <DropdownMenuRadioItem
                  key={`purchase-order-${value}`}
                  value={index.toString()}
                >
                  {value}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
            {/* custom date for the future*/}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="border-t px-3 py-8 flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 items-center-safe justify-center-safe">
          <Skeleton className="h-8 w-1/2 rounded-lg bg-muted" />
          <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
        </div>
        <Separator orientation="horizontal" className="" />
        <div className="flex flex-col gap-4 items-center-safe justify-center-safe">
          <Skeleton className="h-8 w-1/2 rounded-lg bg-muted" />
          <Skeleton className="h-8 w-1/4 rounded-lg bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
