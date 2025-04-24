
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SendMoney from "./pages/SendMoney";
import ReceiveMoney from "./pages/ReceiveMoney";
import ScanQR from "./pages/ScanQR";
import ScanResult from "./pages/ScanResult";
import BillsPayment from "./pages/BillsPayment";
import MobileLoad from "./pages/MobileLoad";
import Profile from "./pages/Profile";
import CashIn from "./pages/CashIn";
import CashOut from "./pages/CashOut";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/receive-money" element={<ReceiveMoney />} />
          <Route path="/scan-qr" element={<ScanQR />} />
          <Route path="/scan-result" element={<ScanResult />} />
          <Route path="/bills-payment" element={<BillsPayment />} />
          <Route path="/mobile-load" element={<MobileLoad />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cash-in" element={<CashIn />} />
          <Route path="/cash-out" element={<CashOut />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
