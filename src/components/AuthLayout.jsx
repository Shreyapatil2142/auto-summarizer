"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import authHeroImage from "@/assets/authHeroImage.jpg";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    router.push("/chatbot");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f6f5f7]">
      <div className="bg-white rounded-lg shadow-2xl relative overflow-hidden w-[678px] max-w-6xl h-[500px]">
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center px-12 text-center transition-all duration-700 ease-in-out ${
            isSignIn
              ? "opacity-0 z-10 translate-x-full"
              : "opacity-100 z-20 translate-x-full"
          }`}
        >
          <h1 className="font-heading font-bold mb-6 text-3xl">Create Account</h1>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#eee] rounded-sm px-4 py-3 my-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eee] rounded-sm px-4 py-3 my-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eee] rounded-sm px-4 py-3 my-2 w-full"
          />

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignIn(true)}
                className="text-indigo-900 hover:text-indigo-500 font-medium transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
          <button
            onClick={handleAuth}
            className="rounded-full mt-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white font-bold tracking-wide px-12 py-3 uppercase border-2 border-indigo-900/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(37,99,235,0.6)] hover:text-white hover:border-indigo-900"
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center px-12 text-center transition-all duration-700 ease-in-out ${
            isSignIn
              ? "opacity-100 z-20 translate-x-0"
              : "opacity-0 z-10 -translate-x-full"
          }`}
        >
          <h1 className="font-bold font-heading mb-6 text-4xl">Sign in</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eee] px-4 py-3 my-2 rounded-sm w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eee] px-4 py-3 rounded-sm my-2 w-full"
          />
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignIn(false)}
                className="text-indigo-900 hover:text-indigo-500 font-medium transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
          <button
            onClick={handleAuth}
            className="rounded-full mt-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white font-bold tracking-wide px-12 py-3 uppercase border-2 border-indigo-900/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(37,99,235,0.6)] hover:text-white hover:border-indigo-900"
          >
            Sign In
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-30 ${
            isSignIn ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`text-indigo-900 relative left-[-100%] h-full w-[200%] transition-transform duration-700 ease-in-out ${
              isSignIn ? "translate-x-0" : "translate-x-1/2"
            }`}
          >
            {/* Left Overlay */}
            <div className="absolute flex flex-col items-center justify-center text-center top-0 h-full w-1/2">
           <div className="w-full h-full relative overflow-hidden">
           <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${authHeroImage.src})` }} // Note the .src
            />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                  <p className="text-lg opacity-90">
                    Continue your journey with us and unlock new possibilities
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* Right Overlay */}
         <div className="absolute right-0 flex flex-col items-center justify-center text-center top-0 h-full w-1/2">
          {/* Add h-full to this div 👇 */}
          <div className="w-full h-full relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${authHeroImage.src})` }} // Note the .src
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
                <p className="text-lg opacity-90">
                  Discover amazing features and connect with like-minded people
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}