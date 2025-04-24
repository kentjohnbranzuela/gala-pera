
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BillsPayment = () => {
  const navigate = useNavigate();
  
  const billCategories = [
    { id: 'utilities', name: 'Utilities' },
    { id: 'telecoms', name: 'Telecoms' },
    { id: 'government', name: 'Government' },
    { id: 'loans', name: 'Loans' },
  ];

  const utilities = [
    { id: 1, name: 'Meralco', icon: '⚡️', color: 'bg-yellow-100' },
    { id: 2, name: 'Manila Water', icon: '💧', color: 'bg-blue-100' },
    { id: 3, name: 'Maynilad', icon: '💧', color: 'bg-blue-100' },
    { id: 4, name: 'Prime Water', icon: '💧', color: 'bg-blue-100' },
    { id: 5, name: 'Converge ICT', icon: '🌐', color: 'bg-indigo-100' },
    { id: 6, name: 'PLDT Home', icon: '🌐', color: 'bg-indigo-100' },
  ];

  const telecoms = [
    { id: 1, name: 'Globe Telecom', icon: '📱', color: 'bg-blue-100' },
    { id: 2, name: 'Smart Communications', icon: '📱', color: 'bg-red-100' },
    { id: 3, name: 'DITO Telecommunity', icon: '📱', color: 'bg-purple-100' },
    { id: 4, name: 'Globe At Home', icon: '🏠', color: 'bg-blue-100' },
    { id: 5, name: 'Smart Bro', icon: '🏠', color: 'bg-red-100' },
    { id: 6, name: 'Sun Cellular', icon: '📱', color: 'bg-orange-100' },
  ];

  const government = [
    { id: 1, name: 'SSS', icon: '🏛️', color: 'bg-blue-100' },
    { id: 2, name: 'Pag-IBIG Fund', icon: '🏛️', color: 'bg-red-100' },
    { id: 3, name: 'PhilHealth', icon: '🏛️', color: 'bg-blue-100' },
    { id: 4, name: 'BIR', icon: '🏛️', color: 'bg-yellow-100' },
    { id: 5, name: 'NBI', icon: '🏛️', color: 'bg-blue-100' },
    { id: 6, name: 'DFA', icon: '🏛️', color: 'bg-blue-100' },
  ];

  const loans = [
    { id: 1, name: 'Tonik', icon: '💰', color: 'bg-purple-100' },
    { id: 2, name: 'GCash Loan', icon: '💰', color: 'bg-blue-100' },
    { id: 3, name: 'Home Credit', icon: '💰', color: 'bg-red-100' },
    { id: 4, name: 'Tala', icon: '💰', color: 'bg-teal-100' },
    { id: 5, name: 'Cashalo', icon: '💰', color: 'bg-green-100' },
    { id: 6, name: 'Pera247', icon: '💰', color: 'bg-yellow-100' },
  ];

  const billsByCategory = {
    utilities,
    telecoms,
    government,
    loans,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
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
          <h1 className="text-xl font-semibold">Pay Bills</h1>
        </div>

        <div className="gala-card mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-galapera-purple" />
              <h2 className="font-semibold">Billers</h2>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search billers"
            />
          </div>

          <Tabs defaultValue="utilities">
            <TabsList className="grid grid-cols-4 mb-4">
              {billCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {billCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-3 gap-3">
                  {billsByCategory[category.id].map((biller) => (
                    <button 
                      key={biller.id} 
                      className="flex flex-col items-center gap-2 p-3"
                      onClick={() => navigate(`/bill-details/${biller.id}`)}
                    >
                      <div className={`h-12 w-12 rounded-full ${biller.color} flex items-center justify-center text-xl`}>
                        {biller.icon}
                      </div>
                      <span className="text-xs font-medium text-center">{biller.name}</span>
                    </button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-6">
            <h3 className="font-medium text-sm mb-2">Recent Payments</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    ⚡️
                  </div>
                  <div>
                    <p className="font-medium text-sm">Meralco</p>
                    <p className="text-xs text-muted-foreground">Apr 15, 2025</p>
                  </div>
                </div>
                <p className="font-semibold">₱2,450.00</p>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    💧
                  </div>
                  <div>
                    <p className="font-medium text-sm">Manila Water</p>
                    <p className="text-xs text-muted-foreground">Apr 10, 2025</p>
                  </div>
                </div>
                <p className="font-semibold">₱750.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsPayment;
