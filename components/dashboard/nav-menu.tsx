"use client";

import type { NavItem } from "@/types";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  items: NavItem[];
}

export default function NavMenu({ items }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <SidebarMenu className="gap-y-1.5">
      {items.map((item) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem
            key={item.id}
            className="relative flex flex-col items-stretch"
          >
            <SidebarMenuButton
              className="group/menu-button flex gap-x-2.5 font-medium h-9 rounded-md bg-linear-to-r hover:bg-transparent hover:from-primary/20 hover:to-primary/5 data-active:from-primary/20 data-active:to-primary/5 data-active:text-primary [&>svg]:size-auto cursor-pointer"
              render={<Link href={item.url} />}
              isActive={isActive}
            >
              <item.icon
                className="text-muted-foreground/60 group-hover/menu-button:text-primary group-data-active/menu-button:text-primary"
                size={22}
              />

              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
