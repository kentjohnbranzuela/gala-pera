
import React from 'react';
import { Send, Wallet, CreditCard, Coins } from 'lucide-react';
import TransactionItem, { TransactionProps } from './TransactionItem';

const RecentTransactions = () => {
  const transactions: TransactionProps[] = [
    {
      id: '1',
      type: 'receive',
      name: 'Maria Santos',
      date: 'Today, 2:30 PM',
      amount: 500,
      status: 'completed',
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      id: '2',
      type: 'send',
      name: 'John Smith',
      date: 'Today, 10:15 AM',
      amount: 300,
      status: 'completed',
      icon: <Send className="h-5 w-5" />,
    },
    {
      id: '3',
      type: 'bill',
      name: 'Electric Bill',
      date: 'Yesterday, 4:20 PM',
      amount: 1250.50,
      status: 'completed',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: '4',
      type: 'load',
      name: 'Globe Prepaid',
      date: 'Apr 23, 11:30 AM',
      amount: 100,
      status: 'completed',
      icon: <Coins className="h-5 w-5" />,
    },
  ];

  return (
    <div className="gala-card">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Recent Activity</h2>
        <button className="text-sm text-galapera-purple">See All</button>
      </div>
      <div className="space-y-1">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
