import SignInComponent from "@/components/auth/signInComponent";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { getUser } from "../actions";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignIn() {
  const { data } = await getUser();

  if (data) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen justify-center overflow-hidden bg-[#171823] font-montserrat">
      <div className="flex justify-center">
        <div className="max-w-xl w-full bg-white rounded-lg p-4">
          <div className="flex flex-col">
            <div className="flex flex-col text-center">
              <h2 className="text-2xl font-semibold text-slate-600">Sign In</h2>
              <p className="text-base font-light mt-1 text-gray-400">
                Masukan username untuk masuk ke akun kamu
              </p>
            </div>
            <SignInComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
