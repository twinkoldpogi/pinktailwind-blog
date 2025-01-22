import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blog-magenta">BlogSpot</h1>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-blog-magenta text-blog-magenta hover:bg-blog-pink">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blog-magenta hover:bg-blog-magenta/90">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-blog-dark mb-6">
            Share Your Stories with the World
          </h1>
          <p className="text-xl text-blog-gray mb-8 max-w-2xl mx-auto">
            Create, share, and discover amazing blog posts. Join our community of writers
            and readers today.
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <Button className="bg-blog-magenta hover:bg-blog-magenta/90 text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" className="border-blog-magenta text-blog-magenta hover:bg-blog-pink text-lg px-8 py-6">
                Read Blog
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blog-magenta mb-4">1M+</div>
            <p className="text-blog-gray">Active Readers</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blog-magenta mb-4">50K+</div>
            <p className="text-blog-gray">Published Stories</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blog-magenta mb-4">100K+</div>
            <p className="text-blog-gray">Writers</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;