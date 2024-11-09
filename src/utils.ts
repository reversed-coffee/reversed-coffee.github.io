import { getCollection } from "astro:content";

export function slugify(title: string): string {
    return title.toLowerCase().match(/[a-z0-9']+/g)!.join("-").replace("'", "");
}

export async function getPosts() {
    const list = await getCollection("posts");
    const posts = list.filter(post => post.data.title !== undefined);
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
