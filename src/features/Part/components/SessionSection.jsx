import React from "react";
import { sessionVersions } from "../../../data/sessions";

export default function SessionSection({ version = "pm" }) {
  const sessionData = sessionVersions[version];

  return (
    <div className="relative w-full flex flex-col pt-[3.375rem] sm:pt-[6.81rem] sm:flex-row sm:items-start overflow-x-hidden">

      {/* ===== 상단 경계선 ===== */}
      {/* 모바일: 화면 끝까지 꽉 차는 라인 */}
      <div className="sm:hidden absolute top-0 left-0 w-full border-t border-line border-[0.7px]" />

      {/* 웹: 화면 기준 오른쪽 맨 위에 붙는 라인 */}
      <div className="hidden sm:block absolute top-[6.81rem] right-0 w-[44.5rem] border-t border-line border-[0.7px] pointer-events-none z-10" />
      <div className="px-[1.19rem] sm:px-0 sm:flex sm:">
      {/* 상단 소개 (모바일: 위 / 웹: 오른쪽) */}
      <div className="flex flex-col items-start sm:mt-[3.38rem] gap-[1.12rem] order-1 sm:order-2 sm:ml-[4.69rem]">
        <div className="typo-pretitle1k">세션 소개 해주시죠</div>

        <p className="typo-body2 whitespace-pre-wrap sm:w-full">
          {sessionData.intro}
        </p>
      </div>

      {/* 세션 리스트 (모바일: 아래 / 웹: 왼쪽) */}
      <div className="flex flex-col mt-[1.88rem] order-2 sm:order-1 sm:mt-0">

        {/* 웹에서는 흰 박스 위에 안내문 */}
        <p className="hidden sm:block typo-small1 text-text mb-[1.19rem]">
          * 공통 세션 이후에 이루어지는 파트별 세션 내용입니다
        </p>

        <div className="px-0.4rem sm:px-0">
          <div className="flex flex-col bg-white w-full h-[31.5rem] sm:h-[37.3125rem] sm:w-[34.8125rem] px-[1rem] py-[0.94rem] sm:px-[1.78rem] sm:py-[1.31rem] rounded-[0.625rem]">

            {/* 제목 */}
            <h2 className="text-center">
              {/* 모바일 */}
              <span className="block sm:hidden typo-subtitlee">
                {sessionData.header}
              </span>

              {/* 웹 */}
              <span className="hidden sm:block typo-pretitle1e">
                {sessionData.header}
              </span>
            </h2>

            {/* 리스트 */}
            <div className="flex flex-col mt-[0.62rem] sm:mt-[2.5rem]">
              {sessionData.sessions.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-start pt-[0.31rem] pb-[0.62rem] sm:pt-[0.75rem] sm:pb-[0.62rem] border-t border-line
                    ${idx === 0 ? "pt-[0.62rem]" : ""}
                  `}
                >
                  {/* 왼쪽 */}
                  <div className="flex flex-col gap-[0.38rem]">
                    {/* 제목 텍스트 */}
                    <>
                      {/* 모바일 */}
                      <p className="block sm:hidden typo-buttontextbold">
                        {item.title}
                      </p>

                      {/* 웹 */}
                      <p className="hidden sm:block typo-cardtextk">
                        {item.title}
                      </p>
                    </>

                    <div className="flex flex-col gap-[0.38rem] pb-[0.31rem] sm:pb-[0rem]">
                      {item.desc.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          className="typo-buttontext text-subtext"
                        >
                          {line ? line : "\u00A0"}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* 오른쪽 WEEK */}
                  <div>
                    {/* 모바일 */}
                    <p className="block sm:hidden typo-footer1em">
                      WEEK {String(idx + 1).padStart(2, "0")}
                    </p>

                    {/* 웹 */}
                    <p className="hidden sm:block typo-footer1ew">
                      WEEK {String(idx + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 모바일에서는 흰 박스 아래 */}
        <p className="sm:hidden typo-small1 mt-[0.62rem] text-text">
          * 공통 세션 이후에 이루어지는 파트별 세션 내용입니다
        </p>
      </div>
    </div>
    </div>
  );
}
