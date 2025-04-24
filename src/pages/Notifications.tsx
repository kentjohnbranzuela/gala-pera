
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Clock, CreditCard, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import FooterNav from '@/components/FooterNav';

const Notifications = () => {
  const navigate = useNavigate();
  
  const notifications = [
    {
      icon: <Bell className="h-5 w-5 text-galapera-purple" />,
      title: "You received ₱1,000 from Maria Santos",
      time: "2 hours ago",
      type: "transfer"
    },
    {
      icon: <CreditCard className="h-5 w-5 text-blue-500" />,
      title: "Bill payment successful",
      description: "Your Meralco bill payment of ₱2,450 was successful",
      time: "Yesterday, 3:45 PM",
      type: "bill"
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      title: "Your account balance is low",
      description: "Your balance is below ₱500. Consider adding funds.",
      time: "2 days ago",
      type: "alert"
    },
  ];
  
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
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-2">Settings</h2>
          <div className="flex items-center justify-between py-3">
            <span>Push Notifications</span>
            <Switch defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <span>SMS Alerts</span>
            <Switch defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between py-3">
            <span>Email Notifications</span>
            <Switch />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Recent Notifications</h2>
            <Button variant="ghost" className="h-8 text-xs">Mark all as read</Button>
          </div>
          
          {notifications.map((notification, index) => (
            <React.Fragment key={index}>
              <div className="py-3">
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    notification.type === 'alert' ? 'bg-amber-100' : 
                    notification.type === 'bill' ? 'bg-blue-100' : 'bg-galapera-light-purple/30'
                  }`}>
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{notification.title}</p>
                    {notification.description && (
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    )}
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </div>
              {index < notifications.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default Notifications;
