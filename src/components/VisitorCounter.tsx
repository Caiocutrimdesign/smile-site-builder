import React, { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  // Use a new versioned key to ensuring a fresh start at 0 for all users
  const STORAGE_KEY = "bclinic_visitor_v2_real";
  const SESSION_KEY = "bclinic_session_v2_active";

  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = parseInt(saved, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0; // Starts at 0 as requested
  });

  useEffect(() => {
    // 1. Check if this visit has already been counted in the current session
    const hasBeenCounted = sessionStorage.getItem(SESSION_KEY);

    if (!hasBeenCounted) {
      setCount((prev) => {
        const next = prev + 1;
        localStorage.setItem(STORAGE_KEY, next.toString());
        sessionStorage.setItem(SESSION_KEY, "true");
        return next;
      });
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-1000">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-500">
        <Eye className="w-4 h-4 shadow-primary/50" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
          Visitas
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
