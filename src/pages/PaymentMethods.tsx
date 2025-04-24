
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, CreditCard, Building, Bank } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import FooterNav from '@/components/FooterNav';
import { useToast } from '@/hooks/use-toast';

const PaymentMethods = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleAddPaymentMethod = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Adding payment methods will be available in the next update.",
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center gap-3 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Payment Methods</h1>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium">Cards</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleAddPaymentMethod}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-6 border rounded-lg border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 mb-4">
            <CreditCard className="h-12 w-12 text-gray-400" />
            <p className="text-muted-foreground text-center">No cards added yet</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={handleAddPaymentMethod}
            >
              Add Card
            </Button>
          </div>

          <h2 className="font-medium mt-6 mb-2">Bank Accounts</h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Bank className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">BPI Savings Account</p>
                <p className="text-xs text-muted-foreground">●●●● 4567</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Building className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Metrobank Checking</p>
                <p className="text-xs text-muted-foreground">●●●● 8901</p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleAddPaymentMethod}
            variant="outline" 
            className="w-full mt-4"
          >
            <Plus className="h-4 w-4 mr-2" /> Link a Bank Account
          </Button>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default PaymentMethods;
