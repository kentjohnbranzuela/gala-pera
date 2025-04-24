
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FooterNav from '@/components/FooterNav';

const PersonalInfo = () => {
  const navigate = useNavigate();
  
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
          <h1 className="text-xl font-semibold">Personal Information</h1>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm mb-5">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="h-20 w-20 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                <AvatarFallback className="bg-galapera-light-purple text-white text-xl">JD</AvatarFallback>
              </Avatar>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute bottom-0 right-0 rounded-full h-6 w-6 bg-white p-1"
              >
                <Edit className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Juan" readOnly />
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Dela Cruz" readOnly />
            </div>
            
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" defaultValue="January 1, 1990" readOnly />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="juan.delacruz@example.com" readOnly />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="0917 123 4567" readOnly />
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border-galapera-purple text-galapera-purple hover:bg-galapera-light-purple/20"
            >
              Edit Information
            </Button>
          </form>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default PersonalInfo;
