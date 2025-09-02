import { postRepository } from "@/repositories/post/json-post-repopsitory";

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
