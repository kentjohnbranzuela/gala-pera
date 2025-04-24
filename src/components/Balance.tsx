
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Balance = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  const handleCashIn = () => {
    navigate('/cash-in');
  };

  const handleCashOut = () => {
    navigate('/cash-out');
  };

  return (
    <div className="bg-gradient-to-br from-galapera-purple to-galapera-dark-purple rounded-2xl p-5 text-white mt-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-16 bg-white/5 blur-xl"></div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm">Available Balance</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </Button>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-lg">₱</span>
        {showBalance ? (
          <h1 className="text-3xl font-bold">24,500.75</h1>
        ) : (
          <h1 className="text-3xl font-bold tracking-widest">•••••••</h1>
        )}
      </div>

      <div className="flex gap-1 items-center mt-1">
        <span className="text-xs text-white/70">Account number:</span>
        <span className="text-xs font-medium">0905 141 2422</span>
      </div>
      
      <div className="flex justify-between mt-4">
        <Button 
          variant="outline" 
          className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-[48%]"
          onClick={handleCashIn}
        >
          Cash In
        </Button>
        <Button 
          variant="outline" 
          className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-[48%]"
          onClick={handleCashOut}
        >
          Cash Out
        </Button>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
    </div>
  );
};

export default Balance;
