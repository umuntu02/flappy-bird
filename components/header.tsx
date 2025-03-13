import { Bell, Globe, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { MobileMenuLeftSide } from "./mobile-menu-left-side";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="md:hidden mr-2">
          <MobileMenuLeftSide />
        </div>
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="Logo"
          />
          <span className="text-xl font-bold hidden md:inline-block">
            AmaStore
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium flex-1">
          <Link
            href="/products"
            className="transition-colors hover:text-primary"
          >
            All Products
          </Link>
          <Link href="/deals" className="transition-colors hover:text-primary">
            Today&apos;s Deals
          </Link>
          <Link
            href="/electronics"
            className="transition-colors hover:text-primary"
          >
            Electronics
          </Link>
          <Link
            href="/clothing"
            className="transition-colors hover:text-primary"
          >
            Clothing
          </Link>
          <Link href="/home" className="transition-colors hover:text-primary">
            Home & Kitchen
          </Link>
        </div>
        <div className="flex-1 mx-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-8 md:w-[300px] lg:w-[500px]"
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center gap-1"
              >
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>Italiano</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/profile"
            className="hidden md:flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <User className="h-4 w-4" />
            Account
          </Link>
          <Link
            href="/orders"
            className="hidden md:flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <Bell className="h-4 w-4" />
            Orders
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden md:inline">Cart</span>
            <Badge className="ml-1">3</Badge>
          </Link>
        </nav>
      </div>
    </header>
  );
}
