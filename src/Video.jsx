import React from "react";

const Video = () => {
  const videoUrl =
    "https://rr2---sn-xmjpuxa-qxae7.googlevideo.com/videoplayback?expire=1731167489&ei=oTAvZ_3PBOOljuMPrq7yqQs&ip=110.235.217.95&id=o-ANKdKQFqEa4b7jIJpOh8FOusxw1jRagUxs2d7zmjeACF&itag=313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1731145889%2C&mh=M8&mm=31%2C29&mn=sn-xmjpuxa-qxae7%2Csn-qxaelned&ms=au%2Crdu&mv=m&mvi=2&pl=24&rms=au%2Cau&initcwndbps=1642500&vprv=1&c=IOS&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=165343491&dur=172.208&lmt=1730929117200565&mt=1731145517&fvip=1&keepalive=yes&fexp=51312688%2C51326932&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Cc%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgM25qZiZYFJdZAeba9ec4L3A-bOj9KP6v5XWWTGGWoskCIQCFdz6EFW9uTt23LpDjOgwGAbAUhcAmH4uOVNIhMreF2w%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=ACJ0pHgwRQIgA9MKg3tWW9tKtTXXvS7dtVAPcY3NCK3UD_LkjsBCvfQCIQDymzjXyYQJv9BzUeLNMuu6xj2Sd434eARSNYNEcH6-_w%3D%3D"; // Replace with your video URL

  const downloadFile = async () => {
    try {
      // Fetch the video as a Blob
      const response = await fetch(videoUrl);
      const blob = await response.blob();

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "video.mp4"; // Specify the file name
      document.body.appendChild(a);
      a.click();

      // Clean up
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div>
      <button onClick={downloadFile}>Download Video</button>
    </div>
  );
};

export default Video;
