// app/api/instagram/route.ts
import { NextResponse } from "next/server";
import { IgApiClient } from "instagram-private-api";

export async function GET() {
  const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env;

  const ig = new IgApiClient();
  ig.state.generateDevice(INSTAGRAM_USERNAME as string);

  try {
    await ig.simulate.preLoginFlow();
    const loggedInUser = await ig.account.login(
      INSTAGRAM_USERNAME as string,
      INSTAGRAM_PASSWORD as string
    );
    process.nextTick(async () => await ig.simulate.postLoginFlow());

    const userFeed = ig.feed.user(loggedInUser.pk);
    const posts = await userFeed.items();

    const formattedPosts = posts.map((post) => {
      const mediaUrls = new Set();

      if (post.carousel_media) {
        post.carousel_media.forEach((media) =>
          mediaUrls.add(media.image_versions2.candidates[0].url)
        );
      } else if (post.image_versions2) {
        mediaUrls.add(post.image_versions2.candidates[0].url);
      }

      return {
        id: post.pk,
        caption: post.caption?.text || "",
        media_type: post.media_type,
        media_urls: Array.from(mediaUrls),
        timestamp: post.taken_at,
      };
    });

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error("Failed to fetch Instagram data:", error);
    return NextResponse.json({ error: "Failed to fetch Instagram data" });
  }
}
