import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatWeDo from "./pages/WhatWeDo";
import ServiceDetail from "./pages/ServiceDetail";
import EnvironmentDetail from "./pages/EnvironmentDetail";
import LaboratoryDetail from "./pages/LaboratoryDetail";
import WasteManagementDetail from "./pages/WasteManagementDetail";
import EngineeringDetail from "./pages/EngineeringDetail";
import DigitalDetail from "./pages/DigitalDetail";
import TrainingDetail from "./pages/TrainingDetail";
import SubServiceDetail from "./pages/SubServiceDetail";

import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Admin Imports
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProjects from "./pages/admin/Projects";
import AdminInsights from "./pages/admin/Insights";
import AdminCompany from "./pages/admin/Company";
import AuthGuard from "./components/auth/AuthGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/environment" element={<EnvironmentDetail />} />
          <Route path="/what-we-do/laboratory" element={<LaboratoryDetail />} />
          <Route path="/what-we-do/waste-management" element={<WasteManagementDetail />} />
          <Route path="/what-we-do/engineering" element={<EngineeringDetail />} />
          <Route path="/what-we-do/digital-solutions" element={<DigitalDetail />} />
          <Route path="/what-we-do/training" element={<TrainingDetail />} />
          <Route path="/what-we-do/:serviceSlug/:subServiceSlug" element={<SubServiceDetail />} />
          <Route path="/what-we-do/:slug" element={<ServiceDetail />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Admin Routes */}
          <Route path="/tpi-admin-portal" element={<AdminLogin />} />
          <Route path="/admin" element={<AuthGuard><AdminLayout /></AuthGuard>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="insights" element={<AdminInsights />} />
            <Route path="company" element={<AdminCompany />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
