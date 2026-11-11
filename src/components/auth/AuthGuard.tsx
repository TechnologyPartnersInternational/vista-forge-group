import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { adminSession } from '@/lib/adminSession';

interface AuthGuardProps {
  children: React.ReactNode;
}

// UI gate only: it hides admin screens from signed-out visitors. The real
// protection is the server, which rejects any write without a valid token.
const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation();

  if (!adminSession.isActive()) {
    return <Navigate to="/tpi-admin-portal" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
