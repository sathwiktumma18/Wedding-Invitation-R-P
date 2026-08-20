import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import OpeningSequence from "./components/OpeningSequence";
import WeddingNav from "./components/WeddingNav";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import BlessingSection from "./components/BlessingSection";
import CoupleSection from "./components/CoupleSection";
import StorySection from "./components/StorySection";
import WeddingDetails from "./components/WeddingDetails";
import EventsTimeline from "./components/EventsTimeline";
import MuhurthamSection from "./components/MuhurthamSection";
import VenueSection from "./components/VenueSection";
import MapSection from "./components/MapSection";
import LunchSection from "./components/LunchSection";
import FamilySection from "./components/FamilySection";
import TeluguInvitation from "./components/TeluguInvitation";
import Gallery from "./components/Gallery";
import RSVPSection from "./components/RSVPSection";
import WishesSection from "./components/WishesSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [openingDone, setOpeningDone] = useState(false);

  return (
    <LanguageProvider>
      <OpeningSequence onDone={() => setOpeningDone(true)} />

      {/* Main content mounts underneath the opening splash and is revealed
          once it fades out. Rendering it immediately (rather than after
          onDone) keeps the hero image warm/decoded by the time it's seen. */}
      <div
        className={`min-h-screen bg-ivory transition-opacity duration-700 ${
          openingDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <WeddingNav />
        <MusicPlayer />

        <main>
          <HeroSection />
          <CountdownSection />
          <BlessingSection />
          <CoupleSection />
          <StorySection />
          <WeddingDetails />
          <EventsTimeline />
          <MuhurthamSection />
          <VenueSection />
          <MapSection />
          <LunchSection />
          <FamilySection />
          <TeluguInvitation />
          <Gallery />
          <RSVPSection />
          <WishesSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
