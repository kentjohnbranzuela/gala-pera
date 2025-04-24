
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ReceiveMoney = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText('0917 123 4567');
    toast({
      title: 'Account number copied!',
      description: 'You can now paste it wherever you need.',
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="text-xl font-semibold">Receive Money</h1>
        </div>

        <div className="gala-card">
          <div className="flex justify-center mb-6">
            <div className="h-32 w-32 bg-galapera-light-purple/20 rounded-lg flex items-center justify-center">
              <div className="h-24 w-24 bg-white p-2 rounded-md shadow-sm flex items-center justify-center">
                {/* QR Code Placeholder - In real app use a QR library */}
                <div className="grid grid-cols-5 grid-rows-5 gap-1 h-full w-full">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div 
                      key={index} 
                      className={`bg-black ${Math.random() > 0.7 ? 'opacity-0' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-semibold mb-1">Juan Dela Cruz</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="text-muted-foreground text-sm">0917 123 4567</p>
              <button onClick={handleCopyClick}>
                <Copy className="h-4 w-4 text-galapera-purple" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-galapera-purple hover:bg-galapera-dark-purple">
              <Share className="h-4 w-4 mr-2" /> Share QR Code
            </Button>
            <Button variant="outline" className="border-galapera-purple text-galapera-purple hover:bg-galapera-light-purple">
              <Download className="h-4 w-4 mr-2" /> Save QR Code
            </Button>
          </div>

          <div className="mt-8 p-4 bg-galapera-light-purple/20 rounded-lg">
            <h3 className="font-medium text-sm mb-2">How to receive money</h3>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>1. Show this QR code to the sender</li>
              <li>2. They can scan it using their Gala Pera or other payment apps</li>
              <li>3. Once sent, you'll receive a notification</li>
              <li>4. Money will be instantly credited to your account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveMoney;
