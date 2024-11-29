import { useThemeContext } from "@/components/dashboard/theme_providers";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useProfile = () => {
  const { data } = useThemeContext();
  const router = useRouter();

  const signOutButton = () => {
    Cookies.remove("access_token");
    router.push("/");
  };

  return { signOutButton, data };
};

export default useProfile;
