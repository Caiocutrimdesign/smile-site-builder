import React, { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(() => {
    // 1. Get current count from localStorage
    const saved = localStorage.getItem("bclinic_visitor_final_v1");
    if (saved) {
      const parsed = parseInt(saved, 10);
      return isNaN(parsed) ? 1254 : parsed;
    }
    return 1254; // Use the example base count
  });

  useEffect(() => {
    // 2. Check if already counted this session (sessionStorage clears when window/tab closes)
    const hasCounted = sessionStorage.getItem("bclinic_session_final_v1");

    if (!hasCounted) {
      setCount((prev) => {
        const next = prev + 1;
        localStorage.setItem("bclinic_visitor_final_v1", next.toString());
        sessionStorage.setItem("bclinic_session_final_v1", "true");
        return next;
      });
    }

    // 3. Smart Simulation: Occasional random growth
    const interval = setInterval(() => {
      if (Math.random() > 0.97) { // 3% chance every 30 seconds
        setCount((prev) => {
          const next = prev + 1;
          localStorage.setItem("bclinic_visitor_final_v1", next.toString());
          return next;
        });
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-1000">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-500">
        <Eye className="w-4 h-4 shadow-primary/50" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
          Visitas no sistema
        </span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary font-mono leading-none tracking-tighter">
            {count.toLocaleString('pt-BR')}
          </span>
          <TrendingUp className="w-3 h-3 text-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
