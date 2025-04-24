
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Coins } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const MobileLoad = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [provider, setProvider] = useState('globe');
  const [amount, setAmount] = useState('100');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle the mobile load purchase
    console.log({ mobileNumber, provider, amount });
  };

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
          <h1 className="text-xl font-semibold">Buy Load</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-galapera-purple" />
              <CardTitle>Mobile Load</CardTitle>
            </div>
            <CardDescription>Buy prepaid load for any network</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="number">Mobile Number</Label>
                <Input
                  id="number"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Select Provider</Label>
                <RadioGroup 
                  value={provider} 
                  onValueChange={setProvider}
                  className="flex gap-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-2 flex-1">
                    <RadioGroupItem value="globe" id="globe" />
                    <Label htmlFor="globe" className="cursor-pointer">Globe</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-2 flex-1">
                    <RadioGroupItem value="smart" id="smart" />
                    <Label htmlFor="smart" className="cursor-pointer">Smart</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-2 flex-1">
                    <RadioGroupItem value="dito" id="dito" />
                    <Label htmlFor="dito" className="cursor-pointer">DITO</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Select Amount</Label>
                <div className="grid grid-cols-3 gap-2">
                  {['50', '100', '300', '500', '1000'].map((val) => (
                    <Button
                      key={val}
                      type="button"
                      variant={amount === val ? "default" : "outline"}
                      className={amount === val ? "bg-galapera-purple hover:bg-galapera-dark-purple" : ""}
                      onClick={() => setAmount(val)}
                    >
                      ₱{val}
                    </Button>
                  ))}
                  <Button
                    type="button"
                    variant={!['50', '100', '300', '500', '1000'].includes(amount) ? "default" : "outline"}
                    className={!['50', '100', '300', '500', '1000'].includes(amount) ? "bg-galapera-purple hover:bg-galapera-dark-purple" : ""}
                    onClick={() => setAmount('other')}
                  >
                    Other
                  </Button>
                </div>
              </div>
              
              {amount === 'other' && (
                <div className="space-y-2">
                  <Label htmlFor="customAmount">Custom Amount</Label>
                  <Input
                    id="customAmount"
                    placeholder="Enter amount"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              )}
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-galapera-purple hover:bg-galapera-dark-purple"
                >
                  Buy Load
                </Button>
              </div>
            </form>
            
            <div className="mt-6 pt-4 border-t">
              <h3 className="font-medium text-sm mb-2">Recent Transactions</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-sm">0917 123 4567</p>
                    <p className="text-xs text-muted-foreground">Globe - Apr 20</p>
                  </div>
                  <p className="font-semibold">₱100.00</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-sm">0918 765 4321</p>
                    <p className="text-xs text-muted-foreground">Smart - Apr 15</p>
                  </div>
                  <p className="font-semibold">₱300.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileLoad;
