
import React from 'react';
import { cn } from '@/lib/utils';

export interface TransactionProps {
  id: string;
  type: 'send' | 'receive' | 'bill' | 'load';
  name: string;
  date: string;
  amount: number;
  status?: 'completed' | 'pending' | 'failed';
  icon?: React.ReactNode;
}

const TransactionItem = ({ transaction }: { transaction: TransactionProps }) => {
  const { type, name, date, amount, status = 'completed', icon } = transaction;
  
  const isIncoming = type === 'receive';
  
  const statusColors = {
    completed: 'text-green-600',
    pending: 'text-amber-600',
    failed: 'text-red-600',
  };
  
  const amountColor = isIncoming ? 'text-green-600' : 'text-galapera-dark-purple';
  
  return (
    <div className="flex items-center justify-between p-3 border-b border-galapera-light-purple/30">
      <div className="flex items-center gap-3">
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center bg-galapera-light-purple",
          type === 'send' && "bg-galapera-light-purple text-galapera-purple",
          type === 'receive' && "bg-green-100 text-green-600",
          type === 'bill' && "bg-blue-100 text-blue-600",
          type === 'load' && "bg-orange-100 text-orange-600"
        )}>
          {icon}
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={cn("font-semibold", amountColor)}>
          {isIncoming ? '+' : '-'}₱{amount.toFixed(2)}
        </p>
        <p className={cn("text-xs", statusColors[status])}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
