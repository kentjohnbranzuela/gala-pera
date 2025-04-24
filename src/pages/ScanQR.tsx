
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ScanQR = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scanning, setScanning] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [scanTimer, setScanTimer] = useState<NodeJS.Timeout | null>(null);

  // Simulate a QR code scan after a random time
  useEffect(() => {
    if (scanning && !scanned) {
      // Random time between 2-5 seconds to simulate scanning
      const randomTime = Math.floor(Math.random() * 3000) + 2000;
      
      const timer = setTimeout(() => {
        handleSuccessfulScan();
      }, randomTime);
      
      setScanTimer(timer);
    }
    
    return () => {
      if (scanTimer) {
        clearTimeout(scanTimer);
      }
    };
  }, [scanning]);

  const handleSuccessfulScan = () => {
    setScanned(true);
    setScanning(false);
    
    toast({
      title: "QR Code Scanned Successfully!",
      description: "Merchant: Coffee Shop • Amount: ₱120.00",
    });
    
    // After 2 seconds, navigate to a payment confirmation page
    setTimeout(() => {
      navigate('/scan-result', { 
        state: { 
          merchant: "Coffee Shop",
          amount: 120,
          reference: "TXN" + Math.floor(Math.random() * 1000000)
        }
      });
    }, 2000);
  };

  const resetScan = () => {
    setScanned(false);
    setScanning(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white/80"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold text-white">Scan QR</h1>
          </div>
          <Button
            variant="ghost"
            className="text-white bg-white/10"
            onClick={() => scanning ? setScanning(false) : resetScan()}
          >
            {scanning ? 'Stop' : 'Scan'}
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-galapera-dark-bg flex flex-col items-center justify-center">
        <div className="relative">
          <div className="h-64 w-64 border-2 border-white rounded-xl overflow-hidden flex items-center justify-center">
            {/* This would be replaced with an actual camera feed in a real implementation */}
            <div className="absolute inset-0 bg-black/50"></div>
            {scanned ? (
              <div className="z-10 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-semibold">QR Code Scanned!</p>
              </div>
            ) : (
              <p className="text-white text-center z-10 px-4">
                Position the QR code within the frame to scan
              </p>
            )}
          </div>
          
          {scanning && !scanned && (
            <>
              {/* Scanning animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-galapera-purple">
                <div className="h-full w-full bg-galapera-purple animate-scan"></div>
              </div>
              <div className="absolute inset-0 border-2 border-galapera-purple rounded-xl"></div>
            </>
          )}
        </div>

        <div className="mt-8 text-white text-center max-w-xs">
          <p className="text-sm text-white/70 mb-6">
            Scan any QR code to make a payment or send money to friends
          </p>
        </div>
      </div>

      <div className="bg-galapera-dark-bg py-4">
        <div className="container max-w-md mx-auto px-4">
          <Button 
            className="w-full bg-galapera-purple hover:bg-galapera-dark-purple"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanQR;
