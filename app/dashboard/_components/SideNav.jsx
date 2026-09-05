"use client";
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function SideNav() {
  const MenuOptions = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade Plan",
      path: "/upgrade-plan",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  const path = usePathname();
  return (
    <div className="h-full w-64 p-5 shadow-lg shadow-gray-400/10">
      <div className="grid gap-8">
        {MenuOptions.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex cursor-pointer items-center gap-3 rounded-md border border-transparent p-3 transition-colors hover:border-blue-200/60 hover:bg-blue-400/20 dark:hover:border-lime-300/20 dark:hover:bg-white/10 ${path === item.path ? "border-blue-300/50 bg-blue-400/30 dark:border-lime-300/30 dark:bg-lime-400/15" : ""}`}
            >
              <item.icon className="w-7 h-7 text-pink-600 dark:text-lime-500" />
              <h2 className="font-bold ">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
