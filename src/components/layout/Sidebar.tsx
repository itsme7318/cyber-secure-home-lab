
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Activity, 
  AlertCircle, 
  BarChart3, 
  Database,
  FileText, 
  Fingerprint, 
  Flame, 
  Globe2, 
  HardDrive,
  Layers, 
  Lock, 
  Play, 
  Settings, 
  Shield, 
  UserCog
} from "lucide-react";

interface SidebarItemProps {
  to: string;
  icon: ReactNode;
  text: string;
}

function SidebarItem({ to, icon, text }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
          isActive
            ? "bg-sidebar-accent text-primary font-medium"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )
      }
    >
      <div className="h-5 w-5">{icon}</div>
      <span>{text}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-sidebar h-[calc(100vh-3.5rem)] hidden md:block overflow-y-auto">
      <div className="py-4 px-3">
        <div className="mb-6">
          <h3 className="px-3 text-xs font-medium uppercase text-muted-foreground mb-2">
            Monitoring
          </h3>
          <nav className="space-y-1">
            <SidebarItem to="/" icon={<BarChart3 />} text="Dashboard" />
            <SidebarItem to="/logs" icon={<FileText />} text="Log Analysis" />
            <SidebarItem to="/alerts" icon={<AlertCircle />} text="Alerts" />
            <SidebarItem to="/events" icon={<Activity />} text="Events" />
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="px-3 text-xs font-medium uppercase text-muted-foreground mb-2">
            Security
          </h3>
          <nav className="space-y-1">
            <SidebarItem to="/incidents" icon={<Flame />} text="Incidents" />
            <SidebarItem to="/threats" icon={<Shield />} text="Threat Intel" />
            <SidebarItem to="/assets" icon={<HardDrive />} text="Assets" />
            <SidebarItem to="/vulnerabilities" icon={<Lock />} text="Vulnerabilities" />
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="px-3 text-xs font-medium uppercase text-muted-foreground mb-2">
            Training
          </h3>
          <nav className="space-y-1">
            <SidebarItem to="/labs" icon={<Play />} text="Labs" />
            <SidebarItem to="/scenarios" icon={<Layers />} text="Scenarios" />
            <SidebarItem to="/tutorials" icon={<UserCog />} text="Tutorials" />
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="px-3 text-xs font-medium uppercase text-muted-foreground mb-2">
            System
          </h3>
          <nav className="space-y-1">
            <SidebarItem to="/integrations" icon={<Globe2 />} text="Integrations" />
            <SidebarItem to="/collectors" icon={<Database />} text="Collectors" />
            <SidebarItem to="/settings" icon={<Settings />} text="Settings" />
          </nav>
        </div>
      </div>
    </aside>
  );
}
