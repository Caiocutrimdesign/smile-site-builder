import React, { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  // Initialize state directly from localStorage if available to prevent flash of 0
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("bclinic_visitor_v1");
    if (saved) {
      const parsed = parseInt(saved, 10);
      return isNaN(parsed) ? 1254 : parsed;
    }
    return 1254; // Default starting count
  });

  useEffect(() => {
    // 1. Check if already counted this session
    const hasCounted = sessionStorage.getItem("bclinic_session_v1");

    if (!hasCounted) {
      setCount((prev) => {
        const next = prev + 1;
        localStorage.setItem("bclinic_visitor_v1", next.toString());
        sessionStorage.setItem("bclinic_session_v1", "true");
        return next;
      });
    }

    // 2. Simulation: Occasional random growth (keeps it feeling "alive")
    const interval = setInterval(() => {
      if (Math.random() > 0.98) { // 2% chance every 30 seconds
        setCount((prev) => {
          const next = prev + 1;
          localStorage.setItem("bclinic_visitor_v1", next.toString());
          return next;
        });
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
        <Eye className="w-4 h-4 shadow-primary/50" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
          Visitas no sistema
        </span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary font-mono leading-none">
            {count.toLocaleString()}
          </span>
          <TrendingUp className="w-3 h-3 text-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
