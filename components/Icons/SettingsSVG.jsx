import { useState, useEffect } from "react";
import { useThemeBoiiContext } from "../ThemeBoii";

const SettingsSVG = ({onClick}) => {
  const {theme} = useThemeBoiiContext();
  const [iconStroke, setIconStroke] = useState(theme.sidebarIcon.settingsIcon.color);

  useEffect(() => {
    setIconStroke(theme.sidebarIcon.settingsIcon.color);
  }, [theme]);

  const handleMouseOver = () => setIconStroke(theme.sidebarIcon.settingsIcon.hover.color);
  const handleMouseLeave = () => setIconStroke(theme.sidebarIcon.settingsIcon.color);

  return (
    <span
      className="flex items-center justify-center"
      onClick={onClick}
    >
      <svg
        style={{
          fill: "none",
          stroke: iconStroke
        }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </span>
  );
};

export default SettingsSVG;