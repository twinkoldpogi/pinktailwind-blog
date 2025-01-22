import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for blog posts
const initialPosts = [
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
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    category: "",
    imageUrl: "",
  });
  const [editPost, setEditPost] = useState({
    title: "",
    excerpt: "",
    category: "",
    imageUrl: "",
  });

  const handleLogout = () => {
    navigate("/");
  };

  const handleCreatePost = () => {
    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setPosts([{ ...newPost, date }, ...posts]);
    setNewPost({ title: "", excerpt: "", category: "", imageUrl: "" });
  };

  const handleEditPost = () => {
    if (selectedPost !== null) {
      const updatedPosts = [...posts];
      updatedPosts[selectedPost] = { ...editPost, date: posts[selectedPost].date };
      setPosts(updatedPosts);
      setSelectedPost(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blog-magenta">BlogSpot</h1>
          <div className="space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blog-magenta hover:bg-blog-magenta/90">Create Post</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Post</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      value={newPost.imageUrl}
                      onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleCreatePost} className="w-full bg-blog-magenta hover:bg-blog-magenta/90">
                    Create Post
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button onClick={handleLogout} variant="outline" className="border-blog-magenta text-blog-magenta hover:bg-blog-pink">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="relative">
              <BlogCard {...post} />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="absolute top-2 right-2 bg-blog-magenta hover:bg-blog-magenta/90"
                    onClick={() => {
                      setSelectedPost(index);
                      setEditPost(post);
                    }}
                  >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Post</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="edit-title">Title</Label>
                      <Input
                        id="edit-title"
                        value={editPost.title}
                        onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-excerpt">Excerpt</Label>
                      <Textarea
                        id="edit-excerpt"
                        value={editPost.excerpt}
                        onChange={(e) => setEditPost({ ...editPost, excerpt: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-category">Category</Label>
                      <Input
                        id="edit-category"
                        value={editPost.category}
                        onChange={(e) => setEditPost({ ...editPost, category: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-imageUrl">Image URL</Label>
                      <Input
                        id="edit-imageUrl"
                        value={editPost.imageUrl}
                        onChange={(e) => setEditPost({ ...editPost, imageUrl: e.target.value })}
                      />
                    </div>
                    <Button onClick={handleEditPost} className="w-full bg-blog-magenta hover:bg-blog-magenta/90">
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;