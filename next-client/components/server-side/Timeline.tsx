import React from "react";
import { Post } from "@/app/@types/instagram";
import { PieChartIcon } from "@radix-ui/react-icons";
import Posts from "../client-side/Posts";

const Timeline = async () => {
  const nextApi = process.env.NEXT_PUBLIC_API_URL;

  const fetchInstagramPosts = async (): Promise<Post[] | undefined> => {
    try {
      const res = await fetch(`${nextApi}/api/instagram`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      return Array.isArray(data) ? (data as Post[]) : [];
    } catch (error) {
      console.error(error);
    }
  };

  const posts = await fetchInstagramPosts();

  return (
    <section id="Gallery">
      <div className="max-w-4xl w-full flex flex-col items-center my-10 mx-auto">
        <h2 className="text-[80px] font-semibold text-slate-800 mb-10">
          Timeline
        </h2>

        {posts && posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <div className="gap-2 flex items-center">
            <h2>Loading</h2>
            <PieChartIcon className="animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
