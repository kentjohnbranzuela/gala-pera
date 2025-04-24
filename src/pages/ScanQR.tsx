
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ScanQR = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);

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
            onClick={() => setScanning(!scanning)}
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
            <p className="text-white text-center z-10 px-4">
              Position the QR code within the frame to scan
            </p>
          </div>
          
          {scanning && (
            <>
              {/* Scanning animation */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-galapera-purple animate-pulse"></div>
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
