import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const FAQ = ({
  vector = images.vector,
  down = images.down,
  faqSectionTitle = texts.faqSectionTitle,
  faqSectionTitle1 = texts.faqSectionTitle1,
  faqSectionTitle2 = texts.faqSectionTitle2,
  faqQuestionAboutTubeloader = texts.faqQuestionAboutTubeloader,
  faqQuestionAboutServiceUsage = texts.faqQuestionAboutServiceUsage,
  faqQuestionAboutFileStorage = texts.faqQuestionAboutFileStorage,
  faqQuestionAboutQuicktimePlayer = texts.faqQuestionAboutQuicktimePlayer,
  faqQuestionAboutRemovingAds = texts.faqQuestionAboutRemovingAds,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[773.74px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[40px] p-[50px_0px_50px__0px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] bg-[#fec900ff]">
        <div className="w-[181.77px] h-[35.74px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
          <div className="nodeBg-20884901 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
            <img src={vector} />
          </div>
        </div>

        <div className="max-w-[1200px] w-full box-border min-h-[58px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
          <span className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-pre-wrap text-[#111111ff]">
            {faqSectionTitle}
          </span>
          <span className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-pre-wrap text-[#ff4f51ff]">
            {faqSectionTitle1}
          </span>
          <span className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-pre-wrap text-[#111111ff]">
            {faqSectionTitle2}
          </span>
        </div>
        {/* faqs1 */}
        <section className="max-w-[1200px] w-full box-border min-h-[500px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[5px] p-[0px_0px_0px__0px]">
          <div className="max-w-[1200px] w-full box-border min-h-[96px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[32px_40px_32px__40px] bg-[#ffffffff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-[1096px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[24px] font-[Work Sans] font-[600] no-underline none leading-[32px] whitespace-pre-wrap text-[#000000ff]">
                {faqQuestionAboutTubeloader}
              </span>
            </div>

            <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]">
              <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[17.34px] h-[8.6px] top-[8.2px] left-[3.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-I20824192_312035517 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[0] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-I20824192_312035815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                      <img src={down} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] w-full box-border min-h-[96px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[32px_40px_32px__40px] bg-[#ffffffff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-[1096px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[24px] font-[Work Sans] font-[600] no-underline none leading-[32px] whitespace-pre-wrap text-[#000000ff]">
                {faqQuestionAboutServiceUsage}
              </span>
            </div>

            <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]">
              <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[17.34px] h-[8.6px] top-[8.2px] left-[3.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-I20824195_312035517 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[0] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-I20824195_312035815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] w-full box-border min-h-[96px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[32px_40px_32px__40px] bg-[#ffffffff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-[1096px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[24px] font-[Work Sans] font-[600] no-underline none leading-[32px] whitespace-pre-wrap text-[#000000ff]">
                {faqQuestionAboutFileStorage}
              </span>
            </div>

            <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]">
              <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[17.34px] h-[8.6px] top-[8.2px] left-[3.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-I20824198_312035517 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[0] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-I20824198_312035815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] w-full box-border min-h-[96px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[32px_40px_32px__40px] bg-[#ffffffff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-[1096px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[24px] font-[Work Sans] font-[600] no-underline none leading-[32px] whitespace-pre-wrap text-[#000000ff]">
                {faqQuestionAboutQuicktimePlayer}
              </span>
            </div>

            <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]">
              <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[17.34px] h-[8.6px] top-[8.2px] left-[3.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-I20824201_312035517 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[0] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-I20824201_312035815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] w-full box-border min-h-[96px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[32px_40px_32px__40px] bg-[#ffffffff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-[1096px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[24px] font-[Work Sans] font-[600] no-underline none leading-[32px] whitespace-pre-wrap text-[#000000ff]">
                {faqQuestionAboutRemovingAds}
              </span>
            </div>

            <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]">
              <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[17.34px] h-[8.6px] top-[8.2px] left-[3.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-I20824204_312035517 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[0] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-I20824204_312035815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default FAQ;
