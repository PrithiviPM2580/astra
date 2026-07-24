"use client";

import SearchForm from "./search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "../logo";
import { NAVMAIN } from "@/lib/constants";
import NavMenu from "./nav-menu";
import NavUser from "./nav-user";
import NavNotes from "./nav-notes";
import { Separator } from "../ui/separator";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Design Engineering",
      url: "#",
    },
    {
      name: "Sales & Marketing",
      url: "#",
    },
    {
      name: "Travel",
      url: "#",
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="z-50">
      <SidebarHeader className="px-4">
        <div className="w-full flex items-center justify-between">
          <Logo size="size-8" />
          <SidebarTrigger className="-ms-4" />
        </div>
        <Separator />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="px-2 pt-2 overflow-x-hidden">
        <NavMenu items={NAVMAIN} />
        <NavNotes projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
