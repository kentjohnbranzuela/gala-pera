
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from '@/hooks/use-toast';

const PinLogin = () => {
  const [pin, setPin] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already authenticated
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-galapera-purple mb-2">Gala Pera</h1>
          <p className="text-muted-foreground">Enter your 6-digit PIN to continue</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
          <InputOTP maxLength={6} value={pin} onChange={handlePinComplete}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button 
            className="w-full mt-6 bg-galapera-purple hover:bg-galapera-dark-purple"
            onClick={handleLogin}
            disabled={pin.length !== 6}
          >
            Login
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          For demo purposes, any 6-digit PIN will work
        </p>
      </div>
    </div>
  );
};

export default PinLogin;
