import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ApiError } from "@/lib/api";

/**
 * Error handler for admin mutations: shows the server's message, and sends the
 * user back to the login page when their session has expired.
 */
export function useAdminErrorHandler() {
  const navigate = useNavigate();
  return useCallback(
    (fallback: string) => (err: unknown) => {
      if (err instanceof ApiError && err.status === 401) {
        toast.error("Your session has expired. Please sign in again.");
        navigate("/tpi-admin-portal", { replace: true });
        return;
      }
      toast.error(err instanceof Error && err.message ? err.message : fallback);
    },
    [navigate],
  );
}
