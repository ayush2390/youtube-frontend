import React from "react";
import Download from "./Download/Download";
import Works from "./Works/Works";

const DownloadPage = () => {
  return (
    <div className="flex flex-col gap-[70px] pt-[70px]">
      <Download />
      <Works />
    </div>
  );
};

export default DownloadPage;
