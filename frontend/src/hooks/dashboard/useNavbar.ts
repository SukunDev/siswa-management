import { useThemeContext } from "@/components/dashboard/theme_providers";
import { useState } from "react";

const useNavbar = () => {
  const { data, handleDataChange } = useThemeContext();
  const [showProfileButton, setShowProfileButton] = useState(false);

  const menuButton = () => {
    handleDataChange({ sidebar: !data.sidebar });
  };
  const profileButton = () => {
    setShowProfileButton(!showProfileButton);
  };
  return { menuButton, showProfileButton, profileButton, data };
};

export default useNavbar;
