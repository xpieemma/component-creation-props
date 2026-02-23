import { useState, useEffect, useCallback } from 'react';
import type { AlertType } from '../../index'; // Ensure this points to your types file

export const useAlert = () => {
  const [alert, setAlert] = useState<{
    visible: boolean;
    type: AlertType;
    message: string;
  }>({
    visible: false,
    type: 'info',
    message: '',
  });

  const hideAlert = useCallback(() => {
    setAlert((prev) => ({ ...prev, visible: false }));
  }, []);

  const showAlert = useCallback((type: AlertType, message: string) => {
    setAlert({ visible: true, type, message });
  }, []);

  // Auto-hide timer
  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(hideAlert, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert.visible, hideAlert]);

  return { alert, showAlert, hideAlert };
};