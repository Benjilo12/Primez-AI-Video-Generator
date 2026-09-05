"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import EmptyState from "./_components/EmptyState";
import Link from "next/link";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-blue-600 dark:text-lime-500">
          Dashboard
        </h2>
        <Link href="/dashboard/create-new">
          <Button className="bg-blue-700 dark:bg-lime-600 dark:text-white">
            + Create New
          </Button>
        </Link>
      </div>
      <div>
        {videoList?.length === 0 && (
          <div>
            <EmptyState />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
