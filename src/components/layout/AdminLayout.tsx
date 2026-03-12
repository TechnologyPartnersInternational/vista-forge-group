import React from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  BarChart3, 
  LayoutDashboard, 
  Briefcase, 
  Lightbulb, 
  Building2, 
  LogOut,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { title: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'Company', path: '/admin/company', icon: Building2 },
    { title: 'Projects', path: '/admin/projects', icon: Briefcase },
    { title: 'Insights', path: '/admin/insights', icon: Lightbulb },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('tpi_admin_auth');
    navigate('/tpi-admin-portal');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white border-r border-navy/10">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 navy-gradient rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-navy leading-none">TPI Admin</h2>
            <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">Management Suite</p>
          </div>
        </div>
      </div>
      
      <Separator className="bg-navy/5" />
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-navy text-white shadow-md shadow-navy/20' 
                  : 'text-muted-foreground hover:bg-navy/5 hover:text-navy'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-navy'}`} />
              <span className="font-medium">{item.title}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/5"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-mist">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white border-navy/10 shadow-sm">
              <Menu className="w-6 h-6 text-navy" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-none w-72">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
