"use client";

import { Post } from "@/app/@types/instagram";
import { AlignmentStyle } from "@/app/@types/post";
import { getRandomLogEntry } from "@/app/utils/post";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IPostItem {
  post: Post;
  index: number;
  isLast: boolean;
  isFirst: boolean;
  hasMultiplePhotos: boolean;
}

const PostItem: React.FC<IPostItem> = ({
  post,
  index,
  isLast,
  hasMultiplePhotos,
}) => {
  const alignment: AlignmentStyle =
    index % 2 === 0
      ? {
          "flex-direction": "flex-row",
          connector: {
            border: "border-t-[1px] border-r-[1px]",
            position: "left-10 bottom-0",
            radius: "rounded-tr-xl",
            dots: {
              top: "-left-1 -top-1",
              bot: "-right-1 -bottom-1",
            },
          },
          "multiple-photos": {
            margin: "ml-5",
            position: "justify-start",
          },
        }
      : {
          "flex-direction": "flex-row-reverse",
          connector: {
            border: "border-t-[1px] border-l-[1px]",
            position: "right-10 bottom-0",
            radius: "rounded-tl-xl",
            dots: {
              top: "-right-1 -top-1",
              bot: "-left-1 -bottom-1",
            },
          },
          "multiple-photos": {
            margin: "mr-5",
            position: "justify-end",
          },
        };

  const [isPostExpanded, setIsPostExpanded] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [logEntry, setLogEntry] = useState<string>("");

  useEffect(() => {
    setLogEntry(getRandomLogEntry());
  }, []);

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsPostExpanded(true);
  };

  const handleCollapse = () => {
    setIsPostExpanded(false);
  };

  return (
    <div
      key={post.id}
      className={`relative w-full flex ${alignment["flex-direction"]}`}
    >
      <div
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
        className="relative flex w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="absolute w-full h-full flex items-center justify-center bg-black/50 hover:bg-transparent rounded-lg transition-all duration-500 ease-in-out">
          <h2 className="text-xl font-semibold text-white animate-pulse">
            {post.caption}
          </h2>
        </div>
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={post.media_urls[0]}
          alt=""
          width={1000}
          height={1000}
          priority
        />
      </div>

      <div
        className={`w-1/2 flex items-end relative ${alignment["multiple-photos"].position}`}
      >
        <h2
          className={`absolute top-0 text-3xl font-light font-mono mx-10 ${
            isPostExpanded ? "text-slate-800" : "text-slate-300"
          } transition-colors duration-500 ease-in-out`}
        >
          {logEntry}
        </h2>
        {!isLast && !hasMultiplePhotos && (
          <div
            className={`${alignment.connector.border} ${
              alignment.connector.position
            } ${alignment.connector.radius} h-1/2 w-1/2 absolute ${
              isPostExpanded ? "border-slate-800" : "border-slate-300"
            } border-dashed transition-colors duration-500 ease-in-out`}
          >
            <div className="w-full h-full relative">
              <div
                className={`w-2 h-2 ${
                  isPostExpanded ? "bg-slate-800" : "bg-slate-300"
                } rounded-full absolute ${
                  alignment.connector.dots.top
                } transition-colors duration-500 ease-in-out`}
              />
              <div
                className={`w-2 h-2 ${
                  isPostExpanded ? "bg-slate-800" : "bg-slate-300"
                } rounded-full absolute ${
                  alignment.connector.dots.bot
                } transition-colors duration-500 ease-in-out`}
              />
            </div>
          </div>
        )}

        <div className={`flex items-end ${alignment["flex-direction"]}`}>
          {hasMultiplePhotos &&
            post.media_urls.slice(1, 3).map((url, index) => {
              const width = (index + 1) * 2;
              const height = (index + 1) * 2;

              return (
                <div
                  key={url}
                  className={`relative rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out w-1/${width} h-1/${height} ${alignment["multiple-photos"].margin}`}
                >
                  <div className="absolute w-full h-full flex items-center justify-center bg-black/50 hover:bg-transparent rounded-lg transition-all duration-500 ease-in-out"></div>
                  <Image
                    src={url}
                    className="rounded-lg object-cover"
                    alt=""
                    width={1000}
                    height={1000}
                    priority
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
