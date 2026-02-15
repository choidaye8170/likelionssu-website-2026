import assum1 from "../features/Project/assets/11th/assum-1.webp";
import assum2 from "../features/Project/assets/11th/assum-2.webp";
import assum3 from "../features/Project/assets/11th/assum-3.webp";
import assum4 from "../features/Project/assets/11th/assum-4.webp";
import assum5 from "../features/Project/assets/11th/assum-5.webp";
import damda1 from "../features/Project/assets/11th/damda-1.webp";
import damda3 from "../features/Project/assets/11th/damda-3.webp";
import damda4 from "../features/Project/assets/11th/damda-4.webp";
import damda5 from "../features/Project/assets/11th/damda-5.webp";
import damda6 from "../features/Project/assets/11th/damda-6.webp";
import flexrate1 from "../features/Project/assets/11th/flexrate-1.webp";
import flexrate3 from "../features/Project/assets/11th/flexrate-3.webp";
import flexrate4 from "../features/Project/assets/11th/flexrate-4.webp";
import flexrate11 from "../features/Project/assets/11th/flexrate-11.webp";
import flexrate12 from "../features/Project/assets/11th/flexrate-12.webp";
import giljoby1 from "../features/Project/assets/11th/giljoby-1.webp";
import giljoby2 from "../features/Project/assets/11th/giljoby-2.webp";
import giljoby3 from "../features/Project/assets/11th/giljoby-3.webp";
import giljoby4 from "../features/Project/assets/11th/giljoby-4.webp";
import zeromarket1 from "../features/Project/assets/11th/zeromarket-1.webp";
import zeromarket3 from "../features/Project/assets/11th/zeromarket-3.webp";
import zeromarket4 from "../features/Project/assets/11th/zeromarket-4.webp";
import zeromarket8 from "../features/Project/assets/11th/zeromarket-8.webp";
import picpic1 from "../features/Project/assets/11th/picpic-1.webp";
import picpic3 from "../features/Project/assets/11th/picpic-3.webp";
import picpic16 from "../features/Project/assets/11th/picpic-16.webp";
import picpic17 from "../features/Project/assets/11th/picpic-17.webp";
import picpic19 from "../features/Project/assets/11th/picpic-19.webp";
import remini1 from "../features/Project/assets/11th/remini-1.webp";
import remini16 from "../features/Project/assets/11th/remini-16.webp";
import remini17 from "../features/Project/assets/11th/remini-17.webp";
import remini18 from "../features/Project/assets/11th/remini-18.webp";
import remini19 from "../features/Project/assets/11th/remini-19.webp";

