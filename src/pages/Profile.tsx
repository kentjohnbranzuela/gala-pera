
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Settings, CreditCard, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import FooterNav from '@/components/FooterNav';

const Profile = () => {
  const navigate = useNavigate();
  const [balance] = useState('₱24,500.75');
  
  const menuItems = [
    { icon: <User className="text-galapera-purple" />, label: 'Personal Information', path: '/profile/personal' },
    { icon: <Settings className="text-galapera-purple" />, label: 'Account Settings', path: '/profile/settings' },
    { icon: <CreditCard className="text-galapera-purple" />, label: 'Payment Methods', path: '/profile/payment-methods' },
    { icon: <Bell className="text-galapera-purple" />, label: 'Notifications', path: '/profile/notifications' },
    { icon: <Shield className="text-galapera-purple" />, label: 'Security', path: '/profile/security' },
    { icon: <HelpCircle className="text-galapera-purple" />, label: 'Help & Support', path: '/profile/help' },
  ];

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
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>

        <div className="bg-gradient-to-br from-galapera-purple to-galapera-dark-purple rounded-xl p-5 text-white mb-5">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-white">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback className="bg-galapera-light-purple text-white text-xl">JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">Juan Dela Cruz</h2>
              <p className="text-sm text-white/80">0917 123 4567</p>
              <p className="text-sm mt-1">Balance: {balance}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h3 className="font-medium mb-3">Account</h3>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-galapera-light-purple/20">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
              </div>
              {index < menuItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="w-full border-red-500 text-red-500 hover:bg-red-50 mb-5"
          onClick={() => navigate('/')}
        >
          <LogOut className="h-4 w-4 mr-2" /> Log Out
        </Button>
      </div>
      <FooterNav />
    </div>
  );
};

export default Profile;
