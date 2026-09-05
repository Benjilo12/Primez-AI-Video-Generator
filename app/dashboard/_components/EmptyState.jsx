import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

function EmptyState() {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg gap-5">
      <h2>You don't have any short video created</h2>
      <Link href="/dashboard/create-new">
        <Button className="bg-blue-600 dark:bg-lime-600 dark:text-white">
          Create New Short Video
        </Button>
      </Link>
    </div>
  );
}

export default EmptyState;
