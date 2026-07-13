"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Summary", href: "/summary" },
  { label: "Quality", href: "/quality" },
  { label: "Delivery", href: "/delivery" },
  { label: "Suppliers", href: "/suppliers" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);

  return (
    <Tabs
      value={activeIndex === -1 ? 0 : activeIndex}
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map((item) => (
        <Tab key={item.href} label={item.label} component={Link} href={item.href} />
      ))}
    </Tabs>
  );
}
