"use client";

import { Home, Package, ShoppingCart, BarChart, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full grid-cols-5 mx-auto">
        <Link href="#" className="flex flex-col items-center justify-center">
          <Home
            className={`h-5 w-5 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          />
          <span
            className={`text-[10px] mt-1 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Package
            className={`h-5 w-5 ${
              isActive("/products") ? "text-primary" : "text-muted-foreground"
            }`}
          />
          <span
            className={`text-[10px] mt-1 ${
              isActive("/products") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Products
          </span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <ShoppingCart
            className={`h-5 w-5 ${
              isActive("/orders") ? "text-primary" : "text-muted-foreground"
            }`}
          />
          <span
            className={`text-[10px] mt-1 ${
              isActive("/orders") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Orders
          </span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <BarChart
            className={`h-5 w-5 ${
              isActive("/analytics") ? "text-primary" : "text-muted-foreground"
            }`}
          />
          <span
            className={`text-[10px] mt-1 ${
              isActive("/analytics") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Analytics
          </span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Users
            className={`h-5 w-5 ${
              isActive("/friends") ? "text-primary" : "text-muted-foreground"
            }`}
          />
          <span
            className={`text-[10px] mt-1 ${
              isActive("/friends") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Friends
          </span>
        </Link>
      </div>
    </div>
  );
}
