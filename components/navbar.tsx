"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-12 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-medium text-sm hidden sm:inline-flex">nullbox</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xs py-1.5 px-3")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xs py-1.5 px-3")}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xs py-1.5 px-3")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xs py-1.5 px-3")}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild size="sm" variant="outline" className="text-xs h-7 px-3">
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Menu" className="h-7 w-7 p-0">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link
                  href="/"
                  className={cn("flex items-center gap-2", pathname === "/" ? "text-primary" : "text-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  <Logo className="h-5 w-5" />
                  <span className="text-sm font-medium">nullbox</span>
                </Link>
                <div className="grid gap-2">
                  <Link
                    href="/about"
                    className={cn(
                      "text-xs transition-colors hover:text-primary",
                      pathname === "/about" ? "text-primary" : "text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className={cn(
                      "text-xs transition-colors hover:text-primary",
                      pathname === "/services" ? "text-primary" : "text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-xs transition-colors hover:text-primary",
                      pathname === "/contact" ? "text-primary" : "text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/faq"
                    className={cn(
                      "text-xs transition-colors hover:text-primary",
                      pathname === "/faq" ? "text-primary" : "text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
                <Button asChild size="sm" className="text-xs mt-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Work With Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

