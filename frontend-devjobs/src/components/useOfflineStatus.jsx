import { useState, useEffect } from "react";

const useOfflineStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOfflineStatus = () => {
      setIsOffline(true);
    };

    const handleOnlineStatus = () => {
      setIsOffline(false);
    };

    window.addEventListener("offline", handleOfflineStatus);
    window.addEventListener("online", handleOnlineStatus);

    return () => {
      window.removeEventListener("offline", handleOfflineStatus);
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  return isOffline;
};

export default useOfflineStatus;
