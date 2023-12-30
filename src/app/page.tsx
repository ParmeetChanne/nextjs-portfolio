import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import AboutSection from '../../components/AboutSection';
import SkillsSection from '../../components/SkillsSection';
import ProjectsSection from '../../components/ProjectsSection';
import ContactSection from '../../components/ContactSection';
import FooterSection from '../../components/FooterSection';

export default function Home() {
  return (
    <>
    <div className='px-8'>
      <Navbar />
      <HeroSection />
      <div id='about' className="h-screen">
       <AboutSection />
      </div>
      <SkillsSection />
      <div id="projects" className="h-screen">
        <ProjectsSection />
      </div>
      <div id="contact" className="h-screen">
        <ContactSection />
      </div>
      <FooterSection />
    </div>
    </>
  );
}
