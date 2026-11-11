import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Lightbulb, Star, Users } from 'lucide-react';
import { api } from '@/lib/api';
import { leadership } from '@/data/team';

type Status = 'loading' | 'ok' | 'error';

const statusStyles: Record<Status, { label: string; className: string }> = {
  loading: { label: 'Checking', className: 'bg-slate-100 text-slate-600' },
  ok: { label: 'Online', className: 'bg-emerald-100 text-emerald-700' },
  error: { label: 'Unreachable', className: 'bg-red-100 text-red-700' },
};

const AdminDashboard = () => {
  const projects = useQuery({ queryKey: ['projects'], queryFn: api.getProjects });
  const insights = useQuery({ queryKey: ['insights'], queryFn: api.getInsights });

  const count = (q: { isLoading: boolean; isError: boolean; data?: unknown[] }) =>
    q.isLoading ? '…' : q.isError ? '—' : String(q.data?.length ?? 0);

  const stats = [
    { title: 'Total Projects', value: count(projects), icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Published Insights', value: count(insights), icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-50' },
    {
      title: 'Featured Insights',
      value: insights.isLoading ? '…' : insights.isError ? '—' : String(insights.data?.filter((i) => i.featured).length ?? 0),
      icon: Star,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    { title: 'Leadership Team', value: String(leadership.length), icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const apiStatus: Status =
    projects.isLoading || insights.isLoading ? 'loading' : projects.isError || insights.isError ? 'error' : 'ok';

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-navy">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Administrator.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-navy/5 shadow-sm hover:shadow-md transition-shadow">
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
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2 border-navy/10 hover:border-navy hover:bg-navy/5">
              <Link to="/admin/projects">
                <Briefcase className="w-6 h-6 text-navy" />
                <span>Manage Projects</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2 border-navy/10 hover:border-navy hover:bg-navy/5">
              <Link to="/admin/insights">
                <Lightbulb className="w-6 h-6 text-navy" />
                <span>Manage Insights</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-navy/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-navy">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">API &amp; Database</span>
              <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${statusStyles[apiStatus].className}`}>
                {statusStyles[apiStatus].label}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
