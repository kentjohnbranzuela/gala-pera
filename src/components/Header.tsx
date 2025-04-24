
import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 pt-6">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/kentjohnbranzuela/myweb/image/p1.jpg" alt="Profile" />
          <AvatarFallback>GP</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-muted-foreground">Good day</p>
          <h2 className="font-semibold">KentJohn Branzuela</h2>
        </div>
      </div>
      <div className="relative">
        <Bell className="h-6 w-6 text-galapera-dark-purple" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-galapera-red rounded-full"></span>
      </div>
    </header>
  );
};

export default Header;
