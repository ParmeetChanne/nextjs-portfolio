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
      <div id='about'>
       <AboutSection />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
    </>
  );
}
