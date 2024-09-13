import React from 'react';
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  className, 
  reverse = false, 
  pauseOnHover = false, 
  children 
}) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden",
        reverse ? "animate-marquee-reverse" : "animate-marquee",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      {children}
      {children} {/* 复制一份子元素以实现无缝滚动 */}
    </div>
  );
};

export default Marquee;