const PROJECTS_RAW = [
  // 해커톤
  {
    id: 1,
    title: "ASSUM",
    number: 11,
    category: "해커톤",
    description: "어렵고 긴 글들, 쉽고 간략하게 듣자",
    about:
      "URL만 입력하면 기사 및 블로그를 요약해주는 서비스입니다. chat gpt api를 사용해 한눈에 알아보기 쉽게 요약하고, 시각장애인도 사용할 수 있도록 tts를 활용해 음성변환 기능을 넣었습니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "정의민 최신임 강해솔 최서현 박정우",
    coverImage: assum1,
    images: [assum1, assum2, assum3, assum4, assum5], // 슬라이드용 이미지 URL 배열. 예: ["url1", "url2"]
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/CxC6qJGPeqn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    title: "담다",
    number: 11,
    category: "해커톤",
    description: "우리 동네 전통시장을 내 손 안에",
    about:
      "담다는 고령층의 낮은 이커머스 이용률, 코로나 19로 인해 저조해진 재래시장 이용률, 전통시장의 낮은 접근성을 해결하기 위해 음성인식과 스탬프롤 요소를 넣어 모두가 즐길 수 있는 재래시장 이커머스 플랫폼입니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "윤주호 소희연 허동윤 유승한 조수민",
    coverImage: damda1,
    images: [damda1, damda3, damda4, damda5, damda6],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/CxAXID1PkOM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    title: "길JOB이",
    number: 11,
    category: "해커톤",
    description: "청년 일자리 정책을 한 눈에",
    about:
      "길JOB이는 청년 일자리 정책에 집중하여 청년들의 일자리와 관련된 디지털 격차를 해소합니다. 간단하고 직관적인, 접근성이 좋은 웹서비스를 통해 사용자가 원하는 정보를 쉽게 탐색할 수 있도록 합니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "이혜민 유나경 한지원 오유은 박수영",
    coverImage: giljoby1,
    images: [giljoby1, giljoby2, giljoby3, giljoby4],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/Cw9v83Mvnrx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    title: "zero market 제로마켓",
    number: 11,
    category: "해커톤",
    description: "우리동네 가게 재고 솔루션",
    about:
      "제로 마켓은 아쉽게 남은 동네 가게 재고를 저렴한 가격으로 이웃에게 연결합니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "김지은 유해인 신수연 김교휘 유예지",
    coverImage: zeromarket1,
    images: [zeromarket1, zeromarket3, zeromarket4, zeromarket8],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/Cw7qMTmPdqP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  // 겨울잠
  {
    id: 5,
    title: "PicPic",
    number: 11,
    category: "겨울잠",
    description: "나만의 Picture을 Pick하여 간직하자",
    about:
      "PicPic은 더 다양하고 개인화된 사진을 원하는 포토프레스 세대들에게 직접 프레임을 제작하고 포토북을 제작하게 하여 자신의 개성을 사진에 담아낼 수 있게 합니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "김지은 정의민 유해인 강해솔 한지원 김교휘 박정우",
    coverImage: picpic1,
    images: [picpic1, picpic3, picpic16, picpic17, picpic19],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C2ezOuXPKJg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    title: "Remini",
    number: 11,
    category: "겨울잠",
    description: "맞춤 회고 유형 추천 및 가이드",
    about:
      "Remini는 회고를 더욱 압축적이고 효율적으로 진행할 수 있도록 돕는 맞춤 회고 유형 추천 서비스입니다. 사용자의 회고 상황에 따라 적절한 회고 방식을 추천하고, 효과적인 회고 진행을 위한 가이드라인을 제공합니다. 회고는 일상 회고, 목표 평가 회고, 프로젝트 회고로 나뉘며, 일상 회고와 목표 평가 회고는 기간 선택을 기준으로, 프로젝트 회고는 진행 여부에 따라 최적의 회고 유형을 안내합니다. KPT, Continue-Stop-Start, 5F, TIL, 4L, ORID, AAR, YWT 등 다양한 회고 프레임워크를 제공하며, 이를 통해 개인과 팀이 효과적으로 회고를 수행하고 지속적인 성장과 개선을 이룰 수 있도록 지원합니다. Remini는 단순한 회고 도구를 넘어, 더 나은 자신과 더 나은 팀을 만들어가는 데 기여하는 회고 지원 플랫폼입니다.",
    stack: [
      "TypeScript",
      "React",
      "Styled-Components",
      "Spring Boot",
      "JDK 11",
      "MySQL",
    ],
    team: "이혜민 유나경 최서현 오유은 유승한 박수영",
    coverImage: remini1,
    images: [remini1, remini16, remini17, remini18, remini19],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C16X_tDvJ56/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 7,
    title: "Flexrate",
    number: 11,
    category: "겨울잠",
    description: "대출은 AI로 최적으로, 관리는 대시보드로 체계적으로",
    about:
      "Flexrate는 금융/비금융 데이터를 종합하여 고객의 신용을 판단합니다. 누구나 쉽게 이해할 수 있는 용어와 표현, 직관적인 대출 관리 대시보드를 통해 대출이 처음인 고객도 쉽고 간편하게 대출하고 관리할 수 있습니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "박재영 윤주호 소희연 신수연 허동윤 유예지 조수민",
    coverImage: flexrate1,
    images: [flexrate1, flexrate3, flexrate4, flexrate11, flexrate12],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C2McUY7PhAJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export const PROJECTS = [...PROJECTS_RAW].sort((a, b) => b.id - a.id);
