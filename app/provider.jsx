"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetch("/api/users", { method: "POST" }).catch((error) => {
        console.error("Unable to sync user", error);
      });
    }
  }, [user]);

  return <div>{children}</div>;
}

export default Provider;
