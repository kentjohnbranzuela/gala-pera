
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PinLogin = () => {
  const [pin, setPin] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      navigate('/');
    }
  }, [navigate]);

  const handlePinComplete = (value: string) => {
    setPin(value);
  };

  const handleLogin = () => {
    // For demo purposes, accept any 6-digit pin
    // In a real app, you would validate against a stored/encrypted pin
    if (pin.length === 6) {
      localStorage.setItem('isAuthenticated', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to Gala Pera!",
        variant: "default",
      });
      navigate('/');
    } else {
      toast({
        title: "Invalid PIN",
        description: "Please enter a valid 6-digit PIN",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-galapera-purple/10 via-galapera-light-purple/10 to-white flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl border-0">
        <CardHeader className="space-y-3">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-galapera-purple to-galapera-dark-purple rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">GP</span>
            </div>
            <CardTitle className="text-3xl font-bold text-galapera-purple">Gala Pera</CardTitle>
          </div>
          <CardDescription className="text-center text-gray-600">
            Enter your 6-digit PIN to access your account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={pin} onChange={handlePinComplete} className="gap-2">
              <InputOTPGroup>
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={0} 
                />
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={1} 
                />
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={2} 
                />
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={3} 
                />
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={4} 
                />
                <InputOTPSlot 
                  className="w-12 h-12 text-lg border-2 border-galapera-purple/20 focus:border-galapera-purple transition-colors" 
                  index={5} 
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button 
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-galapera-purple to-galapera-dark-purple hover:opacity-90 transition-opacity"
            onClick={handleLogin}
            disabled={pin.length !== 6}
          >
            Login
          </Button>

          <p className="text-center text-sm text-muted-foreground pt-4">
            For demo purposes, any 6-digit PIN will work
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PinLogin;
