import { useState } from "react";
import { Search, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="text-primary-foreground text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mindful Path</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Your Mental Health Companion</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setSearchVisible(!searchVisible)}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-2 text-gray-500 hover:text-primary transition-colors md:hidden"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/learn" className="text-lg font-medium hover:text-primary transition-colors">
                    Learn
                  </Link>
                  <Link href="/tools" className="text-lg font-medium hover:text-primary transition-colors">
                    Tools
                  </Link>
                  <Link href="/help" className="text-lg font-medium hover:text-primary transition-colors">
                    Find Help
                  </Link>
                  <Link href="/more" className="text-lg font-medium hover:text-primary transition-colors">
                    More
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {searchVisible && (
          <div className="pb-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search mental health topics..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
