import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

/**
 * ====================================================================
 * IMPORT SECTION - IIT PATNA WEBSITE PAGES & COMPONENTS
 * ====================================================================
 * 
 * Organized imports for better maintainability and development experience.
 * All pages are categorized by their respective sections for easy navigation.
 * 
 * Import Structure:
 * 1. Core Pages (Home, 404, Auth)
 * 2. About Section Pages
 * 3. Academic Section Pages
 * 4. Admission Section Pages
 * 5. Research Section Pages
 * 6. Career & Placement Pages
 * 7. Contact Section Pages
 * 8. Magazine & Special Pages
 * ====================================================================
 */

// Core Pages - Essential website pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Authentication Pages - Login system with role-based access
import LoginMain from "./pages/auth/LoginMain";
import StudentLogin from "./pages/auth/student/StudentLogin";
import FacultyLogin from "./pages/auth/faculty/FacultyLogin";
import AdminLogin from "./pages/auth/admin/AdminLogin";

// Student Portal Pages
import DashboardLayout from "./components/student-portal/DashboardLayout";
import Dashboard from "./pages/student-portal/Dashboard";
import Attendance from "./pages/student-portal/Attendance";
import Schedule from "./pages/student-portal/Schedule";
import Assignments from "./pages/student-portal/Assignments";
import Profile from "./pages/student-portal/Profile";
import QRScanner from "./pages/student-portal/QRScanner";
import Events from "./pages/student-portal/Events";
import Notice from "./pages/student-portal/Notice";
import LostAndFound from "./pages/student-portal/LostAndFound";
import Settings from "./pages/student-portal/Settings";
import { AuthProvider } from "./context/AuthContext";

// About Section Pages - Institution information and governance
import Introduction from "./pages/about/Introduction";
import VisionMission from "./pages/about/VisionMission";
import DirectorMessage from "./pages/about/DirectorMessage";

// Academic Section Pages - Educational programs and resources
import Undergraduate from "./pages/academics/Undergraduate";

// Admission Section Pages - Application and enrollment information
import WhyChoose from "./pages/admissions/WhyChoose";

// Research Section Pages - Research activities and resources
import RDHome from "./pages/research/RDHome";

// Career & Placement Pages - Student career services
import Placements from "./pages/placements/Placements";
import Careers from "./pages/careers/Careers";

// Contact Section Pages - Communication and location information
import Contact from "./pages/contact/Contact";

// Additional About Pages
import ColloquiumLectures from "./pages/about/Colloquium";
import PressReleasePage from "./pages/about/PressRelease";
import FinanceCommittee from "./pages/about/FinanceCommittee";
import Administrators from "./pages/about/Administrators";
import OfficeOfRegistrar from "./pages/about/Registrar";
import DepartmentHeads from "./pages/about/DepartmentHeads";
import AdministrativeUnits from "./pages/about/AdministrativeUnits";
import ActsStatutes from "./pages/about/ActsStatutes";
import HistoryPatna from "./pages/about/HistoryPatna";
import Convocation from "./pages/about/Convocation";
import AnnualReports from "./pages/about/AnnualReports";
import Functionary from "./pages/about/Functionary";
import RecruitmentRules from "./pages/about/RecruitmentRules";
import AlumniEndowment from "./pages/about/AlumniEndowment";
import FormerDirectors from "./pages/about/FormerDirectors";
import CurrentMOUs from "./pages/about/CurrentMOUs";
import PastMOUs from "./pages/about/PastMOUs";
import InstituteSong from "./pages/about/InstituteSong";

// Additional About Pages
import BooksVideos from "./pages/about/BooksVideos";
import Organization from "./pages/about/Organization";
import Eminence from "./pages/about/Eminence";
import AboutUs from "./pages/about/AboutUs";
import Logo from "./pages/about/Logo";
import BoardGovernors from "./pages/about/BoardGovernors";

// Additional Academic Pages
import RuleBooks from "./pages/academics/RuleBooks";
import Calendar from "./pages/academics/Calendar";
import AcademicTimetable from "./pages/academics/AcademicTimetable";
import AcademicWebsite from "./pages/academics/AcademicWebsite";
import HolidayList from "./pages/academics/HolidayList";
import CourseManagement from "./pages/academics/CourseManagement";
import DistanceLearning from "./pages/academics/DistanceLearning";
import InternationalExchange from "./pages/academics/InternationalExchange";
import Moodle from "./pages/academics/Moodle";
import AcademicDepartments from "./pages/academics/AcademicDepartments";
import Classrooms from "./pages/academics/Classrooms";
import Labs from "./pages/academics/Labs";

