import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-blog-pink py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-blog-dark sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blog-magenta">Our Blog</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blog-gray sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button className="bg-blog-magenta hover:bg-blog-magenta/90 text-white">
              Start Reading
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};