import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Learn from "@/pages/Learn";
import Tools from "@/pages/Tools";
import FindHelp from "@/pages/FindHelp";
import More from "@/pages/More";
import TopNavigation from "@/components/TopNavigation";

function Router() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <TopNavigation />
      <main className="min-h-[calc(100vh-4rem)]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/tools" component={Tools} />
          <Route path="/help" component={FindHelp} />
          <Route path="/more" component={More} />
          <Route>
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
