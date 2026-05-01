import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-primary"
                animate={{ rotate: 360, borderRadius: ["20%", "50%", "20%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-2xl opacity-60" />
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground tracking-widest">
              <span>LOADING</span>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="loader-dot inline-block w-1.5 h-1.5 rounded-full bg-primary"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
