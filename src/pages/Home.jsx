import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer"
import { HomeSection } from "../components/HomeSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main>
            <HomeSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>;
}