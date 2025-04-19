
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogAnalysis from "./pages/LogAnalysis";
import Alerts from "./pages/Alerts";
import Events from "./pages/Events";
import ThreatIntel from "./pages/ThreatIntel";
import Labs from "./pages/Labs";
import NotFound from "./pages/NotFound";
import Assets from "./pages/Assets";
import Vulnerabilities from "./pages/Vulnerabilities";
import Incidents from "./pages/Incidents";
import Integrations from "./pages/Integrations";
import Collectors from "./pages/Collectors";
import Settings from "./pages/Settings";
import Scenarios from "./pages/Scenarios";
import Tutorials from "./pages/Tutorials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logs" element={<LogAnalysis />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/threats" element={<ThreatIntel />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/vulnerabilities" element={<Vulnerabilities />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
