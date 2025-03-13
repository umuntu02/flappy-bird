"use client";

import {
  Globe,
  Heart,
  Home,
  Menu,
  Settings,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenuLeftSide() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = [
    { name: "English", code: "en" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
    { name: "Deutsch", code: "de" },
    { name: "Italiano", code: "it" },
  ];

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Here you would normally update the app's language
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetTitle className="hidden">Menu</SheetTitle>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl"
                onClick={() => setOpen(false)}
              >
                AmaStore
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <User className="h-4 w-4" />
                Account
              </Link>
              <Link
                href="/orders"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <ShoppingBag className="h-4 w-4" />
                Orders
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <Heart className="h-4 w-4" />
                Wishlist
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>

              <div className="px-4 py-2 text-sm hover:bg-muted">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 h-auto font-normal"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Language: {language}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.name)}
                        className="cursor-pointer"
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>

            <div className="px-4 py-2">
              <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2 mt-4">
                Categories
              </p>
            </div>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="electronics">
                <AccordionTrigger className="px-4 py-2 text-sm">
                  Electronics
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="flex flex-col">
                    <Link
                      href="/electronics/phones"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Phones & Tablets
                    </Link>
                    <Link
                      href="/electronics/computers"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Computers & Laptops
                    </Link>
                    <Link
                      href="/electronics/audio"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Audio & Headphones
                    </Link>
                    <Link
                      href="/electronics/accessories"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Accessories
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="clothing">
                <AccordionTrigger className="px-4 py-2 text-sm">
                  Clothing
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="flex flex-col">
                    <Link
                      href="/clothing/men"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Mens Clothing
                    </Link>
                    <Link
                      href="/clothing/women"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Women s Clothing
                    </Link>
                    <Link
                      href="/clothing/kids"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Kids Clothing
                    </Link>
                    <Link
                      href="/clothing/shoes"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Shoes
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="home">
                <AccordionTrigger className="px-4 py-2 text-sm">
                  Home & Kitchen
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="flex flex-col">
                    <Link
                      href="/home/furniture"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Furniture
                    </Link>
                    <Link
                      href="/home/kitchen"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Kitchen Appliances
                    </Link>
                    <Link
                      href="/home/decor"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Home Decor
                    </Link>
                    <Link
                      href="/home/bedding"
                      className="px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      Bedding & Bath
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="px-4 py-2">
              <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2 mt-4">
                Help & Settings
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/customer-service"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Customer Service
                </Link>
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
