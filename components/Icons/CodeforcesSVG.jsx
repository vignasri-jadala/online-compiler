import { useState, useEffect } from "react";
import { useThemeBoiiContext } from "../ThemeBoii";

const CodeforcesSVG = ({onClick}) => {
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
          stroke: "none"
        }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <rect y="5" width="5" height="19" rx="1" fill={iconStroke}/>
        <rect x="9" width="6" height="24" rx="1" fill={iconStroke}/>
        <rect x="19" y="10" width="5" height="14" rx="1" fill={iconStroke}/>
      </svg>
    </span>
  );
};

export default CodeforcesSVG;