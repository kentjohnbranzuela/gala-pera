
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, BanknoteIcon, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CashOut = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const cashOutOptions = [
    {
      title: 'Bank Transfer',
      icon: <Building className="h-5 w-5" />,
      description: 'Withdraw to your bank account (1-3 business days)',
      id: 'bank'
    },
    {
      title: 'Over the Counter',
      icon: <BanknoteIcon className="h-5 w-5" />,
      description: 'Withdraw cash at partner outlets',
      id: 'otc'
    },
    {
      title: 'Send to Another Account',
      icon: <Send className="h-5 w-5" />,
      description: 'Transfer funds to another Gala Pera user',
      id: 'transfer'
    }
  ];

  const handleContinue = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to withdraw",
        variant: "destructive"
      });
      return;
    }

    if (parseFloat(amount) > 24500) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough funds for this withdrawal",
        variant: "destructive"
      });
      return;
    }

    setStep(2);
  };

  const handleSelectMethod = (id: string) => {
    setSelectedMethod(id);
    toast({
      title: "Feature Coming Soon",
      description: "Cash out functionality will be available shortly",
    });
    // In a real app, we'd move to the next step
    // setStep(3);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center gap-3 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => step > 1 ? setStep(step - 1) : navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Cash Out</h1>
        </div>

        {step === 1 && (
          <div className="space-y-6 mt-4">
            <div>
              <label className="text-sm font-medium">Amount to Withdraw</label>
              <div className="relative mt-2">
                <div className="absolute left-3 top-2.5 text-lg font-medium">₱</div>
                <Input 
                  type="number"
                  className="pl-8 text-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Available balance: ₱24,500.75</p>
            </div>

            <div className="bg-galapera-light-purple/20 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-sm">Cash Out Fees</h3>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• Bank transfer: ₱15 per transaction</li>
                <li>• Over-the-counter: ₱20 per transaction</li>
                <li>• Maximum daily cash-out: ₱40,000</li>
              </ul>
            </div>

            <Button 
              className="w-full bg-galapera-purple hover:bg-galapera-dark-purple"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 mt-4">
            <p className="text-sm text-muted-foreground">
              Choose where you'd like to withdraw your ₱{parseFloat(amount).toFixed(2)}
            </p>
            
            {cashOutOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer hover:shadow-md transition-shadow ${selectedMethod === option.id ? 'border-galapera-purple' : ''}`}
                onClick={() => handleSelectMethod(option.id)}
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-galapera-light-purple/20 flex items-center justify-center text-galapera-purple">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{option.title}</h3>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CashOut;
