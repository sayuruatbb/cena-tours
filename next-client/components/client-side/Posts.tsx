"use client";

import { Post } from "@/app/@types/instagram";
import React, { useState } from "react";
import PostItem from "./PostItem";

interface IPostsProps {
  posts: Post[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(10);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <div className="flex flex-col w-full gap-20 my-20">
      {posts.slice(0, visiblePosts).map((post, index) => {
        const isLast = posts.length - 1 === index;
        const isFirst = index === 0;
        const hasMultiplePhotos = post.media_urls.length > 1;
        return (
          <PostItem
            index={index}
            key={post.id}
            post={post}
            isFirst={isFirst}
            isLast={isLast}
            hasMultiplePhotos={hasMultiplePhotos}
          />
        );
      })}
      {visiblePosts < posts.length && (
        <button
          onClick={loadMorePosts}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Posts;
