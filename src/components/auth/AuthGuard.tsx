import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const authStatus = sessionStorage.getItem('tpi_admin_auth');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  if (isAuthenticated === null) return null; // Or a loading spinner

  if (!isAuthenticated) {
    return <Navigate to="/tpi-admin-portal" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
