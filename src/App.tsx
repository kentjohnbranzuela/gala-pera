
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SendMoney from "./pages/SendMoney";
import ReceiveMoney from "./pages/ReceiveMoney";
import ScanQR from "./pages/ScanQR";
import ScanResult from "./pages/ScanResult";
import BillsPayment from "./pages/BillsPayment";
import MobileLoad from "./pages/MobileLoad";
import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import AccountSettings from "./pages/AccountSettings";
import PaymentMethods from "./pages/PaymentMethods";
import Notifications from "./pages/Notifications";
import Security from "./pages/Security";
import HelpSupport from "./pages/HelpSupport";
import CashIn from "./pages/CashIn";
import CashOut from "./pages/CashOut";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

// Protected Route component to check authentication
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  if (isAuthenticated === null) {
    // Still checking auth status
    return <div className="h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/send-money" element={<ProtectedRoute><SendMoney /></ProtectedRoute>} />
          <Route path="/receive-money" element={<ProtectedRoute><ReceiveMoney /></ProtectedRoute>} />
          <Route path="/scan-qr" element={<ProtectedRoute><ScanQR /></ProtectedRoute>} />
          <Route path="/scan-result" element={<ProtectedRoute><ScanResult /></ProtectedRoute>} />
          <Route path="/bills-payment" element={<ProtectedRoute><BillsPayment /></ProtectedRoute>} />
          <Route path="/mobile-load" element={<ProtectedRoute><MobileLoad /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/profile/personal" element={<ProtectedRoute><PersonalInfo /></ProtectedRoute>} />
          <Route path="/profile/settings" element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />
          <Route path="/profile/payment-methods" element={<ProtectedRoute><PaymentMethods /></ProtectedRoute>} />
          <Route path="/profile/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path="/profile/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
          <Route path="/profile/help" element={<ProtectedRoute><HelpSupport /></ProtectedRoute>} />
          <Route path="/cash-in" element={<ProtectedRoute><CashIn /></ProtectedRoute>} />
          <Route path="/cash-out" element={<ProtectedRoute><CashOut /></ProtectedRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
