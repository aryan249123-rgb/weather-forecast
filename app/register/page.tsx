"use client"

import { useRouter } from "next/navigation";

export default function Register(){
    const router =useRouter()
    return(<div className="min-h-screen flex text-black items-center justify-center  from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome 
        </h2>
        <p className="text-center text-gray-500 mb-6">Register to your account</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            onClick={() => {router.push("/")}}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          have an account?
          <span onClick={()=>{router.push('/')}} className="text-indigo-600 font-semibold cursor-pointer hover:underline ml-1">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}