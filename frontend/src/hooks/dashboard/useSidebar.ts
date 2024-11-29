import { useThemeContext } from "@/components/dashboard/theme_providers";
import { usePathname } from "next/navigation";
import { useState } from "react";

const useSidebar = () => {
  const pathname = usePathname();
  const { data, handleDataChange } = useThemeContext();
  const [showProfileButton, setShowProfileButton] = useState(false);

  const hideMenu = () => {
    handleDataChange({ sidebar: !data.sidebar });
  };

  return { pathname, data, showProfileButton, hideMenu, setShowProfileButton };
};

export default useSidebar;
