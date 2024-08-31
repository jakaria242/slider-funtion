import React from "react";
import downloadFile from "../utils/DownloadFile";
import { FaDownload } from "react-icons/fa";

const DownloadAll = () => {
  const data = [
    {
      id: 0,
      text: "image",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    {
      id: 1,
      text: "File",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    {
      id: 2,
      text: "pdf",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    {
      id: 3,
      text: "image",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    {
      id: 4,
      text: "File",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    {
      id: 5,
      text: "pdf",
      files: [
        { fileName: "Download.jpg", url: "/path/to/your/file.jpg" },
        { fileName: "Download.file", url: "/path/to/your/file.file" },
        { fileName: "Download.pdf", url: "/path/to/your/file.pdf" },
      ],
    },
    // Add more items as needed...
  ];

  return (
    <section className="bg-[#221f1f] py-10">
      <div className="w-container mx-auto">
        <h2 className="text-5xl font-medium text-white uppercase text-center mb-[50px]">
          Download Any Files
        </h2>
        <div className="flex justify-between items-center gap-[30px] flex-wrap">
          {data.map((item) => (
            <div key={item.id} className="w-[370px] flex flex-col">
              <h3 className="text-2xl text-white pb-2 border-b border-blue-50 capitalize">
                {item.text}
              </h3>
              <div className="flex justify-between items-center pt-2">
                <p className="text-[16px] text-white">FileName</p>
                <p className="text-[16px] text-white">Download</p>
              </div>
              <div className="with-full flex justify-between items-center mt-6">
                <ul className="flex flex-col gap-2 items-center">
                  {item.files.map((file, index) => (
                    <li key={index} className="text-[14px] text-white">
                      {file.fileName}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-3 items-center">
                  {item.files.map((file, index) => (
                    <li
                      key={index}
                      onClick={() => downloadFile(file.url, file.fileName)}
                      className="text-[14px] text-white cursor-pointer"
                    >
                      <FaDownload />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadAll;
