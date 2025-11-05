import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  GraduationCap,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userRole = localStorage.getItem("userRole") || "admin";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    navigate("/auth");
  };

  const navItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard", roles: ["admin", "teacher"] },
    { title: "Students", icon: Users, path: "/students", roles: ["admin", "teacher"] },
    { title: "Staff", icon: GraduationCap, path: "/staff", roles: ["admin"] },
    { title: "Classes", icon: BookOpen, path: "/classes", roles: ["admin", "teacher"] },
    { title: "Attendance", icon: Calendar, path: "/attendance", roles: ["admin", "teacher"] },
    { title: "Fees", icon: DollarSign, path: "/fees", roles: ["admin"] },
    { title: "Settings", icon: Settings, path: "/settings", roles: ["admin"] },
  ];

  const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

  const NavContent = () => (
    <>
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Evolve</h2>
            <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-secondary text-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col transition-transform",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <NavContent />
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-card border-r border-border">
        <NavContent />
      </aside>
    </>
  );
};

export default Sidebar;
