import { useState } from "react";
import { FaGoogle, FaGithub, FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", form);
      // Handle login logic here
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    // Integrate Google OAuth logic here
  };

  const handleGithubLogin = () => {
    console.log("GitHub login initiated");
    // Integrate GitHub OAuth logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        <div className="flex flex-col gap-3">
          <button onClick={handleGoogleLogin} className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded w-full">
            <FaGoogle /> Continue with Google
          </button>
          <button onClick={handleGithubLogin} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded w-full">
            <FaGithub /> Continue with Github
          </button>
        </div>
        <p className="text-center my-4 text-sm">Or continue with</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <div className="flex items-center border border-gray-700 p-2 rounded">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent outline-none flex-1"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center border border-gray-700 p-2 rounded">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="bg-transparent outline-none flex-1"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button type="submit" className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded">
            Login →
          </button>
        </form>
        <p className="text-xs text-center mt-3">
          By logging in, you agree to our <a href="#" className="text-purple-400">Terms of Service</a> and <a href="#" className="text-purple-400">Privacy Policy</a>
        </p>
        <p className="text-center mt-3 text-sm">
          Don't have an account? <a href="#" className="text-pink-400">Sign up</a>
        </p>
      </div>
    </div>
  );
}
