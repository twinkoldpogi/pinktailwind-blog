import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const BlogCard = ({ title, excerpt, date, category, imageUrl }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-center">
          <Badge variant="secondary" className="bg-blog-pink text-blog-magenta">
            {category}
          </Badge>
          <span className="text-sm text-blog-gray">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-blog-dark hover:text-blog-magenta transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-blog-gray line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
};