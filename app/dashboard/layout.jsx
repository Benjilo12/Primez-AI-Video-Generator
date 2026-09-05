import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r border-white/40 bg-white/60 backdrop-blur-xl md:block dark:border-white/10 dark:bg-gray-900/60">
          <SideNav />
        </aside>
        <main className="min-w-0 flex-1 p-10 dark:bg-gray-900">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
