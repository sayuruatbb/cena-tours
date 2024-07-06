"use client";

import { Post } from "@/app/@types/instagram";
import { AlignmentStyle } from "@/app/@types/post";
import Image from "next/image";
import React from "react";

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
          "box-border": "border-t-[1px] border-r-[1px]",
          "box-position": "left-5 bottom-0",
          "box-radius": "rounded-tr-xl",
          "multiple-photos": {
            margin: "ml-5",
            position: "justify-start",
          },
        }
      : {
          "flex-direction": "flex-row-reverse",
          "box-border": "border-t-[1px] border-l-[1px]",
          "box-position": "right-5 bottom-0",
          "box-radius": "rounded-tl-xl",
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
        className="relative flex w-1/2 hover:scale-[101%] transition-all duration-300 ease-in-out"
      >
        <div className="absolute w-full h-full flex items-center justify-center bg-black/50 hover:bg-transparent rounded-lg transition-all duration-1000 ease-in-out">
          <h2 className="text-xl font-semibold text-white animate-pulse">
            {post.caption}
          </h2>
        </div>
        <Image
          className="rounded-lg w-full h-full"
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
        {!isLast && !hasMultiplePhotos && (
          <div
            className={`${alignment["box-border"]} ${alignment["box-position"]} ${alignment["box-radius"]} h-1/2 w-1/2 absolute border-black/20 animate-pulse border-dashed`}
          ></div>
        )}

        {hasMultiplePhotos &&
          post.media_urls.slice(1, 3).map((url, index) => {
            const width = (index + 1) * 2;
            const height = (index + 1) * 2;

            return (
              <div
                className={`relative rounded-lg hover:scale-[101%] transition-all duration-300 ease-in-out w-1/${width} h-1/${height} ${alignment["multiple-photos"].margin}`}
              >
                <div className="absolute w-full h-full flex items-center justify-center bg-black/50 hover:bg-transparent rounded-lg transition-all duration-1000 ease-in-out"></div>
                <Image
                  src={url}
                  className="rounded-lg"
                  alt=""
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            );
          })}
      </div>

      {/* {isPostExpanded && post.media_urls.length > 1 && (
        <div
          className="fixed flex flex-wrap bg-white border p-2 rounded-lg"
          style={{ left: position.x + 10, top: position.y + 10 }}
        >
          {post.media_urls.slice(1).map((url) => (
            <div key={url} className="p-1">
              <Image
                className=""
                src={url}
                alt=""
                width={100}
                height={100}
                priority
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default PostItem;
