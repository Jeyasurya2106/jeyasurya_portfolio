import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Background } from "@/components/Background";
import { IntroProvider } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { AiSection } from "@/sections/AiSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EducationSection } from "@/sections/EducationSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";
import { profileData } from "@/lib/profile";

export default function HomePage() {
  const half = Math.ceil(profileData.marquee.length / 2);

  return (
    <IntroProvider>
      <main className="relative min-h-screen overflow-x-clip">
        <CustomCursor />
        <ScrollProgress />
        <Background />
        <Navbar />

        <div className="relative z-10">
          <HeroSection />

          <div className="space-y-3 border-y border-line/10 py-7 sm:space-y-5 sm:py-10">
            <Marquee items={profileData.marquee.slice(0, half)} duration={38} />
            <Marquee items={profileData.marquee.slice(half)} duration={44} reverse outlined />
          </div>

          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <AiSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <FooterSection />
        </div>
      </main>
    </IntroProvider>
  );
}
