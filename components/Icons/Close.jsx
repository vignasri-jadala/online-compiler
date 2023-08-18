import { useThemeBoiiContext } from "../ThemeBoii";

const Close = () => {
  const {theme} = useThemeBoiiContext();

  return (
    <span className="flex items-center justify-center text-lg">
      <svg
        className="h-6 w-6"
        style={{
          fill : "none",
          stroke: theme.settings.titlebar.closeIcon.color
        }}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
};

export default Close;