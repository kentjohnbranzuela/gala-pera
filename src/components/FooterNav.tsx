
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Wallet, Coins, CreditCard, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const FooterNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Wallet />, label: 'Home', path: '/' },
    { icon: <Send />, label: 'Transfers', path: '/send-money' },
    { icon: <CreditCard />, label: 'Pay Bills', path: '/bills-payment' },
    { icon: <Coins />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-galapera-light-purple/30 flex justify-around items-center py-2 px-4 z-10">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        
        return (
          <button
            key={index}
            className={cn(
              "flex flex-col items-center gap-1 p-2 w-full",
              isActive ? "text-galapera-purple" : "text-muted-foreground"
            )}
            onClick={() => navigate(item.path)}
          >
            <div className={cn(
              "h-6 w-6",
              isActive && "text-galapera-purple animate-pulse-gentle"
            )}>
              {item.icon}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FooterNav;
