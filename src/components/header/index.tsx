"use client"

import * as React from "react"

// components
import { ThemeToggle } from "@/components/header/theme-toggle"

// utils
import { cn } from "@/lib/utils"

export function Header() {

  return (
    <header className={cn("m-3 py-4 bg-card border rounded-3xl px-8 flex justify-between items-center")}>
      <h1 className="font-normal">
        Memories
      </h1>
      <ThemeToggle />
    </header>
  )
}
