import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import TeamMember from "./pages/TeamMember";
import ContactPage from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import SecondReadMore from "./pages/SecondReadMore";
import { getReadMorePath, getTeamBasePath } from "@/lib/routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path={`${getTeamBasePath("ca")}/:memberSlug`} element={<TeamMember />} />
          <Route path={`${getTeamBasePath("es")}/:memberSlug`} element={<TeamMember />} />
          <Route path={`${getTeamBasePath("en")}/:memberSlug`} element={<TeamMember />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/second-read-more" element={<SecondReadMore />} />
          <Route path={getReadMorePath("ca")} element={<SecondReadMore />} />
          <Route path={getReadMorePath("es")} element={<SecondReadMore />} />
          <Route path={getReadMorePath("en")} element={<SecondReadMore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
