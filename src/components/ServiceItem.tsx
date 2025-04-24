
import React from 'react';

interface ServiceItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ServiceItem = ({ icon, label, onClick }: ServiceItemProps) => {
  return (
    <button
      className="flex flex-col items-center gap-2 p-2 transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-lg bg-galapera-light-purple/30 flex items-center justify-center text-galapera-purple shadow-sm">
        {icon}
      </div>
      <span className="text-xs font-medium text-center">{label}</span>
    </button>
  );
};

export default ServiceItem;
