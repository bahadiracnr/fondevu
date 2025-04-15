"use client"

import { Button } from "@/components/ui/button"
import {
  Calendar,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  ShoppingBag,
  User,
  Users,
  Scissors,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DashboardSidebarProps {
  userType?: "customer" | "provider" | "admin"
}

// Dashboard sidebar component with updated color scheme
// Using only #8b5cf6 for brand colors to maintain consistency
export default function DashboardSidebar({ userType = "customer" }: DashboardSidebarProps) {
  // State for mobile sidebar toggle
  const [isOpen, setIsOpen] = useState(false)

  // Navigation links based on user type
  const customerLinks = [
    { href: "/dashboard", label: "Panel", icon: LayoutDashboard },
    { href: "/dashboard/randevular", label: "Randevularım", icon: Calendar },
    { href: "/dashboard/favoriler", label: "Favorilerim", icon: ShoppingBag },
    { href: "/dashboard/mesajlar", label: "Mesajlar", icon: MessageSquare },
    { href: "/dashboard/profil", label: "Profil", icon: User },
    { href: "/dashboard/ayarlar", label: "Ayarlar", icon: Settings },
  ]

  const providerLinks = [
    { href: "/dashboard/provider", label: "Panel", icon: LayoutDashboard },
    { href: "/dashboard/provider/randevular", label: "Randevular", icon: Calendar },
    { href: "/dashboard/provider/hizmetler", label: "Hizmetler", icon: ShoppingBag },
    { href: "/dashboard/provider/mesajlar", label: "Mesajlar", icon: MessageSquare },
    { href: "/dashboard/provider/salon", label: "Salon Bilgileri", icon: Home },
    { href: "/dashboard/provider/ayarlar", label: "Ayarlar", icon: Settings },
  ]

  const adminLinks = [
    { href: "/dashboard/admin", label: "Panel", icon: LayoutDashboard },
    { href: "/dashboard/admin/kullanicilar", label: "Kullanıcılar", icon: Users },
    { href: "/dashboard/admin/salonlar", label: "Salonlar", icon: Home },
    { href: "/dashboard/admin/randevular", label: "Randevular", icon: Calendar },
    { href: "/dashboard/admin/ayarlar", label: "Ayarlar", icon: Settings },
  ]

  // Select the appropriate links based on user type
  const links = userType === "provider" ? providerLinks : userType === "admin" ? adminLinks : customerLinks

  return (
    <>
      {/* Mobile overlay - shown when sidebar is open on mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar - using brand purple for background */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-brand-purple text-white shadow-lg transition-all duration-300 lg:relative lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          {/* Logo section */}
          <div className="flex h-16 items-center border-b border-white/20 px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-full bg-white p-1.5">
                <Scissors className="h-5 w-5 text-brand-purple" />
              </div>
              <span className="text-lg font-bold text-white">Föndevu</span>
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-white transition-all hover:bg-brand-700 hover:text-white"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout button */}
          <div className="border-t border-white/20 p-4">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-white/30 text-white hover:bg-brand-700 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
                <span>Çıkış Yap</span>
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 h-8 w-8 border-brand-200 bg-white text-brand-purple shadow-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Menü</span>
      </Button>
    </>
  )
}
