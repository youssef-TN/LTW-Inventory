// components/sidebar/index.tsx
"use client";

import { Command } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "~/components/ui/sidebar";

import { sidebarData } from "./data";
import ids from "./ids.json";

import MenuItemComponent from "./MenuItemComponent";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export interface SidebarProps {
  currentPage: string;
  currentPageParent: string | null;
}

export default function component({
  currentPage,
  currentPageParent,
}: SidebarProps) {
  const data = sidebarData();

  return (
    <Sidebar variant="inset" collapsible="icon" className="pe-0">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">LTW</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <ScrollArea>  
        <SidebarGroup className="space-y-2">
          <MenuItemComponent
            data={data[ids.main.home]}
            currentPage={currentPage}
            currentPageParent={currentPageParent}
          />
          <MenuItemComponent
            data={data[ids.main.inventory]}
            currentPage={currentPage}
            currentPageParent={currentPageParent}
          />
        </SidebarGroup>
        <SidebarGroup className="space-y-2">
          <MenuItemComponent
            data={data[ids.main.sales]}
            currentPage={currentPage}
            currentPageParent={currentPageParent}
          />
          <MenuItemComponent
            data={data[ids.main.purchases]}
            currentPage={currentPage}
            currentPageParent={currentPageParent}
          />
        </SidebarGroup>
        <SidebarGroup className="space-y-2">
        <MenuItemComponent
          data={data[ids.main.reports]}
          currentPage={currentPage}
          currentPageParent={currentPageParent}
          />
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
