import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getUser } from "../actions";
import { ThemeContextProvider } from "@/components/dashboard/theme_providers";
import SidebarComponent from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: userData, error: userError } = await getUser();

  if (userError) {
    redirect("/signin");
  }

  return (
    <ThemeContextProvider user={userData.user}>
      <div className="flex flex-row overflow-hidden min-h-screen bg-[#171823] font-montserrat text-gray-100">
        <SidebarComponent />
        <main className="relative w-full flex-1 flex flex-col h-screen overflow-auto z-0">
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer className="mt-16 mx-auto pb-2 text-sm text-gray-400">
            Made with <span className="text-red-500">❤</span> by sukundev 2024
          </footer>
        </main>
      </div>
    </ThemeContextProvider>
  );
}
