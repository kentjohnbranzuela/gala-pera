
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Wallet, CreditCard, Coins } from 'lucide-react';

const ActionButtons = () => {
  const navigate = useNavigate();
  
  const actions = [
    { id: 1, icon: <Send className="h-6 w-6 text-galapera-purple" />, label: 'Send', path: '/send-money' },
    { id: 2, icon: <Wallet className="h-6 w-6 text-galapera-blue" />, label: 'Receive', path: '/receive-money' },
    { id: 3, icon: <CreditCard className="h-6 w-6 text-galapera-orange" />, label: 'Pay Bills', path: '/bills-payment' },
    { id: 4, icon: <Coins className="h-6 w-6 text-galapera-dark-purple" />, label: 'Load', path: '/mobile-load' },
  ];
  
  return (
    <div className="flex justify-between items-center mt-6 px-2 mb-6">
      {actions.map((action) => (
        <button 
          key={action.id}
          className="flex flex-col items-center gap-2"
          onClick={() => navigate(action.path)}
        >
          <div className="h-14 w-14 rounded-full bg-galapera-soft-gray flex items-center justify-center shadow-sm">
            {action.icon}
          </div>
          <span className="text-xs font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
