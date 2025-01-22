import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-blog-pink flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blog-dark mb-6 text-center">Welcome Back</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full bg-blog-magenta hover:bg-blog-magenta/90">
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-blog-gray">
          Don't have an account?{" "}
          <Link to="/register" className="text-blog-magenta hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;