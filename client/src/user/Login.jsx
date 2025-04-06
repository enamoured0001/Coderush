import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [userRole, setUserRole] = useState("challenger");

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setIsVerificationSent(false);
  };

  const toggleForgotPassword = () => setShowForgot(!showForgot);

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to " + forgotEmail);
    setForgotEmail("");
    setShowForgot(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsVerificationSent(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0f111a] text-white font-['Fira_Code','monospace'] px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-[#22c55e] to-[#4ade80] opacity-20 rounded-full blur-3xl animate-pulse" style={{ top: "-20%", left: "-10%" }}></div>
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-tr from-[#22c55e] to-[#4ade80] opacity-20 rounded-full blur-2xl animate-pulse" style={{ bottom: "-15%", right: "-10%" }}></div>

      <div className="w-full max-w-md bg-[#1a1d2c] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#2c2f45] relative z-10 backdrop-blur-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#22c55e] mb-6 drop-shadow-md">
          {isSignup ? (isVerificationSent ? "Verify Your Email" : "Sign Up") : showForgot ? "Reset Password" : "CodeRush Login"}
        </h2>

        {showForgot ? (
          <form onSubmit={handleForgotSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#2b2e44] text-white border border-[#3b3e55] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="you@coderush.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#22c55e] hover:bg-[#4ade80] text-white font-semibold rounded-md shadow-md transition duration-300"
            >
              Send Reset Link
            </button>
            <p className="text-sm text-center text-gray-500">
              Remembered your password? {" "}
              <button
                type="button"
                onClick={toggleForgotPassword}
                className="text-[#22c55e] hover:underline focus:outline-none"
              >
                Go back to Login
              </button>
            </p>
          </form>
        ) : isSignup && isVerificationSent ? (
          <div className="text-center space-y-6">
            <p className="text-gray-300">A verification link has been sent to your email.</p>
            <p className="text-sm text-gray-500">Please check your inbox and verify your account to continue.</p>
            <button
              className="text-[#22c55e] hover:underline focus:outline-none"
              onClick={() => setIsSignup(false)}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form
            onSubmit={isSignup ? handleSignupSubmit : (e) => e.preventDefault()}
            className="space-y-5"
          >
            {isSignup && (
              <>
                <div>
                  <label className="block mb-1 text-sm text-gray-400">Username</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-[#2b2e44] text-white border border-[#3b3e55] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-400">I want to:</label>
                  <select
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-[#2b2e44] text-white border border-[#3b3e55] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                  >
                    <option value="challenger">Do Challenges</option>
                    <option value="creator">Post Challenges</option>
                  </select>
                </div>
              </>
            )}
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-[#2b2e44] text-white border border-[#3b3e55] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="you@coderush.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-[#2b2e44] text-white border border-[#3b3e55] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="••••••••"
                required
              />
            </div>

            {!isSignup && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={toggleForgotPassword}
                  className="text-sm text-[#22c55e] hover:underline focus:outline-none"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-[#22c55e] hover:bg-[#4ade80] text-white font-semibold rounded-md shadow-md transition duration-300"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>
        )}

        {!showForgot && !isVerificationSent && (
          <p className="text-sm text-center text-gray-500 mt-6">
            {isSignup ? "Already have an account?" : "Don’t have an account?"} {" "}
            <button
              onClick={toggleForm}
              className="text-[#22c55e] hover:underline focus:outline-none"
            >
              {isSignup ? "Login" : "Sign up"}
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
