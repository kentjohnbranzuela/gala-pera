
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceItem from './ServiceItem';
import { 
  CreditCard, 
  Wallet, 
  Send, 
  PiggyBank, 
  DollarSign, 
  Euro, 
  IndianRupee, 
  Coins 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ServiceGrid = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const services = [
    { icon: <CreditCard size={18} />, label: 'QR Pay', path: '/scan-qr' },
    { icon: <PiggyBank size={18} />, label: 'Bank Transfer', path: '/bank-transfer' },
    { icon: <DollarSign size={18} />, label: 'Invest', path: '/invest' },
    { icon: <Send size={18} />, label: 'Remit', path: '/remit' },
    { icon: <Coins size={18} />, label: 'Buy Load', path: '/mobile-load' },
    { icon: <Euro size={18} />, label: 'Insurance', path: '/insurance' },
    { icon: <IndianRupee size={18} />, label: 'Loans', path: '/loans' },
    { icon: <Wallet size={18} />, label: 'More', path: '/services' }
  ];

  const handleServiceClick = (path: string) => {
    // For now, we'll only allow certain paths to navigate properly
    if (path === '/scan-qr' || path === '/mobile-load') {
      navigate(path);
    } else {
      toast({
        title: "Coming Soon",
        description: "This feature will be available in a future update",
      });
    }
  };

  return (
    <div className="mt-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Services</h2>
      </div>
      <div className="grid grid-cols-4 gap-y-4">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            label={service.label}
            onClick={() => handleServiceClick(service.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
