import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, BookOpen } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/**
 * Schedule Page Component
 * Features:
 * - Weekly timetable view
 * - Day-wise schedule
 * - Current day highlighting
 * - Room and timing information
 */

const Schedule: React.FC = () => {
  const { user } = useAuth();
  const [selectedDay, setSelectedDay] = useState<string>('');

  if (!user) return null;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Group schedule by day
  const scheduleByDay = user.schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof user.schedule>);

  // Sort schedule by time for each day
  Object.keys(scheduleByDay).forEach(day => {
    scheduleByDay[day].sort((a, b) => {
      const timeA = a.time.split('-')[0];
      const timeB = b.time.split('-')[0];
      return timeA.localeCompare(timeB);
    });
  });

  const getTimeColor = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    if (hour < 10) return 'bg-blue-100 text-blue-800';
    if (hour < 12) return 'bg-green-100 text-green-800';
    if (hour < 14) return 'bg-yellow-100 text-yellow-800';
    if (hour < 16) return 'bg-purple-100 text-purple-800';
    return 'bg-orange-100 text-orange-800';
  };

  const displayDay = selectedDay || currentDay;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <Calendar className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Class Schedule</h1>
          <p className="text-slate-600">Your weekly timetable and class timings</p>
        </div>
      </div>

      {/* Day Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Day</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <Button
                key={day}
                variant={displayDay === day ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDay(day)}
                className={`${
                  currentDay === day && displayDay !== day 
                    ? 'border-blue-500 text-blue-600' 
                    : ''
                }`}
              >
                {day}
                {currentDay === day && (
                  <Badge variant="secondary" className="ml-2 text-xs">Today</Badge>
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule Highlight */}
      {currentDay === displayDay && (
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Today's Schedule - {currentDay}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {scheduleByDay[displayDay] && scheduleByDay[displayDay].length > 0 ? (
              <div className="grid gap-4">
                {scheduleByDay[displayDay].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center space-x-4">
                      <Badge className={getTimeColor(item.time)} variant="outline">
                        {item.time}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-slate-800">{item.subject}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">No classes scheduled for today</p>
                <p className="text-sm text-slate-500">Enjoy your free day!</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Weekly Schedule Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {days.map((day) => (
              <div key={day} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${
                    currentDay === day ? 'text-blue-600' : 'text-slate-800'
                  }`}>
                    {day}
                    {currentDay === day && (
                      <Badge variant="outline" className="ml-2 text-xs bg-blue-50 text-blue-600 border-blue-200">
                        Today
                      </Badge>
                    )}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {scheduleByDay[day]?.length || 0} classes
                  </Badge>
                </div>
                
                {scheduleByDay[day] && scheduleByDay[day].length > 0 ? (
                  <div className="space-y-3">
                    {scheduleByDay[day].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <Badge className={getTimeColor(item.time)} variant="outline">
                          {item.time}
                        </Badge>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">{item.subject}</h4>
                          <div className="flex items-center space-x-1 text-sm text-slate-600">
                            <MapPin className="w-3 h-3" />
                            <span>{item.room}</span>
                          </div>
                        </div>
                        <BookOpen className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No classes scheduled</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Schedule Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {user.schedule.length}
            </div>
            <p className="text-sm text-slate-600">Total Classes per Week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {Object.keys(scheduleByDay).length}
            </div>
            <p className="text-sm text-slate-600">Active Days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {scheduleByDay[currentDay]?.length || 0}
            </div>
            <p className="text-sm text-slate-600">Classes Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Schedule Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Schedule Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">📚 Study Tips</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Plan your day around class timings</li>
                <li>• Arrive 5-10 minutes early for each class</li>
                <li>• Use breaks between classes for quick reviews</li>
                <li>• Keep track of room changes or updates</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">⏰ Time Management</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Set reminders for important classes</li>
                <li>• Plan lunch breaks around your schedule</li>
                <li>• Use free periods for library study</li>
                <li>• Keep backup plans for room changes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;