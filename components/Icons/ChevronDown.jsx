import { useThemeBoiiContext } from "../ThemeBoii";

const ChevronDown = () => {
  const {theme} = useThemeBoiiContext();

  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={theme.dropdown.chevronColor}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default ChevronDown;