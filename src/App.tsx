import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { JsonLd, organizationSchema, websiteSchema } from "@/seo/JsonLd";
import AnalyticsScripts from "@/seo/AnalyticsScripts";

// ── Lazy-loaded pages (route-based code splitting) ──────────────────────────
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const EnvironmentDetail = lazy(() => import("./pages/EnvironmentDetail"));
const LaboratoryDetail = lazy(() => import("./pages/LaboratoryDetail"));
const WasteManagementDetail = lazy(() => import("./pages/WasteManagementDetail"));
const EngineeringDetail = lazy(() => import("./pages/EngineeringDetail"));
const DigitalDetail = lazy(() => import("./pages/DigitalDetail"));
const TrainingDetail = lazy(() => import("./pages/TrainingDetail"));
const SubServiceDetail = lazy(() => import("./pages/SubServiceDetail"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const Company = lazy(() => import("./pages/Company"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Gallery = lazy(() => import("./pages/Gallery"));

// Admin Imports (not lazy — behind auth guard, small bundle)
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProjects from "./pages/admin/Projects";
import AdminInsights from "./pages/admin/Insights";
import AdminCompany from "./pages/admin/Company";
import AuthGuard from "./components/auth/AuthGuard";

const queryClient = new QueryClient();

// ── Loading Fallback ────────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global Structured Data */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />

      {/* Google Analytics 4 */}
      <AnalyticsScripts />

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

