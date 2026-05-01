import { Code2, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-semibold">
            <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="gradient-text">Dinesh</span>
          </div>
          <p className="font-mono text-xs flex items-center gap-1.5">
            Designed & built with{" "}
            <Heart className="w-3 h-3 text-primary fill-primary" /> by Dinesh ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
