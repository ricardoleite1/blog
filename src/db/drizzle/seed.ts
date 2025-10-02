import { drizzleDb } from "./index";
import { postsTable } from "./schemas";
import { JsonPostRepository } from "@/repositories/post/json-post-repository";

(async () => {
  const jsonRepository = new JsonPostRepository();
  const posts = await jsonRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
  } catch (err) {
    console.log("Ocorreu um erro...");
    console.log(err);
  }
})();
