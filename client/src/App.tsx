/**
 * Direção visual: Forja Urbana — base carvão, Laranja Carga e linguagem editorial-industrial.
 * Este arquivo estabelece o tema escuro coerente com a identidade da Auto Truck.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import VideoPortfolio from "./pages/VideoPortfolio";
function SiteRouter() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={VideoPortfolio} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const isStaticExport = import.meta.env.VITE_STATIC_EXPORT === "true";

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={isStaticExport ? useHashLocation : undefined}>
            <SiteRouter />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
