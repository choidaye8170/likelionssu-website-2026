// 11기
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

// 12기
import dontspike1 from "../features/Project/assets/12th/dontspike-1.webp";
import dontspike2 from "../features/Project/assets/12th/dontspike-2.webp";
import dontspike3 from "../features/Project/assets/12th/dontspike-3.webp";
import dontspike4 from "../features/Project/assets/12th/dontspike-4.webp";
import dotoread1 from "../features/Project/assets/12th/dotoread-1.webp";
import dotoread6 from "../features/Project/assets/12th/dotoread-6.webp";
import dotoread7 from "../features/Project/assets/12th/dotoread-7.webp";
import dotoread8 from "../features/Project/assets/12th/dotoread-8.webp";
import dotoread9 from "../features/Project/assets/12th/dotoread-9.webp";
import greenspark1 from "../features/Project/assets/12th/greenspark-1.webp";
import greenspark12 from "../features/Project/assets/12th/greenspark-12.webp";
import greenspark14 from "../features/Project/assets/12th/greenspark-14.webp";
import greenspark15 from "../features/Project/assets/12th/greenspark-15.webp";
import greenspark18 from "../features/Project/assets/12th/greenspark-18.webp";
import salary1 from "../features/Project/assets/12th/salary-1.webp";
import salary15 from "../features/Project/assets/12th/salary-15.webp";
import salary16 from "../features/Project/assets/12th/salary-16.webp";
import salary17 from "../features/Project/assets/12th/salary-17.webp";
import salary20 from "../features/Project/assets/12th/salary-20.webp";
import stew1 from "../features/Project/assets/12th/stew-1.webp";
import stew2 from "../features/Project/assets/12th/stew-2.webp";
import stew3 from "../features/Project/assets/12th/stew-3.webp";
import stew4 from "../features/Project/assets/12th/stew-4.webp";
import wellnesscoach1 from "../features/Project/assets/12th/wellnesscoach-1.webp";
import wellnesscoach4 from "../features/Project/assets/12th/wellnesscoach-4.webp";
import wellnesscoach5 from "../features/Project/assets/12th/wellnesscoach-5.webp";
import wellnesscoach6 from "../features/Project/assets/12th/wellnesscoach-6.webp";
import yessir1 from "../features/Project/assets/12th/yessir-1.webp";
import yessir2 from "../features/Project/assets/12th/yessir-2.webp";
import yessir4 from "../features/Project/assets/12th/yessir-4.webp";
import yessir5 from "../features/Project/assets/12th/yessir-5.webp";

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
  // 12기 해커톤
  {
    id: 8,
    title: "스튜",
    number: 12,
    category: "해커톤",
    description: "스포츠 튜터 매칭 서비스, 스튜와 함께해요!",
    about:
      "운동 초보자들이 자격증을 보유한 '전문가'가 아닌 운동을 경험해본 '경험자'에게 부담스럽지 않은 가격으로 운동을 배울 수 있도록 스포츠 튜터를 매칭해주는 서비스입니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "고영명 유태연 신유정 박채연 이상은 전형준",
    coverImage: stew1,
    images: [stew1, stew2, stew3, stew4],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C-xpuBMSCoD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 9,
    title: "Yes, sir 예썰",
    number: 12,
    category: "해커톤",
    description: "남성 피부 관리 플랫폼",
    about:
      "16가지 피부타입에 따른 맞춤 솔루션과 제품을 추천하는 서비스입니다. 바우만 테스트를 기반으로 16가지 피부타입을 간단하게 검진받고 스킨 케어를 처방받을 수 있습니다. 제품 성분에 따라서 자신에게 맞는 케어 제품을 구매할 수 있습니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "박하은 유승빈 김하연 김건휘 백승현 신민경",
    coverImage: yessir1,
    images: [yessir1, yessir2, yessir4, yessir5],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C-xrRBFyN31/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 10,
    title: "Don't 스파이크",
    number: 12,
    category: "해커톤",
    description: "혈당 스파이크를 방지할 작은 시작",
    about:
      "당뇨병 환자들을 위한 맞춤형 정보제공 및 데이터 시각화를 통해 올바른 당뇨 관리를 돕는 서비스입니다. 혈당 백과 검색을 통해 특정 음식의 적정 섭취량, 섭취 방법, 혈당 지수 등 당뇨병 환자를 위한 맞춤형 정보를 제공합니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "김상우 최지예 박지효 유민주 김선정 신지환",
    coverImage: dontspike1,
    images: [dontspike1, dontspike2, dontspike3, dontspike4],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C-xrnwOSEXg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 11,
    title: "Wellness Coach 웰니스 코치",
    number: 12,
    category: "해커톤",
    description: "건강하게 나이드는 당신을 위한 식단 메이트",
    about:
      "건강 관리에 관심있는 2030 세대를 위한, 저속노화 식단을 지속 가능하게 해주는 서비스입니다. 오늘의 식단을 진단하고 항목별 피드백과 저속노화 팁 등의 정보를 제공받습니다.",
    stack: ["TypeScript", "React", "Spring Boot", "MySQL"],
    team: "류다인 정서윤 지하윤 공윤호 이시온 정연재",
    coverImage: wellnesscoach1,
    images: [wellnesscoach1, wellnesscoach4, wellnesscoach5, wellnesscoach6],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/C-1QjrJSoc1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  // 12기 겨울잠
  {
    id: 12,
    title: "Salary 샐러리",
    number: 12,
    category: "겨울잠",
    description: "금융/경제 지식을 부담없이 학습 가능한 웹서비스",
    about:
      "하루 3분, 경제 한 입 샐러리는 '지속 가능성'을 주제로 10대, 20대의 금융 리터러시 향상을 통해 경제 성장의 선순환을 그리는 것을 궁극적 가치로 바라봅니다. 용어 학습부터 트렌드를 반영한 퀴즈, 뉴스 기능을 제공하는 샐러리는 open AI API와 뉴스 API를 사용해 정보의 질을 향상시키고 다양한 라이브러리를 도입해 더 나은 사용자 경험을 제공합니다.",
    stack: ["JavaScript", "React", "Spring Boot", "MySQL"],
    team: "류다인 고영명 박지효 신유정 공윤호 유민주 신민경 신지환",
    coverImage: salary1,
    images: [salary1, salary15, salary16, salary17, salary20],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/DE8zUOmyWxI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 13,
    title: "Greenspark 그린스파크",
    number: 12,
    category: "겨울잠",
    description: "전기요금 절약으로 지속가능한 도약을 만들어내는 서비스",
    about:
      "그린스파크는 사용자가 자신의 가전제품 에너지 효율등급을 쉽게 조회하고, 전력 사용량을 분석하여 미래의 전력 소비와 전기세를 예측할 수 있도록 알고리즘을 구현하였습니다. 또한, 사용자에게 맞춤형 전력 절약 팁을 제공하고, 에너지 상식 퀴즈를 통해 지속가능성에 대한 동기부여를 강화합니다.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "FastAPI",
      "Spring Boot",
      "MySQL",
    ],
    team: "최지예 박하은 김하연 지하윤 백승현 이시온 김선정 전형준",
    coverImage: greenspark1,
    images: [
      greenspark1,
      greenspark12,
      greenspark14,
      greenspark15,
      greenspark18,
    ],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/DE_YaR0SMMK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 14,
    title: "Dotoread 도토릿",
    number: 12,
    category: "겨울잠",
    description: "언제든 맛있게 꺼내먹는 Read it Later 서비스",
    about:
      "도토릿은 '저장하고 읽지 않는' 현대인들의 디지털 정보 관리 문제를 해결하기 위한 AI 기반 북마크 서비스입니다. 북마크의 핵심 키워드를 추출하고 적절한 폴더를 자동으로 생성하여 원클릭으로 정리할 수 있습니다. 또한, Fresh Article과 Rotten Article로 구성된 리마인드 대시보드를 통해 저장된 콘텐츠를 적절한 시기에 리마인드하고, 장기간 방치된 북마크도 효율적으로 관리할 수 있습니다. 마지막으로, 커뮤니티 기능을 통해 사용자들이 자신만의 북마크 컬렉션을 공유하고, 다른 사용자들의 인사이트를 확장할 수 있는 플랫폼을 제공합니다.",
    stack: ["TypeScript", "React", "Docker", "Python", "Spring Boot", "MySQL"],
    team: "유승빈 김상우 김건휘 박채연 유태연 정서윤 이상은 정연재",
    coverImage: dotoread1,
    images: [dotoread1, dotoread6, dotoread7, dotoread8, dotoread9],
    githubUrl: null,
    instagramUrl:
      "https://www.instagram.com/p/DE6nss4ymbM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export const PROJECTS = [...PROJECTS_RAW].sort((a, b) => b.id - a.id);
