import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/**
 * Attendance Page Component
 * Features:
 * - Overall attendance percentage
 * - Subject-wise attendance breakdown
 * - Visual progress indicators
 * - Attendance status warnings
 */

const Attendance: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 85) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 85) return { status: 'Excellent', variant: 'default' as const, icon: CheckCircle };
    if (percentage >= 75) return { status: 'Good', variant: 'secondary' as const, icon: TrendingUp };
    return { status: 'Low', variant: 'destructive' as const, icon: AlertTriangle };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <Calendar className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Attendance</h1>
          <p className="text-slate-600">Track your class attendance and performance</p>
        </div>
      </div>

      {/* Overall Attendance Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-blue-800">Overall Attendance</span>
            <Badge variant="outline" className="bg-white text-blue-800 border-blue-300">
              Academic Year 2023-24
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <p className={`text-4xl font-bold ${getAttendanceColor(user.attendance.overall)}`}>
                {user.attendance.overall}%
              </p>
              <p className="text-slate-600 text-sm">Overall</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-slate-700">
                {user.attendance.subjects.reduce((acc, subj) => acc + subj.present, 0)}
              </p>
              <p className="text-slate-600 text-sm">Classes Attended</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-slate-700">
                {user.attendance.subjects.reduce((acc, subj) => acc + subj.total, 0)}
              </p>
              <p className="text-slate-600 text-sm">Total Classes</p>
            </div>
          </div>
          
          {/* Overall Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to 75% (Minimum Required)</span>
              <span>{user.attendance.overall >= 75 ? 'Met' : 'Not Met'}</span>
            </div>
            <Progress value={user.attendance.overall} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {user.attendance.subjects.map((subject, index) => {
              const statusInfo = getAttendanceStatus(subject.percentage);
              const StatusIcon = statusInfo.icon;
              
              return (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <h3 className="font-semibold text-lg">{subject.name}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={statusInfo.variant} className="flex items-center space-x-1">
                        <StatusIcon className="w-3 h-3" />
                        <span>{statusInfo.status}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className={`text-2xl font-bold ${getAttendanceColor(subject.percentage)}`}>
                        {subject.percentage}%
                      </p>
                      <p className="text-slate-600 text-sm">Attendance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold text-green-600">{subject.present}</p>
                      <p className="text-slate-600 text-sm">Present</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold text-red-600">{subject.total - subject.present}</p>
                      <p className="text-slate-600 text-sm">Absent</p>
                    </div>
                  </div>
                  
                  {/* Subject Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Classes: {subject.present}/{subject.total}</span>
                      <span className={subject.percentage >= 75 ? 'text-green-600' : 'text-red-600'}>
                        {subject.percentage >= 75 ? '✓ Safe' : '⚠ Below Minimum'}
                      </span>
                    </div>
                    <Progress 
                      value={subject.percentage} 
                      className="h-2"
                    />
                  </div>
                  
                  {/* Attendance Analysis */}
                  {subject.percentage < 75 && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-red-800">Attendance Warning</p>
                          <p className="text-red-700">
                            You need to attend the next {Math.ceil((75 * subject.total - 100 * subject.present) / 25)} 
                            classes consecutively to reach 75% attendance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {subject.percentage >= 85 && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-green-800">Excellent Attendance!</p>
                          <p className="text-green-700">
                            You can miss up to {Math.floor((subject.present - 0.75 * subject.total) / 0.25)} 
                            more classes and still maintain 75% attendance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Attendance Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span>Attendance Guidelines</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-800">✓ Good Practices</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Maintain at least 75% attendance in all subjects</li>
                <li>• Attend classes regularly to avoid last-minute rush</li>
                <li>• Inform faculty in advance for planned absences</li>
                <li>• Keep track of your attendance weekly</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-800">⚠ Important Notes</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Less than 75% attendance may result in debarment</li>
                <li>• Medical leave requires proper documentation</li>
                <li>• Attendance is calculated from the date of admission</li>
                <li>• Contact academic office for attendance queries</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;