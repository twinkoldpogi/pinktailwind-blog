import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";

// Mock data - in a real app, this would come from Supabase
const blogPosts = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer with this comprehensive guide.",
    date: "Mar 1, 2024",
    category: "Programming",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Design Principles Every Developer Should Know",
    excerpt: "Explore essential design principles that can help you create better user interfaces and experiences.",
    date: "Feb 28, 2024",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Discover how AI is shaping the future of technology and its impact on various industries.",
    date: "Feb 27, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-blog-dark mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;