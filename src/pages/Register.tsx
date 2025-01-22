import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-blog-pink flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blog-dark mb-6 text-center">Create Account</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          <Button className="w-full bg-blog-magenta hover:bg-blog-magenta/90">
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-blog-gray">
          Already have an account?{" "}
          <Link to="/login" className="text-blog-magenta hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;