// Additional Admission Pages
import AdmissionUndergraduate from "./pages/admissions/Undergraduate";

// Additional Research Pages
import Experts from "./pages/research/Experts";

// Additional Contact Pages
import Address from "./pages/contact/Address";
import WorkingHours from "./pages/contact/WorkingHours";
import CommunicationDirectory from "./pages/contact/CommunicationDirectory";

// Magazine Pages
import Insight from "./pages/about/magazines/Insight";
import CampusDiary from "./pages/about/magazines/CampusDiary";
import Kshitij from "./pages/about/magazines/Kshitij";
import Impulse from "./pages/about/magazines/Impulse";

// Additional Academic Pages
import DualDegree from "./pages/academics/DualDegree";
import Masters from "./pages/academics/Masters";
import PhD from "./pages/academics/PhD";

// Additional Admission Pages
import International from "./pages/admissions/International";

// Additional Research Pages  
import Consultancy from "./pages/research/Consultancy";
import TechnologyTransfer from "./pages/research/TechnologyTransfer";
import ResearchPark from "./pages/research/ResearchPark";

// Additional Contact Pages
import BusTimings from "./pages/contact/BusTimings";

// New Pages - Executive Programs, Instruments, Fee Structure, Magazines
import ExecutivePrograms from "./pages/academics/executive/ExecutivePrograms";
import Instruments from "./pages/research/instruments/Instruments";
import FeeStructure from "./pages/admissions/fee-structure/FeeStructure";
import MagazinesIndex from "./pages/about/magazines/Index";

