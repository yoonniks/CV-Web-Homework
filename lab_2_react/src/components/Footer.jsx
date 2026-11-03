import { useState, useEffect } from 'react';

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent
    };

    localStorage.setItem('systemInfo', JSON.stringify(info));
    const saved = localStorage.getItem('systemInfo');
    if (saved) {
      setSystemInfo(JSON.parse(saved));
    }
  }, []);

  return (
    <footer className="py-12 text-center text-[#2d001c] dark:text-[#fbe5f3] text-sm border-t border-[#ff66cc2b] dark:border-white/10">
      <p>&copy; 2026 Veronika Marushechko. All rights reserved.</p>
      {systemInfo && (
        <p className="text-xs mt-2 opacity-75">
          ОС: {systemInfo.platform} | Браузер: {systemInfo.userAgent}
        </p>
      )}
    </footer>
  );
}