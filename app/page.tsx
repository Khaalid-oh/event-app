import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { EventSection } from "./components/event-section";
import { EducatorsSection } from "./components/educators-section";
import { FeaturedEventsSection } from "./components/featured-events-section";
import { LeadershipSection } from "./components/leadership-section";
import { AppDownloadSection } from "./components/app-download-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <EventSection />
        <EducatorsSection />
        <FeaturedEventsSection />
        <LeadershipSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
