import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";

export default function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props} className="">
      <SidebarGroup className="py-0 px-0! w-full">
        <SidebarGroupContent className="relative">
          <div className="flex w-full max-w-xs flex-col gap-6">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
