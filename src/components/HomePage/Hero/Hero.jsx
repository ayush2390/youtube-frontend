import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";
import { useNavigate } from "react-router-dom";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Hero = ({
  videoPreview = images.videoPreview,
  rocket = images.rocket,
  vector = images.vector,
  play = images.play,
  arrow = images.arrow,
  logo = images.logo,
  Search = images.Search,
  brandName = texts.brandName,
  brandName1 = texts.brandName1,
  mainHeading = texts.mainHeading,
  mainHeading1 = texts.mainHeading1,
  subheading = texts.subheading,
  urlInputPlaceholder = texts.urlInputPlaceholder,
  termsAndConditions = texts.termsAndConditions,
  termsAndConditions1 = texts.termsAndConditions1,
  termsAndConditions2 = texts.termsAndConditions2,
  termsAndConditions3 = texts.termsAndConditions3,
  qualityOptionsHeading = texts.qualityOptionsHeading,
  kQualityOption = texts.kQualityOption,
  pQualityOption = texts.pQualityOption,
  pQualityOption1 = texts.pQualityOption1,
  pQualityOption2 = texts.pQualityOption2,
  mp3QualityOption = texts.mp3QualityOption,
  downloadCta = texts.downloadCta,
}) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const toDownload = () => {
    navigate("/download", { state: { text: url } });
  };
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div
        className="max-w-[1360px] w-full box-border min-h-[820px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center p-[60px_0px_60px__0px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] bg-[#fec900ff] [box-shadow:inset_0_0_0_2.5px_#272033ff,inset_0_0_2.5px_0_#272033ff,inset_0_2.5px_0_0_#272033ff,inset_2.5px_0_0_0_#272033ff] border-l-[2px] border-l-[#272033ff] border-r-[2px] border-r-[#272033ff] border-t-[2px] border-t-[#272033ff] border-b-[2px] border-b-[#272033ff] shadow-[10px_10px_0px_4px_rgba(0,0,0,1)]"
        style={{
          boxShadow: "8px 8px 0px 4px rgba(0, 0, 0, 1)",
        }}
      >
        {/* Content1 */}
        <section className="max-w-[672.49px] w-full box-border min-h-[700px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[48px] p-[0px_0px_0px__0px]">
          <div className="max-w-[672.49px] w-full box-border min-h-[464px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[32px] p-[0px_0px_0px__0px]">
            <div className="w-[286px] min-h-[54px]  opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_10px_0px_0px]">
              {/* <div className="w-[19.32px] h-[28.66px] bg-green-900 opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border">
                <div className="nodeBg-20787830 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div> */}

              <div className="max-w-[250px] flex w-full box-border h-[54px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                <img src={logo} className="w-[18px] h-[30px]" />
                <span className="text-[42px] ml-2 font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#ff4f51ff]">
                  {brandName}
                </span>
                <span className="text-[42px] font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#3b304cff]">
                  {brandName1}
                </span>
              </div>
            </div>

            <div className="max-w-[672.49px] w-full box-border min-h-[378px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_0px_0px__0px]">
              <div className="max-w-[672.49px] w-full box-border min-h-[266px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span
                  style={{ fontFamily: "American Captain" }}
                  className="text-[128px] font-[American Captain] font-[400] no-underline none leading-[133.2480010986328px] whitespace-pre-wrap text-[#ff4f51ff]"
                >
                  {mainHeading}
                </span>
                <span
                  style={{ fontFamily: "American Captain" }}
                  className="text-[128px] font-[American Captain] font-[400] no-underline none leading-[133.2480010986328px] whitespace-pre-wrap text-[#272033ff]"
                >
                  {mainHeading1}
                </span>
              </div>

              <div className="max-w-[672.49px] w-full box-border min-h-[88px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-pre-wrap text-[#272033ff]">
                  {subheading}
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[672.49px] w-full box-border min-h-[188px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[28px] p-[0px_0px_0px__0px]">
            <div className="max-w-[672.49px]  w-full box-border min-h-[88px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-between items-center p-[20px_24px_20px__32px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#3b304cff,inset_0_0_1.5px_0_#3b304cff,inset_0_1.5px_0_0_#3b304cff,inset_1.5px_0_0_0_#3b304cff] border-l-[1px] border-l-[#3b304cff] border-r-[1px] border-r-[#3b304cff] border-t-[1px] border-t-[#3b304cff] border-b-[1px] border-b-[#3b304cff]">
              {/* <div className="max-w-[568.49px] box-border min-h-[36px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[28px] font-hanken font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#3b304c66]">
                  {urlInputPlaceholder}
                </span>
              </div> */}
              <input
                type="text"
                placeholder={urlInputPlaceholder}
                className="w-[560.49px] box-border min-h-[36px] opacity-[1] z-[0] rotate-[0deg] text-left text-[28px] font-hanken font-[400] no-underline leading-[28px] whitespace-pre-wrap placeholder:text-[#3b304c66] border-none outline-none"
                onChange={(e) => setUrl(e.target.value)}
              />

              <div
                style={{
                  boxShadow: "0.5px 0.5px 0px 2px rgba(0, 0, 0, 1)",
                }}
                className="w-[48px] h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center p-[0px_0px_0px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#4c3c1aff,inset_0_0_1.5px_0_#4c3c1aff,inset_0_1.5px_0_0_#4c3c1aff,inset_1.5px_0_0_0_#4c3c1aff] border-l-[1px] border-l-[#4c3c1aff] border-r-[1px] border-r-[#4c3c1aff] border-t-[1px] border-t-[#4c3c1aff] border-b-[1px] border-b-[#4c3c1aff] shadow-[0.5px_1px_0px_0px_rgba(76,60,26,1)]"
              >
                <div className="w-full h-full opacity-[1] z-[0]    rotate-[0deg] overflow-hidden">
                  <div
                    onClick={toDownload}
                    className="nodeBg-20782826  cursor-pointer  flex justify-center items-center top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "
                  >
                    <img src={rocket} className="w-[30px] h-[30px] " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[632px] min-h-[72px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
              <div className="max-w-[632px] w-full box-border min-h-[72px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[28px] font-hanken font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                  {termsAndConditions}
                </span>
                <span className="text-[28px] font-hanken font-[400] underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                  {termsAndConditions1}
                </span>
                <span className="text-[28px] font-hanken font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                  {termsAndConditions2}
                </span>
                <span className="text-[28px] font-hanken font-[400] underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                  {termsAndConditions3}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* graphic1 */}
        <section className="w-[587.51px] min-h-[624.12px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
          <div className="w-[587.72px] h-[624.12px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[499.39px] h-[339.96px] top-[106.39px] left-[77.63px] opacity-[1] z-[0]  rotate-[3.8deg]   rounded-tl-[10.43px] rounded-tr-[10.43px] rounded-br-[10.43px] rounded-bl-[10.43px] bg-[#ff4f51ff] absolute"></div>

            <div className="w-[552.12px] h-[362.67px] top-[52.86px] left-[0px] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="w-[533.56px] h-[331.93px] top-[15.37px] left-[9.28px] opacity-[1] z-[0]  rotate-[-3.36deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center p-[0px_0px_0px__0px] rounded-tl-[9.56px] rounded-tr-[9.56px] rounded-br-[9.56px] rounded-bl-[9.56px] bg-[#f7f7f7ff,#00000033] box-border border-l-[2.3350467681884766px] border-l-[#5f5f5fff] border-r-[2.3350467681884766px] border-r-[#5f5f5fff] border-t-[2.3350467681884766px] border-t-[#5f5f5fff] border-b-[2.3350467681884766px] border-b-[#5f5f5fff] shadow-[3.502570152282715px_3.502570152282715px_0px_0px_rgba(48,40,63,1)] shadow-[3.502570152282715px_3.502570152282715px_0px_0px_rgba(48,40,63,1)] shadow-[3.502570152282715px_3.502570152282715px_0px_0px_rgba(48,40,63,1)] absolute">
                <img
                  src={`${videoPreview}`}
                  className="opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                  alt="Video preview"
                />{" "}
              </div>

              <div className="w-[88.65px] h-[88.65px] flex justify-center items-center top-[136.45px] left-[232.05px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#ffffffff] absolute">
                <img src={play} className="w-[36.55px] h-[36.55px]" />
              </div>

              <div className="w-[30.5px] h-[30.66px] top-[167.38px] left-[263.24px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-20884395 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>

            <div className="w-[278.11px] min-h-[205.99px] top-[371.78px] left-[108.23px] opacity-[1] z-[2]  rotate-[-12.09deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px] rounded-tl-[3.48px] rounded-tr-[3.48px] rounded-br-[3.48px] rounded-bl-[3.48px] bg-[#ffffffff] box-border border-l-[0.8691021800041199px] border-l-[#5f5f5fff] border-r-[0.8691021800041199px] border-r-[#5f5f5fff] border-t-[0.8691021800041199px] border-t-[#5f5f5fff] border-b-[0.8691021800041199px] border-b-[#5f5f5fff] shadow-[2.607306480407715px_2.607306480407715px_0px_0px_rgba(67,67,67,1)] absolute">
              <div className="max-w-[278.11px] w-full box-border min-h-[40.86px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[10px_13px_10px__13px] box-border border-l-[0px] border-l-[#1a1a1aff] border-r-[0px] border-r-[#1a1a1aff] border-t-[0px] border-t-[#1a1a1aff] border-b-[0.8691021800041199px] border-b-[#1a1a1aff]">
                <div className="max-w-[120px] w-full box-border min-h-[20px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14.77px] font-hanken font-[700] no-underline none leading-[19.120248794555664px] whitespace-nowrap text-[#1a1a1aff]">
                    {qualityOptionsHeading}
                  </span>
                </div>
              </div>

              <div className="max-w-[278.11px] w-full box-border min-h-[165.13px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
                <div className="max-w-[278.11px] w-full box-border h-[33.03px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[13.91px] p-[10px_13px_10px__13px]">
                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[0]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                        <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                          <div className="w-[13.76px] h-[13.76px] top-[1.45px] left-[1.45px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884401_161326_53615 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[1.45px] h-[1.45px] top-[14.49px] left-[14.49px] opacity-[0.4] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884401_161326_53616 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[0] z-[2]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                            <div className="nodeBg-I20884401_161326_53617 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[52px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[13.04px] font-hanken font-[400] no-underline none leading-[15.643838882446289px] whitespace-nowrap text-[#1a1a1aff]">
                      {kQualityOption}
                    </span>
                  </div>

                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[2]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

                      <div className="w-[14.21px] h-[11.59px] top-[2.9px] left-[1.45px] opacity-[1] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                        <div className="nodeBg-I20884403_2922507_19110160 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[278.11px] w-full box-border h-[33.03px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[10px_13px_10px__13px] bg-[#eff3efff]">
                  <div className="w-[13.91px] h-[13.91px] opacity-[1] z-[0]  rotate-[0deg]">
                    <div className="w-[13.91px] h-[13.91px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[13.91px] h-[13.91px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                        <div className="w-[13.91px] h-[13.91px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                          <div className="w-[11.01px] h-[11.01px] top-[1.16px] left-[1.16px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884405_161326_53615 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[1.16px] h-[1.16px] top-[11.59px] left-[11.59px] opacity-[0.4] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884405_161326_53616 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[13.91px] h-[13.91px] top-[0px] left-[0px] opacity-[0] z-[2]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                            <div className="nodeBg-I20884405_161326_53617 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[74px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[13.04px] font-hanken font-[600] no-underline none leading-[15.643838882446289px] whitespace-nowrap text-[#1a1a1aff]">
                      {pQualityOption}
                    </span>
                  </div>

                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                        <div className="nodeBg-I20884407_168370 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="w-[11.37px] h-[9.91px] top-[3.34px] left-[2.71px] opacity-[1] z-[1]  rotate-[12.09deg]  rotate-[12.09deg]  origin-[-605.57%_242.03%] overflow-hidden absolute">
                        <div className="nodeBg-I20884407_168371 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[278.11px] w-full box-border h-[33.03px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[13.91px] p-[10px_13px_10px__13px]">
                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[0]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                        <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                          <div className="w-[13.76px] h-[13.76px] top-[1.45px] left-[1.45px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884409_161326_53615 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[1.45px] h-[1.45px] top-[14.49px] left-[14.49px] opacity-[0.4] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884409_161326_53616 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[0] z-[2]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                            <div className="nodeBg-I20884409_161326_53617 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[67px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[13.04px] font-hanken font-[400] no-underline none leading-[15.643838882446289px] whitespace-nowrap text-[#1a1a1aff]">
                      {pQualityOption1}
                    </span>
                  </div>

                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[2]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

                      <div className="w-[14.21px] h-[11.59px] top-[2.9px] left-[1.45px] opacity-[1] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                        <div className="nodeBg-I20884411_2922507_19110160 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[278.11px] w-full box-border h-[33.03px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[13.91px] p-[10px_13px_10px__13px]">
                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[0]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                        <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                          <div className="w-[13.76px] h-[13.76px] top-[1.45px] left-[1.45px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884413_161326_53615 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[1.45px] h-[1.45px] top-[14.49px] left-[14.49px] opacity-[0.4] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884413_161326_53616 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[0] z-[2]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                            <div className="nodeBg-I20884413_161326_53617 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[67px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[13.04px] font-hanken font-[400] no-underline none leading-[15.643838882446289px] whitespace-nowrap text-[#1a1a1aff]">
                      {pQualityOption2}
                    </span>
                  </div>

                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[2]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

                      <div className="w-[14.21px] h-[11.59px] top-[2.9px] left-[1.45px] opacity-[1] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                        <div className="nodeBg-I20884415_2922507_19110160 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[278.11px] w-full box-border h-[33.03px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[13.91px] p-[10px_13px_10px__13px]">
                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[0]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                        <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                          <div className="w-[13.76px] h-[13.76px] top-[1.45px] left-[1.45px] opacity-[1] z-[0]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884417_161326_53615 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[1.45px] h-[1.45px] top-[14.49px] left-[14.49px] opacity-[0.4] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden box-border absolute">
                            <div className="nodeBg-I20884417_161326_53616 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>

                          <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[0] z-[2]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                            <div className="nodeBg-I20884417_161326_53617 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[87px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[13.04px] font-hanken font-[400] no-underline none leading-[15.643838882446289px] whitespace-nowrap text-[#1a1a1aff]">
                      {mp3QualityOption}
                    </span>
                  </div>

                  <div className="w-[17.38px] h-[17.38px] opacity-[1] z-[2]  rotate-[0deg]">
                    <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                      <div className="w-[17.38px] h-[17.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

                      <div className="w-[14.21px] h-[11.59px] top-[2.9px] left-[1.45px] opacity-[1] z-[1]  rotate-[12.09deg]  rotate-[12.09deg] overflow-hidden absolute">
                        <div className="nodeBg-I20884419_2922507_19110160 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[50%] top-[82%] z-[3]">
              <img src={vector} className="h-[35px] w-[181px]" />
            </div>

            <div
              style={{
                boxShadow: "3px 3px 0px 4px rgba(0, 0, 0, 1)",
              }}
              className="max-w-[203.08px] w-full box-border min-h-[63.55px] top-[22.03px] left-[253.65px] opacity-[1] z-[3]  rotate-[13deg]   flex flex-nowrap justify-center items-center gap-[13.91px] p-[13px_0px_15px__0px] rounded-tl-[10.43px] rounded-tr-[10.43px] rounded-br-[10.43px] rounded-bl-[10.43px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[2.607306480407715px_3.4764087200164795px_0px_0px_rgba(0,0,0,1)] absolute"
            >
              <div className="max-w-[113px] mt-2 w-full box-border min-h-[34px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[26.07px] font-hanken font-[700] no-underline none tracking-[-0.7821919441223144px] leading-[26.07306480407715px] whitespace-nowrap text-[#ffffffff]">
                  {downloadCta}
                </span>
              </div>

              <div className="w-[19.3px] mt-2 h-[22.47px] opacity-[1] z-[1]  rotate-[-13deg]  rotate-[-13deg]  origin-[-25.64%_-3.45%] overflow-hidden">
                <div className="nodeBg-20884422 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                  <img src={arrow} />
                </div>
              </div>
            </div>

            <div className="w-[181.77px] h-[35.74px] top-[508.38px] left-[303.52px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-20884423 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
