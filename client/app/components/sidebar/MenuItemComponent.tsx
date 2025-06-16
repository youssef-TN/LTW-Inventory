// components/sidebar/MenuItemComponent.tsx
"use client";

import * as React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "~/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { cn } from "~/lib/utils";

// Define the structure of sidebar items
export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  url?: string;
  children?: SidebarItem[];
}

export interface MenuItemComponentProps {
  data: SidebarItem;
  currentPage?: string;
  currentPageParent?: string | null;
}

// Renders individual sidebar items (with or without children)
export default function component({
  data,
  currentPage,
  currentPageParent,
}: MenuItemComponentProps) {
  if (data.children) {
    return (
      <SidebarMenu>
        <Collapsible
          defaultOpen={data.id === currentPageParent}
          className={cn(
            "group/collapsible",
            data.id === currentPageParent && "text-blue-400"
          )}
          asChild
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={data.label} asChild>
                <button className="cursor-pointer">
                  {data.icon && <data.icon />}
                  <span>{data.label}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </button>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {data.children.map((subItem) => {
                  return (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton
                        className={cn(
                          subItem.id === currentPage &&
                            "bg-blue-400 text-white pointer-events-none opacity-50"
                        )}
                        aria-disabled={subItem.id === currentPage}
                        tabIndex={subItem.id === currentPage ? -1 : undefined}
                        asChild
                      >
                        <Link to={subItem.url || "/404"}>
                          <span>{subItem.label}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          className={cn(
            data.id === currentPage &&
              "bg-blue-400 text-white pointer-events-none opacity-50"
          )}
          aria-disabled={data.id === currentPage}
          tabIndex={data.id === currentPage ? -1 : undefined}
          tooltip={data.label}
          asChild
        >
          <Link to={data.url || "/404"}>
            {data.icon && <data.icon />}
            <span>{data.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
