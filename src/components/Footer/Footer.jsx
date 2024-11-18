import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Footer = ({
  linkedin = images.linkedin,
  logo = images.logo,
  fb = images.fb,
  insta = images.insta,
  copyrightnotice = texts.copyrightnotice,
  brandname = texts.brandname,
  brandname1 = texts.brandname1,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="w-full box-border min-h-[174px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-wrap justify-between items-center content-space-between gap-y-[109px] p-[47px_40px_47px__40px] bg-[#171717ff]">
        <div
          // onClick="window.location.href='https://www.dualite.dev/';"
          className="max-w-[406px] cursor-pointer w-full box-border min-h-[30px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]"
        >
          <span className="text-[25px] font-syne font-[400] no-underline none leading-[25px] whitespace-nowrap text-[#ffffffff]">
            <a href="https://www.dualite.dev/" target="_blank">
              {copyrightnotice}
            </a>
          </span>
        </div>
        {/* Logo1 */}
        <section className="w-[286px] min-h-[54px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_10px_0px__10px]">
          <div className="w-[19.32px] h-[28.66px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border">
            <div className="nodeBg-20824180 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="max-w-[250px] w-full box-border h-[54px] opacity-[1] z-[1]  rotate-[0deg] flex  text-left leading-[0px]">
            <img src={logo} className=" h-[30px] " />
            <span className="text-[42px] ml-2 font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#ff4f51ff]">
              {brandname}
            </span>
            <span className="text-[42px] font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#ffffffff]">
              {brandname1}
            </span>
          </div>
        </section>
        {/* Frame 411 */}
        {/* <section className="max-w-[318.4px] w-full box-border min-h-[80px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-end gap-[40px] p-[0px_0px_0px__0px]">
          <div className="w-[80px] h-[80px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex justify-center items-center rounded-tl-[164.06px] rounded-tr-[164.06px] rounded-br-[164.06px] rounded-bl-[164.06px] bg-[#ff4f51ff] box-border border-l-[1.640625px] border-l-[#133834ff] border-r-[1.640625px] border-r-[#133834ff] border-t-[1.640625px] border-t-[#133834ff] border-b-[1.640625px] border-b-[#133834ff] shadow-[3px_4px_0px_0px_rgba(14,38,35,1)]">
            <div className="w-[41.25px] h-[41.25px] top-[17.5px] left-[21.25px]  opacity-[1] z-[0]   rotate-[0deg] overflow-hidden ">
              <div className="nodeBg-I20824172_3420 absolute  top-0 left-0 w-full h-full  bg-center bg-contain bg-no-repeat ">
                <img src={linkedin} />
              </div>
            </div>
          </div>

          <div className="w-[78.4px] h-[80px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] rounded-bl-[150px] bg-[#ff4f51ff] box-border border-l-[1.5px] border-l-[#133834ff] border-r-[1.5px] border-r-[#133834ff] border-t-[1.5px] border-t-[#133834ff] border-b-[1.5px] border-b-[#133834ff] shadow-[3px_4px_0px_0px_rgba(14,38,35,1)]">
            <div className="w-[40.68px] h-[41.25px] top-[18.75px] left-[18.38px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-I20824173_3404 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={fb} />
              </div>
            </div>
          </div>

          <div className="w-[80px] h-[80px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] bg-[#ff4f51ff] box-border border-l-[1px] border-l-[#133834ff] border-r-[1px] border-r-[#133834ff] border-t-[1px] border-t-[#133834ff] border-b-[1px] border-b-[#133834ff] shadow-[3px_4px_0px_0px_rgba(14,38,35,1)]">
            <div className="w-[41.19px] h-[41.25px] top-[18.75px] left-[18.75px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-I20824174_3414 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                <img src={insta} />
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};
export default Footer;
