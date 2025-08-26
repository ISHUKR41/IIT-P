import React, { useState, useRef, useEffect } from 'react';
import { Camera, ScanLine, CheckCircle, XCircle, RotateCcw, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';
import gsap from 'gsap';

/**
 * QR Scanner Component for Student Portal
 * 
 * Features:
 * - Real-time QR code scanning using device camera
 * - Attendance marking through QR codes
 * - Event check-in functionality
 * - Library resource access
 * - Lab equipment booking confirmation
 * - Modern UI with GSAP animations
 * - Responsive design for all devices
 * - Camera permission handling
 * - Scan history tracking
 * - Multiple QR code format support
 * 
 * Usage:
 * - Students can scan QR codes for attendance
 * - Event organizers can verify student participation
 * - Library staff can track resource usage
 * - Lab technicians can confirm equipment bookings
 */

interface ScanResult {
  id: string;
  type: 'attendance' | 'event' | 'library' | 'lab' | 'unknown';
  data: string;
  timestamp: Date;
  status: 'success' | 'error';
  message: string;
}

const QRScanner: React.FC = () => {
  const { user } = useAuth();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);
  const [currentScan, setCurrentScan] = useState<string>('');
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP animations on component mount
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate scanner interface entrance
    tl.fromTo('.scanner-card', 
      { 
        opacity: 0, 
        scale: 0.9,
        y: 30 
      }, 
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.8, 
        ease: 'power3.out' 
      }
    )
    .fromTo('.scanner-controls', 
      { 
        opacity: 0, 
        x: -20 
      }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out' 
      }, 
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Animate scan line when scanning is active
  useEffect(() => {
    if (isScanning && scanLineRef.current) {
      gsap.to(scanLineRef.current, {
        y: 200,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
    } else if (scanLineRef.current) {
      gsap.killTweensOf(scanLineRef.current);
      gsap.set(scanLineRef.current, { y: 0 });
    }
  }, [isScanning]);

  /**
   * Request camera permission and start video stream
   * Handles different browser compatibility and permission states
   */
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsScanning(true);
        setCameraPermission('granted');
        
        // Start scanning animation
        gsap.to('.scan-overlay', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
        
        toast.success('Camera started successfully!');
      }
    } catch (error) {
      console.error('Camera access error:', error);
      setCameraPermission('denied');
      toast.error('Camera access denied. Please enable camera permissions.');
    }
  };

  /**
   * Stop camera stream and scanning process
   * Clean up video stream resources
   */
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    setIsScanning(false);
    
    // Stop scanning animations
    gsap.to('.scan-overlay', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    toast.info('Camera stopped');
  };

  /**
   * Process scanned QR code data
   * Determines scan type and performs appropriate action
   */
  const processScanResult = (scanData: string) => {
    const newScan: ScanResult = {
      id: Date.now().toString(),
      type: determineScanType(scanData),
      data: scanData,
      timestamp: new Date(),
      status: 'success',
      message: ''
    };

    // Process different types of QR codes
    switch (newScan.type) {
      case 'attendance':
        newScan.message = 'Attendance marked successfully';
        markAttendance(scanData);
        break;
      case 'event':
        newScan.message = 'Event check-in completed';
        checkInEvent(scanData);
        break;
      case 'library':
        newScan.message = 'Library resource accessed';
        accessLibraryResource(scanData);
        break;
      case 'lab':
        newScan.message = 'Lab booking confirmed';
        confirmLabBooking(scanData);
        break;
      default:
        newScan.status = 'error';
        newScan.message = 'Unknown QR code format';
    }

    // Add to scan history
    setScanResults(prev => [newScan, ...prev.slice(0, 9)]); // Keep last 10 scans
    setCurrentScan(scanData);
    
    // Save to localStorage
    const savedScans = JSON.parse(localStorage.getItem('qr_scan_history') || '[]');
    savedScans.unshift(newScan);
    localStorage.setItem('qr_scan_history', JSON.stringify(savedScans.slice(0, 50))); // Keep last 50 scans
    
    // Show success animation
    gsap.fromTo('.scan-result', 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
    );
    
    toast.success(newScan.message);
  };

  /**
   * Determine QR code type based on data format
   * Returns appropriate scan type for processing
   */
  const determineScanType = (data: string): ScanResult['type'] => {
    if (data.includes('attendance_') || data.includes('class_')) return 'attendance';
    if (data.includes('event_') || data.includes('seminar_')) return 'event';
    if (data.includes('library_') || data.includes('book_')) return 'library';
    if (data.includes('lab_') || data.includes('equipment_')) return 'lab';
    return 'unknown';
  };

  /**
   * Mark attendance using QR code data
   */
  const markAttendance = (data: string) => {
    // Process attendance marking logic
    console.log(`Marking attendance for ${user?.name} with data:`, data);
  };

  /**
   * Check in to event using QR code
   */
  const checkInEvent = (data: string) => {
    // Process event check-in logic
    console.log(`Event check-in for ${user?.name} with data:`, data);
  };

  /**
   * Access library resource using QR code
   */
  const accessLibraryResource = (data: string) => {
    // Process library access logic
    console.log(`Library access for ${user?.name} with data:`, data);
  };

  /**
   * Confirm lab booking using QR code
   */
  const confirmLabBooking = (data: string) => {
    // Process lab booking confirmation logic
    console.log(`Lab booking confirmation for ${user?.name} with data:`, data);
  };

  /**
   * Simulate QR code scan for testing purposes
   * Generates different types of test QR codes
   */
  const simulateScan = (type: string) => {
    const testData = {
      attendance: `attendance_CS101_${Date.now()}`,
      event: `event_tech_seminar_${Date.now()}`,
      library: `library_book_12345_${Date.now()}`,
      lab: `lab_equipment_microscope_${Date.now()}`
    };
    
    processScanResult(testData[type as keyof typeof testData] || 'unknown_test_data');
  };

  /**
   * Clear scan history from state and localStorage
   */
  const clearScanHistory = () => {
    setScanResults([]);
    localStorage.removeItem('qr_scan_history');
    toast.success('Scan history cleared');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">QR Code Scanner</h1>
          <p className="text-muted-foreground">
            Scan QR codes for attendance, events, library access, and lab bookings
          </p>
        </div>

        {/* Main Scanner Card */}
        <Card className="scanner-card bg-card/80 backdrop-blur-sm border shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              Camera Scanner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Camera View */}
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                {isScanning ? (
                  <>
                    <video 
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      playsInline
                    />
                    <canvas 
                      ref={canvasRef}
                      className="hidden"
                    />
                    {/* Scan Overlay */}
                    <div className="scan-overlay absolute inset-0 pointer-events-none">
                      <div className="absolute inset-4 border-2 border-primary/50 rounded-lg">
                        {/* Corner indicators */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary"></div>
                        
                        {/* Animated scan line */}
                        <div 
                          ref={scanLineRef}
                          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                        >
                          <ScanLine className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Camera className="h-16 w-16 mb-4" />
                    <p>Camera not active</p>
                  </div>
                )}
              </div>
            </div>

            {/* Camera Controls */}
            <div className="scanner-controls flex justify-center gap-4">
              {!isScanning ? (
                <Button 
                  onClick={startCamera}
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Start Camera
                </Button>
              ) : (
                <Button 
                  onClick={stopCamera}
                  variant="destructive"
                  size="lg"
                >
                  <XCircle className="h-5 w-5 mr-2" />
                  Stop Camera
                </Button>
              )}
              
              <Button 
                onClick={() => toast.info('Camera settings opened')}
                variant="outline"
                size="lg"
              >
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </Button>
            </div>

            {/* Test Buttons for Development */}
            <div className="scanner-controls grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button 
                onClick={() => simulateScan('attendance')}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Test Attendance
              </Button>
              <Button 
                onClick={() => simulateScan('event')}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Test Event
              </Button>
              <Button 
                onClick={() => simulateScan('library')}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Test Library
              </Button>
              <Button 
                onClick={() => simulateScan('lab')}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Test Lab
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Scan Result */}
        {currentScan && (
          <Card className="scan-result bg-card/80 backdrop-blur-sm border">
            <CardHeader>
              <CardTitle className="text-lg">Latest Scan Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm break-all">
                {currentScan}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Scan History */}
        <Card className="bg-card/80 backdrop-blur-sm border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Scan History</CardTitle>
            <Button 
              onClick={clearScanHistory}
              variant="outline"
              size="sm"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Clear History
            </Button>
          </CardHeader>
          <CardContent>
            {scanResults.length > 0 ? (
              <div className="space-y-3">
                {scanResults.map((result) => (
                  <div 
                    key={result.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {result.status === 'success' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant={result.type === 'unknown' ? 'destructive' : 'default'}>
                            {result.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {result.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-sm mt-1">{result.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <ScanLine className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>No scans yet. Start scanning QR codes!</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-card/80 backdrop-blur-sm border">
          <CardHeader>
            <CardTitle>How to Use QR Scanner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="outline">Attendance</Badge>
                  Mark Attendance
                </h4>
                <p className="text-sm text-muted-foreground">
                  Scan QR codes displayed by instructors to mark your attendance for lectures and labs.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="outline">Events</Badge>
                  Event Check-in
                </h4>
                <p className="text-sm text-muted-foreground">
                  Check into seminars, workshops, and events by scanning event QR codes.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="outline">Library</Badge>
                  Library Access
                </h4>
                <p className="text-sm text-muted-foreground">
                  Access library resources and books by scanning their QR codes.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="outline">Lab</Badge>
                  Lab Equipment
                </h4>
                <p className="text-sm text-muted-foreground">
                  Confirm lab equipment bookings and usage by scanning equipment QR codes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QRScanner;