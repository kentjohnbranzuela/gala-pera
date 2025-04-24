
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Search, UserRound } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const SendMoney = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'contacts' | 'qrCode'>('contacts');
  const [amount, setAmount] = useState<string>('');

  const contacts = [
    { id: 1, name: 'Maria Santos', mobile: '0917 123 4567', avatar: 'MS' },
    { id: 2, name: 'John Smith', mobile: '0918 765 4321', avatar: 'JS' },
    { id: 3, name: 'Anna Garcia', mobile: '0915 987 6543', avatar: 'AG' },
    { id: 4, name: 'Miguel Lopez', mobile: '0919 456 7890', avatar: 'ML' },
    { id: 5, name: 'Sarah Johnson', mobile: '0920 678 9012', avatar: 'SJ' },
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
          <h1 className="text-xl font-semibold">Send Money</h1>
        </div>

        <div className="gala-card mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-galapera-purple" />
              <h2 className="font-semibold">Send To</h2>
            </div>
            <div className="text-sm text-muted-foreground">Balance: ₱24,500.75</div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search by name or mobile number"
            />
          </div>

          <div className="flex space-x-2 border-b mb-4">
            <button
              className={cn("pb-2 px-4 text-sm font-medium", 
                activeTab === 'contacts' 
                  ? "border-b-2 border-galapera-purple text-galapera-purple" 
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveTab('contacts')}
            >
              Contacts
            </button>
            <button
              className={cn("pb-2 px-4 text-sm font-medium", 
                activeTab === 'qrCode' 
                  ? "border-b-2 border-galapera-purple text-galapera-purple" 
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveTab('qrCode')}
            >
              QR Code
            </button>
          </div>

          {activeTab === 'contacts' ? (
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-galapera-light-purple/10 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="" alt={contact.name} />
                      <AvatarFallback>{contact.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.mobile}</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-galapera-purple hover:bg-galapera-dark-purple">
                    Select
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="h-32 w-32 bg-galapera-light-purple/30 rounded-lg flex items-center justify-center mb-4">
                <UserRound className="h-16 w-16 text-galapera-purple/50" />
              </div>
              <p className="text-center text-muted-foreground mb-4">Scan QR code to send money</p>
              <Button onClick={() => navigate('/scan-qr')} className="bg-galapera-purple hover:bg-galapera-dark-purple">
                Scan QR Code
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
