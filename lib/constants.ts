import type { NavItem } from "@/types";
import {
  HouseIcon,
  BoltIcon,
  DockIcon,
  BotMessageSquareIcon,
} from "lucide-react";

export const NAVMAIN: NavItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/home",
    icon: HouseIcon,
  },
  {
    id: 2,
    title: "AI Chat",
    url: "/chat",
    icon: BotMessageSquareIcon,
  },
  {
    id: 3,
    title: "Billing",
    url: "/billing",
    icon: DockIcon,
  },
  {
    id: 4,
    title: "Settings",
    url: "/settings",
    icon: BoltIcon,
  },
];
