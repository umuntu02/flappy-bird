import FlappyBird from "@/components/flappy-bird";
import Header from "@/components/header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex flex-col gap-12">
        <Header />
        <FlappyBird />
      </div>

      <MobileBottomNav />
    </div>
  );
}
