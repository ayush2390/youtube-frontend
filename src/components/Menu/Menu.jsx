import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Menu = ({
  logo = images.logo,
  arrow = images.arrow,
  companyNameTubeloader = texts.companyNameTubeloader,
  companyNameTubeloader1 = texts.companyNameTubeloader1,
  youtubeNavigationLink = texts.youtubeNavigationLink,
  instagramNavigationLink = texts.instagramNavigationLink,
  facebookNavigationLink = texts.facebookNavigationLink,
  howToNavigationLink = texts.howToNavigationLink,
  contactUsNavigationLink = texts.contactUsNavigationLink,
  tryNowCallToActionText = texts.tryNowCallToActionText,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[64px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-between items-center content-space-between gap-y-[123px] p-[0px_0px_0px__0px]">
        {/* Logo1 */}
        <section className="w-[286px] min-h-[54px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_10px_0px__10px]">
          <div className="w-[19.32px] h-[28.66px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border">
            <div className="nodeBg-20783305 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="max-w-[250px] w-full flex box-border h-[54px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
            <img src={logo} className="h-[30px] w-[18px]"/>
            <span className="text-[42px] ml-2 font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#ff4f51ff]">
              {companyNameTubeloader}
            </span>
            <span className="text-[42px] font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#3b304cff]">
              {companyNameTubeloader1}
            </span>
          </div>
        </section>
        {/* Menu1 */}
        <section className="max-w-[858.76px] w-full box-border min-h-[39px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[48px] gap-y-[30px] p-[0px_0px_0px__0px]">
          <div className="max-w-[103px] w-full box-border min-h-[39px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[30px] font-hanken font-[700] no-underline none tracking-[-1.5px] leading-[30px] whitespace-nowrap text-[#3b304cff]">
              {youtubeNavigationLink}
            </span>
          </div>

          <div className="max-w-[125px] w-full box-border min-h-[39px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[30px] font-hanken font-[700] no-underline none tracking-[-1.5px] leading-[30px] whitespace-nowrap text-[#3b304cff]">
              {instagramNavigationLink}
            </span>
          </div>

          <div className="max-w-[122px] w-full box-border min-h-[39px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[30px] font-hanken font-[700] no-underline none tracking-[-1.5px] leading-[30px] whitespace-nowrap text-[#3b304cff]">
              {facebookNavigationLink}
            </span>
          </div>

          <div className="max-w-[102px] w-full box-border min-h-[39px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[30px] font-hanken font-[700] no-underline none tracking-[-1.5px] leading-[30px] whitespace-nowrap text-[#3b304cff]">
              {howToNavigationLink}
            </span>
          </div>

          <div className="max-w-[138px] w-full box-border min-h-[39px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[30px] font-hanken font-[700] no-underline none tracking-[-1.5px] leading-[30px] whitespace-nowrap text-[#3b304cff]">
              {contactUsNavigationLink}
            </span>
          </div>
        </section>
        {/* CTA1 */}
        <section
          style={{
            boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
          }}
          className="max-w-[215.24px] w-full box-border  min-h-[64px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px]  rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="w-[109px] h-[30px] opacity-[1] z-[0] rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[29px] w-full font-hanken font-[700] no-underline none tracking-[-0.9px] leading-[30px] whitespace-pre-wrap text-[#f9f6ffff]">
              {tryNowCallToActionText}
            </span>
          </div>

          <div className="w-[28.23px] h-[25.53px] flex opacity-[1] z-[1] rotate-[90deg] overflow-hidden">
            {/* <div className="nodeBg-20782703 absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat border-t-[11.26px] border-t-transparent border-b-[11.26px] border-b-transparent border-l-[22.53px] border-l-gray-800"></div> */}
         <img src={arrow} className="rotate-[-90deg]"/>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Menu;
