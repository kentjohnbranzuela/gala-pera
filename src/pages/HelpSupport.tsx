
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, Phone, FileQuestion, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import FooterNav from '@/components/FooterNav';
import { useToast } from '@/hooks/use-toast';

const HelpSupport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Initiated",
      description: "Search functionality will be available in the next update.",
      variant: "default",
    });
  };
  
  const faqs = [
    "How do I send money?",
    "How to recover my account?",
    "What are the transaction fees?",
    "How to report a suspicious transaction?",
    "How to update my personal information?"
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
          <h1 className="text-xl font-semibold">Help & Support</h1>
        </div>

        <form onSubmit={handleSearch} className="mb-5">
          <Input placeholder="Search for help" className="bg-white" />
        </form>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-3">Contact Us</h2>
          
          <div className="flex flex-col gap-3 mb-4">
            <Button variant="outline" className="justify-start">
              <MessageCircle className="h-5 w-5 mr-3" />
              Chat with Support
            </Button>
            
            <Button variant="outline" className="justify-start">
              <Phone className="h-5 w-5 mr-3" />
              Call Support (24/7)
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
          <h2 className="font-medium mb-3">Frequently Asked Questions</h2>
          
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div 
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => {
                  toast({
                    title: "FAQ Selected",
                    description: "Detailed FAQ content will be available soon.",
                    variant: "default",
                  });
                }}
              >
                <div className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-galapera-purple" />
                  <span>{faq}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
              {index < faqs.length - 1 && <Separator />}
            </React.Fragment>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full mt-4"
          >
            View All FAQs
          </Button>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default HelpSupport;
