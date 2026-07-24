import {
  BoltIcon,
  BotMessageSquareIcon,
  DockIcon,
  HouseIcon,
} from "lucide-react";
import type { NavItem } from "@/types";

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
