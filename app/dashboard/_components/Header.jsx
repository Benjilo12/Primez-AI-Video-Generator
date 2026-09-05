import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/theme-toggle";

function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-3 px-20 text-black shadow-md dark:bg-gray-500 dark:text-white z-10">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-xl">Ai Short Vid</h2>
      </div>
      <div className="flex gap-3 items-center">
        <ThemeToggle />
        <Button className="bg-blue-600 dark:bg-lime-400 dark:text-white">
          Dashboard
        </Button>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
