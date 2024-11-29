"use client";

import useSignIn from "@/hooks/auth/useSignIn";
import React from "react";

import { PiSpinnerGap } from "react-icons/pi";

export default function SignInComponent() {
  const { handleInput, handleSubmit, formData, isLoading, errorMessage } =
    useSignIn();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-4">
      <div className="flex flex-col">
        <label
          className="text-lg font-light capitalize text-slate-500"
          htmlFor="username"
        >
          username
        </label>
        <input
          className="px-4 py-2 rounded-md outline-none bg-gray-50 hover:bg-gray-100 focus:bg-gray-50"
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col mt-4">
        <label
          className="text-lg font-light capitalize text-slate-500"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="px-4 py-2 rounded-md outline-none bg-gray-50 hover:bg-gray-100 focus:bg-gray-50"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInput}
          required
        />
      </div>
      <button
        type="submit"
        className="py-2 mt-6 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 active:scale-105 disabled:opacity-70 disabled:hover:bg-green-500"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <PiSpinnerGap className="inline text-lg animate-spin" /> Loading
          </>
        ) : (
          "Login"
        )}
      </button>
      {errorMessage ? (
        <div className="flex justify-center text-red-500 mt-4">
          {errorMessage}
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
