"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ISideBarItem {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ href, title, icon }: ISideBarItem) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className="flex px-2  items-center cursor-pointer py-3"
      title={title}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className={`${selected ? "fill-primary" : "fill-muted-foreground "} flex-1 pr-1`}>
        {icon}
      </div>
      <p
        className={`inline-flex flex-[2.5] ${selected ? "text-primary font-semibold" : "text-muted-foreground"} overflow-hidden`}
      >
        {title}
      </p>
    </div>
  );
};