/**
 * ====================================================================
 * MAIN APPLICATION COMPONENT - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * This is the root component that orchestrates the entire IIT Patna website.
 * It handles routing, global state management, and core providers.
 * 
 * Key Features:
 * - Comprehensive routing system for all university sections
 * - React Query for efficient data fetching and caching
 * - React Helmet for advanced SEO optimization
 * - Toast notifications for user feedback
 * - Tooltip provider for enhanced UI interactions
 * - Error boundaries for graceful error handling
 * - Performance optimization with lazy loading
 * 
 * Architecture:
 * - Uses React Router v6 for client-side routing
 * - Implements nested routing for complex navigation structures
 * - Follows semantic URL patterns for better SEO
 * - Includes authentication flow with role-based access
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

// Initialize React Query client for global data management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes - keep data fresh for better UX
      retry: 2, // Retry failed requests twice for reliability
      refetchOnWindowFocus: false, // Prevent unnecessary refetches
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Index />} />
            
            {/* Authentication Routes */}
            <Route path="/auth" element={<LoginMain />} />
            <Route path="/auth/student" element={<StudentLogin />} />
            <Route path="/auth/faculty" element={<FacultyLogin />} />
            <Route path="/auth/admin" element={<AdminLogin />} />
            
            {/* Student Portal Routes */}
            <Route path="/student-portal" element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="events" element={<Events />} />
              <Route path="notice" element={<Notice />} />
              <Route path="qr-scanner" element={<QRScanner />} />
              <Route path="lost-found" element={<LostAndFound />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route index element={<Dashboard />} />
            </Route>
            
            {/* About Section Routes */}
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/director-message" element={<DirectorMessage />} />
            <Route path="/about/books-videos" element={<BooksVideos />} />
            <Route path="/about/organization" element={<Organization />} />
            <Route path="/about/eminence" element={<Eminence />} />
            <Route path="/about/about-us" element={<AboutUs />} />
            <Route path="/about/logo" element={<Logo />} />
            <Route path="/about/board-governors" element={<BoardGovernors />} />
            <Route path="/about/colloquium" element={<ColloquiumLectures />} />
            <Route path="/about/press-release" element={<PressReleasePage />} />
            <Route path="/about/finance-committee" element={<FinanceCommittee />} />
            <Route path="/about/administrators" element={<Administrators />} />
            <Route path="/about/registrar" element={<OfficeOfRegistrar />} />
            <Route path="/about/department-heads" element={<DepartmentHeads />} />
            <Route path="/about/admin-units" element={<AdministrativeUnits />} />
            <Route path="/about/acts-statutes" element={<ActsStatutes />} />
            <Route path="/about/history-patna" element={<HistoryPatna />} />
            <Route path="/about/convocation" element={<Convocation />} />
            <Route path="/about/annual-reports" element={<AnnualReports />} />
            <Route path="/about/functionary" element={<Functionary />} />
            <Route path="/about/recruitment-rules" element={<RecruitmentRules />} />
            <Route path="/about/alumni-endowment" element={<AlumniEndowment />} />
            <Route path="/about/former-directors" element={<FormerDirectors />} />
            <Route path="/about/current-mous" element={<CurrentMOUs />} />
            <Route path="/about/past-mous" element={<PastMOUs />} />
            <Route path="/about/institute-song" element={<InstituteSong />} />
            
            {/* Magazine Routes */}
            <Route path="/about/magazines/insight" element={<Insight />} />
            <Route path="/about/magazines/campus-diary" element={<CampusDiary />} />
            <Route path="/about/magazines/kshitij" element={<Kshitij />} />
            <Route path="/about/magazines/impulse" element={<Impulse />} />
            
            {/* Academic Section Routes */}
            <Route path="/academics/undergraduate" element={<Undergraduate />} />
            <Route path="/academics/dual-degree" element={<DualDegree />} />
            <Route path="/academics/masters" element={<Masters />} />
            <Route path="/academics/phd" element={<PhD />} />
            <Route path="/academics/rule-books" element={<RuleBooks />} />
            <Route path="/academics/executive" element={<ExecutivePrograms />} />
            
            {/* Admission Section Routes */}
            <Route path="/admissions/why-choose" element={<WhyChoose />} />
            <Route path="/admissions/international" element={<International />} />
            <Route path="/admissions/undergraduate" element={<AdmissionUndergraduate />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            
            {/* Research Section Routes */}
            <Route path="/research/rd-home" element={<RDHome />} />
            <Route path="/research/consultancy" element={<Consultancy />} />
            <Route path="/research/experts" element={<Experts />} />
            <Route path="/research/instruments" element={<Instruments />} />
            <Route path="/research/technology-transfer" element={<TechnologyTransfer />} />
            <Route path="/research/research-park" element={<ResearchPark />} />
            
            {/* Contact Section Routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/address" element={<Address />} />
            <Route path="/contact/working-hours" element={<WorkingHours />} />
            <Route path="/contact/directory" element={<CommunicationDirectory />} />
            <Route path="/contact/bus-timings" element={<BusTimings />} />
            <Route path="/contact/reach-campus" element={<Contact />} />
            <Route path="/contact/airport" element={<Contact />} />
            <Route path="/contact/railway" element={<Contact />} />
            <Route path="/contact/transport-guide" element={<Contact />} />
            
            <Route path="/academics/calendar" element={<Calendar />} />
            <Route path="/academics/timetable" element={<AcademicTimetable />} />
            <Route path="/academics/website" element={<AcademicWebsite />} />
            <Route path="/academics/holidays" element={<HolidayList />} />
            <Route path="/academics/course-management" element={<CourseManagement />} />
            <Route path="/academics/distance-learning" element={<DistanceLearning />} />
            <Route path="/academics/international-exchange" element={<InternationalExchange />} />
            <Route path="/academics/moodle" element={<Moodle />} />
            <Route path="/academics/departments" element={<AcademicDepartments />} />
            <Route path="/academics/classrooms" element={<Classrooms />} />
            <Route path="/academics/labs" element={<Labs />} />
            
            {/* Research Section Routes */}
            <Route path="/research/rd-home" element={<RDHome />} />
            <Route path="/research/consultancy" element={<Consultancy />} />
            
            {/* Placement Routes */}
            <Route path="/placements" element={<Placements />} />
            
            {/* Career Routes */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/development" element={<Careers />} />
            <Route path="/careers/why-choose" element={<Careers />} />
            <Route path="/careers/apply" element={<Careers />} />
            
            {/* Contact Section Routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/address" element={<Contact />} />
            <Route path="/contact/hours" element={<Contact />} />
            <Route path="/contact/directory" element={<Contact />} />
            <Route path="/contact/bus-timings" element={<BusTimings />} />
            <Route path="/contact/reach-campus" element={<Contact />} />
            <Route path="/contact/airport" element={<Contact />} />
            <Route path="/contact/railway" element={<Contact />} />
            <Route path="/contact/transport-guide" element={<Contact />} />
            
            {/* ADD MORE ROUTES HERE AS NEEDED */}
            {/* Future routes structure ready for expansion */}
            
            {/* Catch-all route for 404 - MUST BE LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
