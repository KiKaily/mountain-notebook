import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import TeamMember from "./pages/TeamMember";
import ContactPage from "./pages/Contact";
import Privacy from "./pages/Privacy";
<<<<<<< HEAD
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";
=======
import Cookies from "./pages/Cookies";
import Legal from "./pages/Legal";
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
import NotFound from "./pages/NotFound";
import SecondReadMore from "./pages/SecondReadMore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* individual team member pages */}
          <Route path="/team/:id" element={<TeamMember />} />
          {/* contact form lives on its own page */}
          <Route path="/contact" element={<ContactPage />} />
<<<<<<< HEAD
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/second-read-more" element={<SecondReadMore />} />
=======
          {/* legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
