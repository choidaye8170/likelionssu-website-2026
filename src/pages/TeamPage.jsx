import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { TEAM_MEMBERS } from "../data/team";
import PhotoGrid from "../features/Team/components/PhotoGrid";

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0]?.id ?? null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const clearSelectedOnOutsideClick = (event) => {
    const target = event.target;

    if (target instanceof Element && target.closest("[data-photo-card='true']")) {
      return;
    }

    setSelectedId(null);
  };

  return (
    <div className="bg-secondarybrand min-h-screen flex flex-col">
      <Header onMenuClick={toggleSidebar} />

      <main
        className="flex-1 px-4 pt-[7.5rem] pb-20 sm:px-6 sm:pt-[6.8125rem]"
        onClick={clearSelectedOnOutsideClick}
      >
        <section className="mx-auto w-full max-w-[83.40625rem]">
          <h1 className="typo-title1e text-text text-center">TEAM</h1>

          <div className="mt-8 flex justify-center sm:mt-[2.9375rem]">
            <div className="relative h-[30.25275rem] w-full max-w-[38.149875rem]">
              <PhotoGrid
                members={TEAM_MEMBERS}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
