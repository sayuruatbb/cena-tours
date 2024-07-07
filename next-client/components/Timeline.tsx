import { NEXT_API } from "@/constants/api";
import React from "react";
import { Post } from "@/app/@types/instagram";
import PostItem from "./UI/PostItem";

const Timeline = async () => {
  const fetchInstagramPosts = async (): Promise<Array<Post>> => {
    try {
      const res = await fetch(`${NEXT_API}/api/instagram`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();

      return Array.isArray(data) ? (data as Post[]) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const posts = await fetchInstagramPosts();

  return (
    <section id="Gallery">
      <div className="max-w-4xl w-full flex flex-col items-center gap-10 my-10 mx-auto">
        <h2 className="text-[80px] font-semibold text-slate-800 mb-10">Timeline</h2>

        {posts.length > 0 ? (
          posts.map((post, index) => {
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
          })
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </section>
  );
};

export default Timeline;
