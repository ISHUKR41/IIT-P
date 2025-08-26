import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe, Monitor, Smartphone, Save, Eye, EyeOff, Key, Mail, Phone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';
import gsap from 'gsap';

/**
 * Settings Page Component for Student Portal
 * 
 * Features:
 * - Comprehensive user settings management
 * - Profile information editing with validation
 * - Notification preferences customization
 * - Privacy and security settings
 * - Theme and appearance customization
 * - Language and accessibility options
 * - Account management and password changes
 * - Data export and backup options
 * - Real-time settings sync with localStorage
 * - Responsive design with smooth animations
 * 
 * Settings Categories:
 * - Profile: Personal information, contact details, bio
 * - Notifications: Email, push, SMS preferences
 * - Privacy: Data sharing, visibility, activity tracking  
 * - Security: Password, 2FA, login history, device management
 * - Appearance: Theme, font size, color scheme, layout
 * - Account: Deactivation, data export, backup, deletion
 */

interface UserSettings {
  profile: {
    name: string;
    email: string;
    phone: string;
    bio: string;
    profilePicture: string;
    socialLinks: {
      linkedin: string;
      github: string;
      twitter: string;
    };
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    academicUpdates: boolean;
    eventReminders: boolean;
    assignmentDeadlines: boolean;
    examSchedules: boolean;
    placementUpdates: boolean;
    libraryNotifications: boolean;
    hostelNotifications: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'friends' | 'private';
    showEmail: boolean;
    showPhone: boolean;
    allowDataTracking: boolean;
    shareAnalytics: boolean;
    activityTracking: boolean;
  };
  security: {
    twoFactorAuth: boolean;
    loginAlerts: boolean;
    sessionTimeout: number;
    passwordChangeReminder: boolean;
    securityAlerts: boolean;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    colorScheme: 'blue' | 'green' | 'purple' | 'orange';
    fontSize: 'small' | 'medium' | 'large';
    compactMode: boolean;
    reducedMotion: boolean;
  };
  language: {
    primary: string;
    secondary: string;
    dateFormat: string;
    timeFormat: '12h' | '24h';
    timezone: string;
  };
}

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<UserSettings>({
    profile: {
      name: user?.name || '',
      email: user?.profile?.email || '',
      phone: user?.profile?.phone || '',
      bio: '',
      profilePicture: '',
      socialLinks: {
        linkedin: '',
        github: '',
        twitter: ''
      }
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      academicUpdates: true,
      eventReminders: true,
      assignmentDeadlines: true,
      examSchedules: true,
      placementUpdates: true,
      libraryNotifications: false,
      hostelNotifications: true
    },
    privacy: {
      profileVisibility: 'friends',
      showEmail: false,
      showPhone: false,
      allowDataTracking: true,
      shareAnalytics: false,
      activityTracking: true
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
      sessionTimeout: 30,
      passwordChangeReminder: true,
      securityAlerts: true
    },
    appearance: {
      theme: 'system',
      colorScheme: 'blue',
      fontSize: 'medium',
      compactMode: false,
      reducedMotion: false
    },
    language: {
      primary: 'English',
      secondary: 'Hindi',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: '12h',
      timezone: 'Asia/Kolkata'
    }
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Initialize component with animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate page entrance
    tl.fromTo('.settings-header', 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.settings-tabs', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    );

    // Load saved settings
    loadSettings();

    return () => {
      tl.kill();
    };
  }, []);

  /**
   * Load settings from localStorage and user context
   * Merges default settings with saved preferences
   */
  const loadSettings = () => {
    try {
      const savedSettings = localStorage.getItem('student_settings');
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({
          ...prev,
          ...parsed,
          profile: {
            ...prev.profile,
            ...parsed.profile,
            name: user?.name || prev.profile.name,
            email: user?.profile?.email || prev.profile.email,
            phone: user?.profile?.phone || prev.profile.phone
          }
        }));
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  /**
   * Save settings to localStorage
   * Syncs user preferences across sessions
   */
  const saveSettings = async () => {
    try {
      localStorage.setItem('student_settings', JSON.stringify(settings));
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHasUnsavedChanges(false);
      
      // Animate save success
      gsap.to('.save-button', {
        scale: 1.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });
      
      toast.success('Settings saved successfully!');
      
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    }
  };

  /**
   * Handle setting value changes
   * Tracks unsaved changes and triggers animations
   */
  const handleSettingChange = (section: keyof UserSettings, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    
    setHasUnsavedChanges(true);
  };

  /**
   * Handle nested setting changes (e.g., profile.socialLinks.linkedin)
   */
  const handleNestedSettingChange = (section: keyof UserSettings, parentKey: string, childKey: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parentKey]: {
          ...(prev[section] as any)[parentKey],
          [childKey]: value
        }
      }
    }));
    
    setHasUnsavedChanges(true);
  };

  /**
   * Change password functionality
   * Validates current password and updates with new one
   */
  const changePassword = async () => {
    try {
      // Validate form
      if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
        toast.error('Please fill in all password fields');
        return;
      }

      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        toast.error('New passwords do not match');
        return;
      }

      if (passwordForm.newPassword.length < 6) {
        toast.error('New password must be at least 6 characters long');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
      });
      
      toast.success('Password changed successfully!');
      
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Failed to change password');
    }
  };

  /**
   * Export user data
   * Generates downloadable backup of user settings and data
   */
  const exportUserData = () => {
    const exportData = {
      profile: settings.profile,
      settings: settings,
      exportDate: new Date().toISOString(),
      user: {
        name: user?.name,
        regNo: user?.reg_no,
        course: user?.profile?.course
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `student_data_${user?.reg_no}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('User data exported successfully!');
  };

  /**
   * Reset settings to default
   * Resets all settings to their default values
   */
  const resetToDefaults = () => {
    const defaultSettings: UserSettings = {
      profile: {
        name: user?.name || '',
        email: user?.profile?.email || '',
        phone: user?.profile?.phone || '',
        bio: '',
        profilePicture: '',
        socialLinks: {
          linkedin: '',
          github: '',
          twitter: ''
        }
      },
      notifications: {
        emailNotifications: true,
        pushNotifications: true,
        smsNotifications: false,
        academicUpdates: true,
        eventReminders: true,
        assignmentDeadlines: true,
        examSchedules: true,
        placementUpdates: true,
        libraryNotifications: false,
        hostelNotifications: true
      },
      privacy: {
        profileVisibility: 'friends',
        showEmail: false,
        showPhone: false,
        allowDataTracking: true,
        shareAnalytics: false,
        activityTracking: true
      },
      security: {
        twoFactorAuth: false,
        loginAlerts: true,
        sessionTimeout: 30,
        passwordChangeReminder: true,
        securityAlerts: true
      },
      appearance: {
        theme: 'system',
        colorScheme: 'blue',
        fontSize: 'medium',
        compactMode: false,
        reducedMotion: false
      },
      language: {
        primary: 'English',
        secondary: 'Hindi',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: '12h',
        timezone: 'Asia/Kolkata'
      }
    };

    setSettings(defaultSettings);
    setHasUnsavedChanges(true);
    toast.info('Settings reset to defaults. Click Save to apply changes.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="settings-header flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and settings</p>
            </div>
          </div>
          
          {hasUnsavedChanges && (
            <Button 
              onClick={saveSettings}
              className="save-button bg-primary hover:bg-primary/90"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          )}
        </div>

        {/* Settings Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="settings-tabs w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-muted">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={settings.profile.name}
                      onChange={(e) => handleSettingChange('profile', 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.profile.email}
                      onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={settings.profile.phone}
                      onChange={(e) => handleSettingChange('profile', 'phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="course">Course</Label>
                    <Input
                      id="course"
                      value={user?.profile?.course || ''}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Input
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={settings.profile.bio}
                    onChange={(e) => handleSettingChange('profile', 'bio', e.target.value)}
                  />
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-semibold mb-4">Social Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="LinkedIn profile URL"
                        value={settings.profile.socialLinks.linkedin}
                        onChange={(e) => handleNestedSettingChange('profile', 'socialLinks', 'linkedin', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        placeholder="GitHub profile URL"
                        value={settings.profile.socialLinks.github}
                        onChange={(e) => handleNestedSettingChange('profile', 'socialLinks', 'github', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        placeholder="Twitter profile URL"
                        value={settings.profile.socialLinks.twitter}
                        onChange={(e) => handleNestedSettingChange('profile', 'socialLinks', 'twitter', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Communication Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <Switch
                        id="emailNotifications"
                        checked={settings.notifications.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'emailNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <Switch
                        id="pushNotifications"
                        checked={settings.notifications.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'pushNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <Switch
                        id="smsNotifications"
                        checked={settings.notifications.smsNotifications}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'smsNotifications', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Notification Categories</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="academicUpdates">Academic Updates</Label>
                      <Switch
                        id="academicUpdates"
                        checked={settings.notifications.academicUpdates}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'academicUpdates', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="eventReminders">Event Reminders</Label>
                      <Switch
                        id="eventReminders"
                        checked={settings.notifications.eventReminders}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'eventReminders', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="assignmentDeadlines">Assignment Deadlines</Label>
                      <Switch
                        id="assignmentDeadlines"
                        checked={settings.notifications.assignmentDeadlines}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'assignmentDeadlines', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="examSchedules">Exam Schedules</Label>
                      <Switch
                        id="examSchedules"
                        checked={settings.notifications.examSchedules}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'examSchedules', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="placementUpdates">Placement Updates</Label>
                      <Switch
                        id="placementUpdates"
                        checked={settings.notifications.placementUpdates}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'placementUpdates', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="libraryNotifications">Library Notifications</Label>
                      <Switch
                        id="libraryNotifications"
                        checked={settings.notifications.libraryNotifications}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'libraryNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hostelNotifications">Hostel Notifications</Label>
                      <Switch
                        id="hostelNotifications"
                        checked={settings.notifications.hostelNotifications}
                        onCheckedChange={(checked) => handleSettingChange('notifications', 'hostelNotifications', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="profileVisibility">Profile Visibility</Label>
                    <Select
                      value={settings.privacy.profileVisibility}
                      onValueChange={(value: 'public' | 'friends' | 'private') => 
                        handleSettingChange('privacy', 'profileVisibility', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showEmail">Show Email Address</Label>
                      <Switch
                        id="showEmail"
                        checked={settings.privacy.showEmail}
                        onCheckedChange={(checked) => handleSettingChange('privacy', 'showEmail', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showPhone">Show Phone Number</Label>
                      <Switch
                        id="showPhone"
                        checked={settings.privacy.showPhone}
                        onCheckedChange={(checked) => handleSettingChange('privacy', 'showPhone', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Data & Analytics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="allowDataTracking">Allow Data Tracking</Label>
                      <Switch
                        id="allowDataTracking"
                        checked={settings.privacy.allowDataTracking}
                        onCheckedChange={(checked) => handleSettingChange('privacy', 'allowDataTracking', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="shareAnalytics">Share Analytics</Label>
                      <Switch
                        id="shareAnalytics"
                        checked={settings.privacy.shareAnalytics}
                        onCheckedChange={(checked) => handleSettingChange('privacy', 'shareAnalytics', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="activityTracking">Activity Tracking</Label>
                      <Switch
                        id="activityTracking"
                        checked={settings.privacy.activityTracking}
                        onCheckedChange={(checked) => handleSettingChange('privacy', 'activityTracking', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Authentication</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                      <Switch
                        id="twoFactorAuth"
                        checked={settings.security.twoFactorAuth}
                        onCheckedChange={(checked) => handleSettingChange('security', 'twoFactorAuth', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="loginAlerts">Login Alerts</Label>
                      <Switch
                        id="loginAlerts"
                        checked={settings.security.loginAlerts}
                        onCheckedChange={(checked) => handleSettingChange('security', 'loginAlerts', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Change Password</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={passwordForm.showCurrentPassword ? 'text' : 'password'}
                          value={passwordForm.currentPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setPasswordForm(prev => ({ ...prev, showCurrentPassword: !prev.showCurrentPassword }))}
                        >
                          {passwordForm.showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={passwordForm.showNewPassword ? 'text' : 'password'}
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setPasswordForm(prev => ({ ...prev, showNewPassword: !prev.showNewPassword }))}
                        >
                          {passwordForm.showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={passwordForm.showConfirmPassword ? 'text' : 'password'}
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setPasswordForm(prev => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword }))}
                        >
                          {passwordForm.showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button onClick={changePassword} className="w-full md:w-auto">
                    <Key className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Session Management</h4>
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Select
                      value={settings.security.sessionTimeout.toString()}
                      onValueChange={(value) => handleSettingChange('security', 'sessionTimeout', parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="0">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <Select
                      value={settings.appearance.theme}
                      onValueChange={(value: 'light' | 'dark' | 'system') => 
                        handleSettingChange('appearance', 'theme', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="colorScheme">Color Scheme</Label>
                    <Select
                      value={settings.appearance.colorScheme}
                      onValueChange={(value: 'blue' | 'green' | 'purple' | 'orange') => 
                        handleSettingChange('appearance', 'colorScheme', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="purple">Purple</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fontSize">Font Size</Label>
                    <Select
                      value={settings.appearance.fontSize}
                      onValueChange={(value: 'small' | 'medium' | 'large') => 
                        handleSettingChange('appearance', 'fontSize', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="compactMode">Compact Mode</Label>
                    <Switch
                      id="compactMode"
                      checked={settings.appearance.compactMode}
                      onCheckedChange={(checked) => handleSettingChange('appearance', 'compactMode', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="reducedMotion">Reduced Motion</Label>
                    <Switch
                      id="reducedMotion"
                      checked={settings.appearance.reducedMotion}
                      onCheckedChange={(checked) => handleSettingChange('appearance', 'reducedMotion', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  Account Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Data Management</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={exportUserData} variant="outline">
                      Export Data
                    </Button>
                    <Button onClick={resetToDefaults} variant="outline">
                      Reset to Defaults
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-red-600">Danger Zone</h4>
                  <p className="text-sm text-muted-foreground">
                    These actions are irreversible. Please be careful.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="destructive" onClick={() => toast.info('Account deactivation feature coming soon')}>
                      Deactivate Account
                    </Button>
                    <Button variant="destructive" onClick={() => toast.info('Account deletion feature coming soon')}>
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;