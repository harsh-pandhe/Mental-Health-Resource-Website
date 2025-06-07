import { Home, Book, Wrench, UserCheck, MoreHorizontal } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function BottomNavigation() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Book, label: "Learn", path: "/learn" },
    { icon: Wrench, label: "Tools", path: "/tools" },
    { icon: UserCheck, label: "Help", path: "/help" },
    { icon: MoreHorizontal, label: "More", path: "/more" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <button className={`nav-btn flex flex-col items-center p-2 transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
                }`}>
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
