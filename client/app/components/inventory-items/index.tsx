// ~/components/inventory-items/index.tsx
"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Ellipsis,
  List,
  LayoutGrid,
  Plus,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import sidebarIds from "~/components/sidebar/ids.json";
import SidebarComponent from "~/components/sidebar/index";
import { Button } from "~/components/ui/button";
import { DataTableDemo } from "~/components/inventory-items/table";
import { cn } from "~/lib/utils";

interface ActionsType {
  filter: number;
  sort: number;
  sortDirection: "asc" | "desc";
  import: string | null;
  export: string | null;
}

export default function index() {
  const { t } = useTranslation();
  const filterOptions = t("pages.inventory.items.filter.options").split(";");
  const sortOptions = t("pages.inventory.items.actions.sort.options").split(
    ";"
  );
  const importOptions = t("pages.inventory.items.actions.import.options").split(
    ";"
  );
  const exportOptions = t("pages.inventory.items.actions.export.options").split(
    ";"
  );
  const [actions, setActions] = useState<ActionsType>({
    filter: 0,
    sort: 0,
    sortDirection: "asc",
    import: null,
    export: null,
  });
  return (
    <SidebarProvider>
      <SidebarComponent
        currentPage={sidebarIds.inventory.items}
        currentPageParent={sidebarIds.main.inventory}
      />
      {/* M = main */}
      <SidebarInset className="@container/M p-4 flex flex-col gap-8">
        <header className="flex items-center-safe justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="text-lg group/dropdown-menu"
              asChild
            >
              <Button variant="outline">
                {filterOptions[actions.filter]}
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/dropdown-menu:rotate-90" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuGroup>
                {filterOptions.map((option, index) => {
                  return (
                    <DropdownMenuItem
                      key={`filter-option-${option}`}
                      className={cn(
                        "w-full text-nowrap flex items-center-safe justify-between gap-x-4",
                        index === actions.filter &&
                          "bg-blue-300 text-white pointer-events-none"
                      )}
                      onClick={() => setActions({ ...actions, filter: index })}
                    >
                      {option}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="w-full text-nowrap">
                  {t("pages.inventory.items.filter.custom")}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center-safe justify-end gap-8">
            <div>
              <Button variant={"outline"} className="rounded-r-none border-r-0">
                <List />
              </Button>
              <Button variant={"outline"} className="rounded-l-none">
                <LayoutGrid />
              </Button>
            </div>
            <Button className="bg-blue-400 hover:bg-blue-500">
              <Plus />
              {t("pages.inventory.items.newItem.display")}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {t("pages.inventory.items.actions.import.display")}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          key={`import-option-${importOptions[0]}`}
                          className={cn("w-full text-nowrap")}
                        >
                          {importOptions[0]}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          key={`import-option-${importOptions[1]}`}
                          className={cn("w-full text-nowrap")}
                        >
                          {importOptions[1]}
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {t("pages.inventory.items.actions.export.display")}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          key={`export-option-${exportOptions[0]}`}
                          className={cn("w-full text-nowrap")}
                        >
                          {exportOptions[0]}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          key={`export-option-${exportOptions[1]}`}
                          className={cn("w-full text-nowrap")}
                        >
                          {exportOptions[1]}
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {t("pages.inventory.items.actions.preferences.display")}
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {t("pages.inventory.items.actions.refresh.display")}
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RefreshCw className="text-blue-500" />
                    {t(
                      "pages.inventory.items.actions.resetColumnWidth.display"
                    )}
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main>
          <DataTableDemo />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
