import TypingAnimation from "@/components/magicui/typing-animation";
import ShinyButton from "@/components/magicui/shiny-button";
import RetroGrid from "@/components/magicui/retro-grid";
//import Marquee from "@/components/magicui/marquee";
//import { cn } from "@/lib/utils";
//import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";






export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      <RetroGrid className="z-0" />
      <div className="z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        <TypingAnimation 
          text="Hello World" 
          className="mb-8 text-4xl md:text-5xl lg:text-6xl"
        />

        <div className="my-8">
          <ShinyButton 
            text="Try it now" 
          />
        </div>
      </div>
    </main>
  );
}
