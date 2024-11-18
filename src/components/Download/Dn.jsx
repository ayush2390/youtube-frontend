import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";
import { useLocation } from "react-router-dom";
// import ytdl from "@distube/ytdl-core";

// import ytdl from "@distube/ytdl-core";
// import ytdl from "ytdl-core";
//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Download = ({
  videoPreview = images.videoPreview,
  logo = images.logo,
  Play = images.Play,
  Search = images.Search,
  brandName = texts.brandName,
  brandName1 = texts.brandName1,
  primaryHeadline = texts.primaryHeadline,
  secondaryText = texts.secondaryText,
  urlPlaceholder = texts.urlPlaceholder,
  termsAndConditions = texts.termsAndConditions,
  termsAndConditions1 = texts.termsAndConditions1,
  termsAndConditions2 = texts.termsAndConditions2,
  termsAndConditions3 = texts.termsAndConditions3,
  videoName = texts.videoName,
  videoDuration = texts.videoDuration,
  Duration = texts.Duration,
  videoDuration1 = texts.videoDuration1,
  videoStartTime = texts.videoStartTime,
  Start = texts.Start,
  videoStartTime1 = texts.videoStartTime1,
  verticalLine = texts.verticalLine,
  videoEndTime = texts.videoEndTime,
  End = texts.End,
  videoEndTime1 = texts.videoEndTime1,
  downloadOptionsHeading = texts.downloadOptionsHeading,
  videoFormatText = texts.videoFormatText,
  pQualityOption = texts.pQualityOption,
  pQualityOption1 = texts.pQualityOption1,
  pQualityOption2 = texts.pQualityOption2,
  pQualityOption3 = texts.pQualityOption3,
  pQualityOption4 = texts.pQualityOption4,
  audioFormatText = texts.audioFormatText,
  kbpsQualityOption = texts.kbpsQualityOption,
  kbpsQualityOption1 = texts.kbpsQualityOption1,
}) => {
  const location = useLocation();
  const [videoId, setVideoId] = useState("");
  const url = location.state?.text;
  useEffect(() => {
    const id = url.slice(-11);
    setVideoId(id);
  }, []);
  const downloadVideo = async () => {
    console.log("Download started");
    if (!url) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/download?url=${encodeURIComponent(url)}`
      );

      if (!response.ok) {
        throw new Error("Failed to download video");
      }
      const data = await response.json();
      console.log(data.format);
      window.open(data.format.url, "_blank");
      // Convert response to blob
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = "downloaded-video.mp4"; // Ensure the filename has .mp4 extension
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Revoke the object URL after download
      window.URL.revokeObjectURL(objectUrl);
      console.log("Download completed");
    } catch (error) {
      console.error("Error downloading video:", error);
      alert("Failed to download video");
    }
  };

  // const extractVideoId = (youtubeUrl) => {
  //   const regExp =
  //     /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  //   const match = youtubeUrl.match(regExp);
  //   return match ? match[1] : null;
  // };

  // const id = extractVideoId(url);
  // if (id) {
  //   setVideoId(id);
  // } else {
  //   setVideoId("");
  // }
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[1837px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center p-[60px_0px_60px__0px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] bg-[#fec900ff] [box-shadow:inset_0_0_0_2.5px_#272033ff,inset_0_0_2.5px_0_#272033ff,inset_0_2.5px_0_0_#272033ff,inset_2.5px_0_0_0_#272033ff] border-l-[2px] border-l-[#272033ff] border-r-[2px] border-r-[#272033ff] border-t-[2px] border-t-[#272033ff] border-b-[2px] border-b-[#272033ff] shadow-[10px_10px_0px_4px_rgba(0,0,0,1)]">
        {/* Content1 */}
        <section className="max-w-[1260px] w-full box-border min-h-[1717px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[70px] p-[0px_0px_0px__0px]">
          <div className="max-w-[1260px] w-full box-border min-h-[379px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[25px] p-[0px_0px_0px__0px]">
            <div className="w-[286px] min-h-[54px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[0px_0px_0px__0px]">
              <div className="w-[19.32px] h-[28.66px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border">
                <div className="nodeBg-20884855 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="max-w-[250px] flex w-full box-border h-[54px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                <img src={logo} className="h-[30px] w-[18px]" />
                <span className="text-[42px] ml-2 font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#ff4f51ff]">
                  {brandName}
                </span>
                <span className="text-[42px] font-hanken font-[700] no-underline none tracking-[-1.26px] leading-[42px] whitespace-pre-wrap text-[#3b304cff]">
                  {brandName1}
                </span>
              </div>
            </div>

            <div className="max-w-[1260px] w-full box-border min-h-[131px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[20px] p-[0px_0px_0px__0px]">
              <div className="max-w-[1260px] w-full box-border min-h-[67px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                <span
                  style={{ fontFamily: "American Captain" }}
                  className="text-[64px] font-[American Captain] font-[400] no-underline none leading-[66.6240005493164px] whitespace-pre-wrap text-[#000000ff]"
                >
                  {primaryHeadline}
                </span>
              </div>

              <div className="max-w-[1260px] w-full box-border min-h-[44px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
                <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-pre-wrap text-[#272033ff]">
                  {secondaryText}
                </span>
              </div>
            </div>

            <div className="max-w-[1260px] w-full box-border min-h-[144px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[20px] p-[0px_0px_0px__0px]">
              <div className="max-w-[1260px] w-full box-border min-h-[88px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-center p-[20px_24px_20px__32px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#3b304cff,inset_0_0_1.5px_0_#3b304cff,inset_0_1.5px_0_0_#3b304cff,inset_1.5px_0_0_0_#3b304cff] border-l-[1px] border-l-[#3b304cff] border-r-[1px] border-r-[#3b304cff] border-t-[1px] border-t-[#3b304cff] border-b-[1px] border-b-[#3b304cff]">
                <div className="max-w-[1150px]  w-full box-border min-h-[36px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[28px] font-hanken font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#3b304cff]">
                    {urlPlaceholder}
                  </span>
                </div>

                <div
                  style={{
                    boxShadow: "0.5px 0.5px 0px 2px rgba(0, 0, 0, 1)",
                  }}
                  className="w-[48px] h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center p-[0px_0px_0px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#4c3c1aff,inset_0_0_1.5px_0_#4c3c1aff,inset_0_1.5px_0_0_#4c3c1aff,inset_1.5px_0_0_0_#4c3c1aff] border-l-[1px] border-l-[#4c3c1aff] border-r-[1px] border-r-[#4c3c1aff] border-t-[1px] border-t-[#4c3c1aff] border-b-[1px] border-b-[#4c3c1aff] shadow-[0.5px_1px_0px_0px_rgba(76,60,26,1)]"
                >
                  <div className="w-[23.99px] h-[24.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden">
                    <div className="nodeBg-20884864 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat ">
                      <img src={Search} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[1260px] w-full box-border min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
                <div className="max-w-[1260px] w-full box-border min-h-[36px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                  <span className="text-[28px] font-hanken  font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                    {termsAndConditions}
                  </span>
                  <span className="text-[28px] font-hanken  font-[400] underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                    {termsAndConditions1}
                  </span>
                  <span className="text-[28px] font-hanken font-[400] no-underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                    {termsAndConditions2}
                  </span>
                  <span className="text-[28px] font-hanken  font-[400] underline none leading-[28px] whitespace-pre-wrap text-[#272033ff]">
                    {termsAndConditions3}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1260px] w-full box-border min-h-[1268px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[30px] p-[0px_0px_0px__0px]">
            <div className="w-[1260px] max-w-[100%] box-border h-[774px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#0000001a] box-border border-l-[4px] border-l-[#000000ff] border-r-[4px] border-r-[#000000ff] border-t-[4px] border-t-[#000000ff] border-b-[4px] border-b-[#000000ff] shadow-[10px_8px_0px_0px_rgba(11,11,11,1)] shadow-[10px_8px_0px_0px_rgba(11,11,11,1)]">
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="Video preview"
              />

              <div className="w-[102px] h-[102px] top-[336px] left-[579px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[102px] h-[102px] top-[0px] flex justify-center items-center left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff] box-border border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] absolute">
                  <img src={Play} className="w-[30px] h-[30px]" />
                </div>

                <div className="w-[22.5px] h-[25.98px] top-[38.01px] left-[43.5px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-20885039 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="max-w-[1260px] w-full box-border min-h-[150px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[30px] p-[7px_0px_7px__0px]">
              <div className="max-w-[1260px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                <span className="text-[32px] font-hanken font-[500] no-underline none leading-[44px] whitespace-pre-wrap text-[#272033ff]">
                  {videoName}
                </span>
              </div>

              <div className="max-w-[1260px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[30px] gap-y-[30px] p-[0px_0px_0px__0px]">
                <div className="max-w-[261px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                  <span className="text-[32px] font-hanken font-[300] no-underline none leading-[44px] whitespace-nowrap text-[#272033ff]">
                    {videoDuration}
                  </span>
                  <span className="text-[32px] font-hanken font-[700] no-underline none leading-[44px] whitespace-nowrap text-[#272033ff]">
                    {videoDuration1}
                  </span>
                </div>

                <div className="max-w-[969px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]">
                  <div className="max-w-[436.5px] pt-1 w-full box-border min-h-[36px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                    <span className="text-[28px] font-hanken font-[400] no-underline none tracking-[-1.4px] leading-[28px] whitespace-pre-wrap text-[#000000ff]">
                      {videoStartTime}
                    </span>
                    <span className="text-[28px] font-hanken font-[300] underline none tracking-[-1.4px] leading-[28px] whitespace-pre-wrap text-[#000000ff]">
                      {videoStartTime1}
                    </span>
                  </div>

                  <div className="max-w-[8px] w-full box-border min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
                    <span className="text-[28px] font-hanken font-[400] no-underline none tracking-[-1.4px] leading-[28px] whitespace-pre-wrap text-[#000000ff]">
                      {verticalLine}
                    </span>
                  </div>

                  <div className="max-w-[436.5px] w-full pt-1 box-border min-h-[36px] opacity-[1] z-[2]  rotate-[0deg]   text-center leading-[0px]">
                    <span className="text-[28px] font-hanken font-[400] no-underline none tracking-[-1.4px] leading-[28px] whitespace-pre-wrap text-[#000000ff]">
                      {videoEndTime}
                    </span>
                    <span className="text-[28px] font-hanken font-[300] underline none tracking-[-1.4px] leading-[28px] whitespace-pre-wrap text-[#000000ff]">
                      {videoEndTime1}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[1260px] w-full box-border min-h-[284px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[30px] p-[30px_40px_30px__40px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#3b304cff,inset_0_0_1.5px_0_#3b304cff,inset_0_1.5px_0_0_#3b304cff,inset_1.5px_0_0_0_#3b304cff] border-l-[1px] border-l-[#3b304cff] border-r-[1px] border-r-[#3b304cff] border-t-[1px] border-t-[#3b304cff] border-b-[1px] border-b-[#3b304cff]">
              <div className="max-w-[1180px] w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span
                  style={{ fontFamily: "American Captain" }}
                  className="text-[40px] font-[American Captain] font-[400] no-underline none leading-[40px] whitespace-pre-wrap text-[#3b304cff]"
                >
                  {downloadOptionsHeading}
                </span>
              </div>

              <div className="max-w-[1180px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[21px] gap-y-[21px] p-[0px_0px_0px__0px]">
                <div className="max-w-[185px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                  <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-nowrap text-[#000000b2]">
                    {videoFormatText}
                  </span>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[130px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                  onClick={downloadVideo}
                >
                  <div className="max-w-[74px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {pQualityOption}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[130px] w-full box-border min-h-[62px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[74px] w-full box-border min-h-[36px] opacity-[1] flex justify-center z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700]   no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {pQualityOption1}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[115px] w-full box-border min-h-[62px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[59px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {pQualityOption2}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[115px] w-full box-border min-h-[62px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[59px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {pQualityOption3}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[115px] w-full box-border min-h-[62px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[59px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {pQualityOption4}
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-[1180px] w-full box-border min-h-[62px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[21px] gap-y-[21px] p-[0px_0px_0px__0px]">
                <div className="max-w-[185px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                  <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-nowrap text-[#000000b2]">
                    {audioFormatText}
                  </span>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[156px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[100px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {kbpsQualityOption}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "2px 2px 0px 4px rgba(0, 0, 0, 1)",
                  }}
                  className="max-w-[156px] w-full box-border min-h-[62px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[12px_0px_14px__0px] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] bg-[#ff4f51ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[3px_4px_0px_0px_rgba(15,15,15,1)]"
                >
                  <div className="max-w-[100px] w-full box-border min-h-[36px] flex justify-center opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[28px] pt-1 font-hanken font-bold font-[700] no-underline none tracking-[-1.4px] leading-[28px] whitespace-nowrap text-[#ffffffff]">
                      {kbpsQualityOption1}
                    </span>
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
export default Download;
