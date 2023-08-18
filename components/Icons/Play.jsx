import { useState, useEffect } from "react";
import { useThemeBoiiContext } from "../ThemeBoii";

const Play = (props) => {
  const {theme} = useThemeBoiiContext();
  const [iconStoke, setIconStroke] = useState(theme.sidebarIcon.playIcon.color);

  useEffect(() => {
    setIconStroke(theme.sidebarIcon.settingsIcon.color);
  }, [theme]);

  const handleMouseOver = () => setIconStroke(theme.sidebarIcon.playIcon.hover.color);
  const handleMouseLeave = () => setIconStroke(theme.sidebarIcon.playIcon.color);

  return (
    <span
      className="flex items-center justify-center text-lg text-gray-400"
      onClick={props.onClick}
    >
      <svg
        style={{
          fill: "none",
          stroke: iconStoke
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z" />
      </svg>
    </span>
  )
}

export default Play;