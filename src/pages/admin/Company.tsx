import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

const AdminCompany = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-navy text-gradient-navy">Company Information</h1>
        <p className="text-muted-foreground mt-1">Manage core company details and brand assets.</p>
      </div>

      <Card className="border-navy/5 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-navy flex items-center gap-2">
            <Building2 className="w-5 h-5 text-navy" />
            General Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground italic bg-mist p-4 rounded-lg border border-navy/5">
            This section is currently under development. In the future, you will be able to update your Mission, Vision, and Core values here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCompany;
