import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  BookOpen, 
  AlertCircle, 
  TrendingUp, 
  Clock,
  FileText,
  Users,
  Bell
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

/**
 * Student Dashboard Component
 * Features:
 * - Student overview with key metrics
 * - Quick access to important sections
 * - Recent activities and notifications
 * - Attendance summary
 * - Upcoming deadlines
 */

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  // Calculate pending assignments
  const pendingAssignments = user.assignments.filter(a => a.status === 'pending').length;
  
  // Get next exam
  const nextExam = user.exams.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
  
  // Get recent notices
  const recentNotices = user.notice.slice(0, 3);

  // Get upcoming events
  const upcomingEvents = user.events
    .filter(e => new Date(e.date) > new Date())
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Welcome back, {user.name}!
        </h1>
        <p className="text-slate-600">
          Here's what's happening with your academics today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Overall Attendance</p>
                <p className="text-2xl font-bold">{user.attendance.overall}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Pending Assignments</p>
                <p className="text-2xl font-bold">{pendingAssignments}</p>
              </div>
              <BookOpen className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Upcoming Exams</p>
                <p className="text-2xl font-bold">{user.exams.length}</p>
              </div>
              <FileText className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">New Notices</p>
                <p className="text-2xl font-bold">{user.notice.length}</p>
              </div>
              <Bell className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Exam */}
        {nextExam && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Next Exam</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{nextExam.subject}</h3>
                    <p className="text-slate-600">{nextExam.type}</p>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Upcoming
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Date</p>
                    <p className="font-medium">{new Date(nextExam.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Time</p>
                    <p className="font-medium">{nextExam.time}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Room</p>
                    <p className="font-medium">{nextExam.room}</p>
                  </div>
                </div>
                <Link to="/student-portal/exams">
                  <Button className="w-full mt-4" variant="outline">
                    View All Exams
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Attendance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>Attendance Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.attendance.subjects.slice(0, 4).map((subject, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{subject.name}</p>
                    <p className="text-sm text-slate-500">
                      {subject.present}/{subject.total} classes
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      subject.percentage >= 75 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {subject.percentage}%
                    </p>
                  </div>
                </div>
              ))}
              <Link to="/student-portal/attendance">
                <Button className="w-full mt-4" variant="outline">
                  View Detailed Attendance
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Notices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <span>Recent Notices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotices.map((notice, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{notice.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{notice.content}</p>
                      <p className="text-xs text-slate-500 mt-2">
                        {new Date(notice.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge 
                      variant={notice.priority === 'high' ? 'destructive' : 
                              notice.priority === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {notice.priority}
                    </Badge>
                  </div>
                </div>
              ))}
              <Link to="/student-portal/notice">
                <Button className="w-full mt-4" variant="outline">
                  View All Notices
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-slate-600">{event.venue}</p>
                      <div className="flex items-center space-x-4 text-xs text-slate-500 mt-1">
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-center py-4">No upcoming events</p>
              )}
              <Link to="/student-portal/events">
                <Button className="w-full mt-4" variant="outline">
                  View All Events
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/student-portal/schedule">
              <Button variant="outline" className="w-full h-auto flex-col space-y-2 p-4">
                <Calendar className="w-6 h-6" />
                <span>View Schedule</span>
              </Button>
            </Link>
            <Link to="/student-portal/assignments">
              <Button variant="outline" className="w-full h-auto flex-col space-y-2 p-4">
                <BookOpen className="w-6 h-6" />
                <span>Assignments</span>
              </Button>
            </Link>
            <Link to="/student-portal/resources">
              <Button variant="outline" className="w-full h-auto flex-col space-y-2 p-4">
                <FileText className="w-6 h-6" />
                <span>Resources</span>
              </Button>
            </Link>
            <Link to="/student-portal/profile">
              <Button variant="outline" className="w-full h-auto flex-col space-y-2 p-4">
                <Users className="w-6 h-6" />
                <span>Profile</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;