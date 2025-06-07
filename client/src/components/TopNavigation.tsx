import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Brain, 
  Wrench, 
  UserCheck, 
  Info, 
  Menu,
  Phone,
  Heart
} from "lucide-react";

export default function TopNavigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home", icon: Heart },
    { href: "/learn", label: "Learn", icon: Brain },
    { href: "/tools", label: "Tools", icon: Wrench },
    { href: "/help", label: "Find Help", icon: UserCheck },
    { href: "/more", label: "More", icon: Info },
  ];

  const NavItems = ({ mobile = false }) => (
    <>
      {navigationItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = location === item.href;
        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`${mobile ? "w-full justify-start" : ""} ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => mobile && setIsOpen(false)}
            >
              <IconComponent className={`w-4 h-4 ${mobile ? "mr-2" : "mr-1"}`} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Inner Peace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItems />
          </div>

          {/* Crisis Help Button - Always Visible */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="tel:1800-599-0019" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Crisis Help</span>
              <span className="lg:hidden">Help</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-gray-900">
                      Inner Peace
                    </span>
                  </div>
                  
                  <NavItems mobile />
                  
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:1800-599-0019" 
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Crisis Help: 1800-599-0019</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}