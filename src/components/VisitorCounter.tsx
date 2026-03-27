import React, { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // 1. Initialize or get current count from localStorage
    const savedCount = localStorage.getItem("bclinic_visitor_count");
    let currentCount = savedCount ? parseInt(savedCount, 10) : 1254; // Start with a realistic base if new

    // 2. Check if already counted this session
    const hasCounted = sessionStorage.getItem("bclinic_session_counted");

    if (!hasCounted) {
      currentCount += 1;
      localStorage.setItem("bclinic_visitor_count", currentCount.toString());
      sessionStorage.setItem("bclinic_session_counted", "true");
    }

    setCount(currentCount);

    // 3. Simulation: Occasional random growth
    const interval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% chance every 30 seconds
        setCount((prev) => {
          const newCount = prev + 1;
          localStorage.setItem("bclinic_visitor_count", newCount.toString());
          return newCount;
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
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
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
