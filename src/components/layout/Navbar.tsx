
import { Bell, Search, Shield, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export default function Navbar() {
  return (
    <header className="border-b bg-card h-14 px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">CyberSIEM</span>
      </div>
      
      <div className="hidden md:flex items-center max-w-md w-full mx-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search logs, alerts, IOCs..." 
            className="pl-8 bg-background"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-cyber-alert-critical">
            3
          </Badge>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
