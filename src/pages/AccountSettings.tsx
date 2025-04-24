
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import FooterNav from '@/components/FooterNav';
import { useToast } from '@/hooks/use-toast';

const AccountSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [biometrics, setBiometrics] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const handleChangePIN = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Change PIN functionality will be available in the next update.",
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center gap-3 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Account Settings</h1>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-2">Security</h2>
          <div 
            className="flex items-center justify-between py-3 cursor-pointer"
            onClick={handleChangePIN}
          >
            <span>Change PIN</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <Separator />

          <div className="flex items-center justify-between py-3">
            <span>Biometric Login</span>
            <Switch 
              checked={biometrics}
              onCheckedChange={setBiometrics}
            />
          </div>
          <Separator />
          
          <h2 className="font-medium mt-4 mb-2">Preferences</h2>
          <div className="flex items-center justify-between py-3">
            <span>Push Notifications</span>
            <Switch 
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <span>Dark Mode</span>
            <Switch 
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-2">Account</h2>
          
          <div 
            className="flex items-center justify-between py-3 cursor-pointer text-red-500"
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              navigate('/login');
              toast({
                title: "Logged Out",
                description: "You have been logged out successfully",
                variant: "default",
              });
            }}
          >
            <span>Clear App Data</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default AccountSettings;
