
import React from 'react';
import Header from '@/components/Header';
import Balance from '@/components/Balance';
import ActionButtons from '@/components/ActionButtons';
import RecentTransactions from '@/components/RecentTransactions';
import ServiceGrid from '@/components/ServiceGrid';
import FooterNav from '@/components/FooterNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4">
        <Header />
        <Balance />
        <ActionButtons />
        <ServiceGrid />
        <RecentTransactions />
      </div>
      <FooterNav />
    </div>
  );
};

export default Index;
