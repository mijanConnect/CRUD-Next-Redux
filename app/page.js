import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">CRUD with Redux & Next.js</h1>
      <PostForm />
      <PostList />
      </div>
    </main>
  );
}
