import React, { useState } from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Footer from "../../components/footer/Footer";
import TitleSection from "./TitleSection";
import FilterSection from "./FilterSection";
import ProjectCardList from "./ProjectCardList";

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "송맛찾",
    number: 14,
    category: "아이디어톤",
    description: "맛집 탐방에 도움을 주는 서비스",
    imageUrl: null,
  },
  {
    id: 2,
    title: "프로젝트 B",
    number: 8,
    category: "해커톤",
    description: "프로젝트 설명",
    imageUrl: null,
  },
  {
    id: 3,
    title: "프로젝트 C",
    number: 5,
    category: "겨울잠",
    description: "프로젝트 설명",
    imageUrl: null,
  },
  {
    id: 4,
    title: "프로젝트 C",
    number: 5,
    category: "겨울잠",
    description: "프로젝트 설명",
    imageUrl: null,
  },
  {
    id: 5,
    title: "프로젝트 C",
    number: 5,
    category: "겨울잠",
    description: "프로젝트 설명",
    imageUrl: null,
  },
  {
    id: 6,
    title: "프로젝트 C",
    number: 5,
    category: "겨울잠",
    description: "프로젝트 설명",
    imageUrl: null,
  },
];

export default function ProjectPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("전체");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <TitleSection />
      <FilterSection
        selectedTab={selectedFilter}
        onTabChange={setSelectedFilter}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <ProjectCardList
          projects={MOCK_PROJECTS}
          selectedFilter={selectedFilter}
        />
      </div>
      <Footer />

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
