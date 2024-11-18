import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const ChooseUs = ({
  image0 = images.image0,
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  image4 = images.image4,
  image5 = images.image5,
  sectiontitle = texts.sectiontitle,
  sectiontitle1 = texts.sectiontitle1,
  sectiontitle2 = texts.sectiontitle2,
  sectiondescription = texts.sectiondescription,
  servicetitle1 = texts.servicetitle1,
  servicetitle2 = texts.servicetitle2,
  servicetitle3 = texts.servicetitle3,
  servicetitle4 = texts.servicetitle4,
  servicetitle5 = texts.servicetitle5,
  servicetitle6 = texts.servicetitle6,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[386px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[40px] p-[5px_0px_5px__0px]">
        {/* Title1 */}
        <section className="max-w-[1360px] w-full box-border min-h-[162px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
          <div className="max-w-[280px] w-full box-border min-h-[58px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
            <span
              style={{ fontFamily: "American Captain" }}
              className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-nowrap text-[#000000ff]"
            >
              {sectiontitle}
            </span>
            <span
              style={{ fontFamily: "American Captain" }}
              className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-nowrap text-[#ff4f51ff]"
            >
              {sectiontitle1}
            </span>
            <span
              style={{ fontFamily: "American Captain" }}
              className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-nowrap text-[#000000ff]"
            >
              {sectiontitle2}
            </span>
          </div>

          <div className="max-w-[1360px] w-full box-border min-h-[88px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-pre-wrap text-[#000000b2]">
              {sectiondescription}
            </span>
          </div>
        </section>
        {/* Services1 */}
        <section className="max-w-[1360px] w-full box-border min-h-[174px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[30px] gap-y-[30px] p-[10px_0px_10px__0px]">
          <div
            className="max-w-[350px] w-full box-border min-h-[62px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
          >
            <div className="w-[35px] h-[28.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782852 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image0} />
              </div>
            </div>

            <div className="max-w-[243px] w-full box-border flex items-center min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle1}
              </span>
            </div>
          </div>

          <div
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
            className="max-w-[299.5px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
          >
            <div className="w-[24.5px] h-[28px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782858 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image1} />
              </div>
            </div>

            <div className="max-w-[203px] w-full box-border flex items-center min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle2}
              </span>
            </div>
          </div>

          <div
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
            className="max-w-[346.49px] w-full box-border min-h-[62px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
          >
            <div className="w-[31.49px] h-[27.98px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782864 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image2} />
              </div>
            </div>

            <div className="max-w-[243px] w-full box-border flex items-center min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle3}
              </span>
            </div>
          </div>

          <div
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
            className="max-w-[433px] w-full box-border min-h-[62px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
          >
            <div className="w-[28px] h-[28px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782867 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image3} />
              </div>
            </div>

            <div className="max-w-[333px] w-full box-border flex items-center min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle4}
              </span>
            </div>
          </div>

          <div
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
            className="max-w-[280px] w-full box-border min-h-[62px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
          >
            <div className="w-[28px] h-[24.47px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782870 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image4} />
              </div>
            </div>

            <div className="max-w-[180px] w-full box-border min-h-[36px] flex items-center opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle5}
              </span>
            </div>
          </div>

          <div
            style={{
              boxShadow: "4px 4px 0px 4px rgba(0, 0, 0, 1)",
            }}
            className="max-w-[328.5px] w-full box-border min-h-[62px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#fec900ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
          >
            <div className="w-[24.5px] h-[28px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-20782873 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={image5} />
              </div>
            </div>

            <div className="max-w-[232px] w-full box-border flex items-center min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[28px] font-hanken font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#000000ff]">
                {servicetitle6}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ChooseUs;
