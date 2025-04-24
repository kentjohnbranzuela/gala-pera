
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, Building, Store, BanknoteIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const CashIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const cashInOptions = [
    {
      title: 'Bank Transfer',
      icon: <Building className="h-5 w-5" />,
      description: 'Transfer money from your bank account',
      path: '/cash-in/bank'
    },
    {
      title: 'Credit/Debit Card',
      icon: <CreditCard className="h-5 w-5" />,
      description: 'Add funds using your credit or debit card',
      path: '/cash-in/card'
    },
    {
      title: 'Over the Counter',
      icon: <Store className="h-5 w-5" />,
      description: 'Deposit via partner outlets',
      path: '/cash-in/otc'
    },
    {
      title: 'Remittance Centers',
      icon: <BanknoteIcon className="h-5 w-5" />,
      description: 'Cash in through remittance partners',
      path: '/cash-in/remittance'
    }
  ];

  const handleOptionClick = (path: string) => {
    toast({
      title: "Feature Coming Soon",
      description: "This cash-in method will be available shortly",
    });
    // Navigate will be uncommented when all paths are implemented
    // navigate(path);
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
          <h1 className="text-xl font-semibold">Cash In</h1>
        </div>

        <div className="space-y-4 mt-4">
          <p className="text-sm text-muted-foreground">
            Choose how you would like to add money to your Gala Pera wallet
          </p>
          
          {cashInOptions.map((option, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleOptionClick(option.path)}
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
          
          <div className="bg-galapera-light-purple/20 rounded-lg p-4 mt-6">
            <h3 className="font-medium mb-2 text-sm">Cash In Tips</h3>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• No fees for bank transfers under ₱8,000</li>
              <li>• Card cash-ins may have a 2% processing fee</li>
              <li>• Over-the-counter transactions are processed instantly</li>
              <li>• Maximum daily cash-in: ₱50,000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashIn;
