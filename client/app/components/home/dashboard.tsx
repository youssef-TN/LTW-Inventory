// ~/components/home/Dashboard.tsx
"use client";

import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import SidebarComponent from "~/components/sidebar/index";
import sidebarIds from "~/components/sidebar/ids.json";
import SkeletonInventorySummary from "./SkeletonInventorySummary";
import SkeletonItemDetails from "./SkeletonItemDetails";
import SkeletonPurchaseOrder from "./SkeletonPurchaseOrder";
import SkeletonSalesActivity from "./SkeletonSalesActivity";

export default function index() {
  return (
    <SidebarProvider>
      <SidebarComponent
        currentPage={sidebarIds.main.home}
        currentPageParent={null}
      />
      {/* D = dashboard */}
      <SidebarInset className="@container/D p-4 flex flex-col gap-8">
        {/* R1 = row-1 */}
        <div className="@container/R1 flex flex-col @lg/D:flex-row gap-4">
          <SkeletonSalesActivity className="min-w-[60%] shrink" />
          <SkeletonInventorySummary className="min-w-[35%] shrink-0" />
        </div>
        {/* R2 = row-2 */}
        <div className="@container/R2 flex flex-col @lg/D:flex-row gap-8">
          <SkeletonItemDetails className="min-w-[60%]" />
        </div>
        {/* R3 = row-3 */}
        <div className="@container/R3 flex flex-col @lg/D:flex-row gap-8">
          <SkeletonPurchaseOrder className="min-w-[35%] shrink-0" />
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl flex-grow-[1] max-w-full"></div>
      </SidebarInset>
    </SidebarProvider>
  );
}
