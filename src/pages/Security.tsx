
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Lock, Key, RefreshCcw, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import FooterNav from '@/components/FooterNav';
import { useToast } from '@/hooks/use-toast';

const Security = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [autoLockEnabled, setAutoLockEnabled] = useState(true);
  
  const handleSecurityAction = (action: string) => {
    toast({
      title: "Feature Coming Soon",
      description: `${action} will be available in the next update.`,
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
          <h1 className="text-xl font-semibold">Security</h1>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-galapera-purple" />
              <h2 className="font-medium">Account Security</h2>
            </div>
            <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Strong</div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Your account has strong security measures in place.</p>
          
          <div 
            className="flex items-center justify-between py-3 cursor-pointer"
            onClick={() => handleSecurityAction("Change PIN")}
          >
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-galapera-purple" />
              <span>Change PIN</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <Separator />
          
          <div 
            className="flex items-center justify-between py-3 cursor-pointer"
            onClick={() => handleSecurityAction("Change Password")}
          >
            <div className="flex items-center gap-3">
              <Key className="h-5 w-5 text-galapera-purple" />
              <span>Set Password</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <RefreshCcw className="h-5 w-5 text-galapera-purple" />
              <span>Two-factor Authentication</span>
            </div>
            <Switch checked={twoFAEnabled} onCheckedChange={setTwoFAEnabled} />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <span>Biometric Authentication</span>
            <Switch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <span>Auto-Lock (after 5 minutes)</span>
            <Switch checked={autoLockEnabled} onCheckedChange={setAutoLockEnabled} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-3">Device Management</h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Current Device</p>
                <p className="text-xs text-muted-foreground">iPhone 14 • Manila</p>
              </div>
              <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => handleSecurityAction("Manage Devices")}
          >
            Manage All Devices
          </Button>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default Security;
