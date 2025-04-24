
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Store } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ScanResult = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const { merchant, amount, reference } = location.state || {
    merchant: "Unknown Merchant",
    amount: 0,
    reference: "Unknown"
  };

  const handlePay = () => {
    toast({
      title: "Payment Successful!",
      description: `You paid ₱${amount.toFixed(2)} to ${merchant}`,
      variant: "success",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center gap-3 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Payment Details</h1>
        </div>

        <div className="mt-4 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-full bg-galapera-light-purple/30 flex items-center justify-center">
              <Store className="h-8 w-8 text-galapera-purple" />
            </div>
            <h2 className="text-xl font-semibold">{merchant}</h2>
          </div>

          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm">Amount to Pay</p>
            <p className="text-3xl font-bold">₱{amount.toFixed(2)}</p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reference Number</span>
              <span className="font-medium">{reference}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <Button 
            className="w-full bg-galapera-purple hover:bg-galapera-dark-purple mb-3"
            onClick={handlePay}
          >
            Pay Now
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;
