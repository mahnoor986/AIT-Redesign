'use client';

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/views/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

import Home from '@/views/Home';
import ProgramDetail from '@/views/ProgramDetail';
import About from '@/views/About';
import Admissions from '@/views/Admissions';
import Campuses from '@/views/Campuses';
import Contact from '@/views/Contact';
import StudentPortal from '@/views/StudentPortal';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/programs/:slug" component={ProgramDetail} />
        <Route path="/about" component={About} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/campuses" component={Campuses} />
        <Route path="/contact" component={Contact} />
        <Route path="/student-portal" component={StudentPortal} />
        {/* Alias for viewing all programs, which is anchored on home page */}
        <Route path="/programs">
          {() => {
            window.location.href = '/#programs';
            return null;
          }}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

