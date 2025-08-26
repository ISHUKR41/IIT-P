import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Assignments: React.FC = () => {
  const { user } = useAuth();
  if (!user) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'submitted': return 'secondary';
      case 'pending': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Assignments</h1>
          <p className="text-slate-600">Track your assignments and deadlines</p>
        </div>
      </div>

      <div className="grid gap-6">
        {user.assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                  <p className="text-slate-600 mb-4">{assignment.subject}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={getStatusColor(assignment.status)}>
                  {assignment.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;