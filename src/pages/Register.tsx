import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
        phone,
      });
      alert(response.data);
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };

  return (
    <div className="min-h-screen bg-blog-pink flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blog-dark mb-6 text-center">
          Create Account
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blog-magenta hover:bg-blog-magenta/90"
          >
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
