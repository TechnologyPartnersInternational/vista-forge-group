import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Lightbulb, TrendingUp, Users } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Projects', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Insights', value: '15', icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'Team Members', value: '8', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Growth', value: '+12%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-navy">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Administrator.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-navy/5 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bg} p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-navy">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-navy/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-navy">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex flex-col gap-2 border-navy/10 hover:border-navy hover:bg-navy/5">
              <Briefcase className="w-6 h-6 text-navy" />
              <span>Add Project</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2 border-navy/10 hover:border-navy hover:bg-navy/5">
              <Lightbulb className="w-6 h-6 text-navy" />
              <span>New Insight</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-navy/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-navy">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database Connection</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 rounded-full">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Frontend Status</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 rounded-full">
                  Healthy
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Helper button import for usage
import { Button } from '@/components/ui/button';

export default AdminDashboard;
