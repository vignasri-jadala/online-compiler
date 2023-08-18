import { createContext, useContext, useState } from "react";
import {
  AyuMirage,
  Dracula,
  GruvboxDark,
  Icecoder,
  Material,
  MaterialDarker,
  MaterialOcean,
  MaterialPalenight,
  Monokai,
  Nord,
  Yonce
} from "./Themes";

const ThemeBoiiContext = createContext({});

const Themes = {
  AyuMirage,
  Dracula,
  GruvboxDark,
  Icecoder,
  Material,
  MaterialDarker,
  MaterialOcean,
  MaterialPalenight,
  Monokai,
  Nord,
  Yonce,
};
const defaultTheme = Themes.Material;

const getThemeNames = () => {
  let names = [];
  Object.values(Themes).forEach(theme => names.push(theme.name));
  return names;
};
const getEditorThemeNames = () => {
  let names = [];
  Object.values(Themes).forEach(theme => names.push(theme.editor));
  return names;
}
const getThemeByName = (themeName) => {
  if (themeName === "Ayu Dark" || themeName === "ayu-dark") return Themes.AyuDark;
  if (themeName === "Ayu Mirage" || themeName === "ayu-mirage") return Themes.AyuMirage;
  if (themeName === "Dracula" || themeName === "dracula") return Themes.Dracula;
  if (themeName === "Duotone Dark" || themeName === "duotone-dark") return Themes.DuotoneDark;
  if (themeName === "Duotone Light" || themeName === "duotone-light") return Themes.DuotoneLight;
  if (themeName === "Gruvbox Dark" || themeName === "gruvbox-dark") return Themes.GruvboxDark;
  if (themeName === "Hopscotch" || themeName === "hopscotch") return Themes.Hopscotch;
  if (themeName === "Icecoder" || themeName === "icecoder") return Themes.Icecoder;
  if (themeName === "Juejin" || themeName === "juejin") return Themes.Juejin;
  if (themeName === "Material" || themeName === "material") return Themes.Material;
  if (themeName === "Material Darker" || themeName === "material-darker") return Themes.MaterialDarker;
  if (themeName === "Material Ocean" || themeName === "material-ocean") return Themes.MaterialOcean;
  if (themeName === "Material Palenight" || themeName === "material-palenight") return Themes.MaterialPalenight;
  if (themeName === "Monokai" || themeName === "monokai") return Themes.Monokai;
  if (themeName === "Moxer" || themeName === "moxer") return Themes.Moxer;
  if (themeName === "Neo" || themeName === "neo") return Themes.Neo;
  if (themeName === "Nord" || themeName === "nord") return Themes.Nord;
  if (themeName === "Paraiso Dark" || themeName === "paraiso-dark") return Themes.ParaisoDark;
  if (themeName === "Yonce" || themeName === "yonce") return Themes.Yonce;
  throw new Error("Error: themeName not supported!!!");
};

const ThemeBoiiContextProvider = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const value = {theme, setTheme};

  return (
    <ThemeBoiiContext.Provider value={value}>
      {children}
    </ThemeBoiiContext.Provider>
  );
};

const ThemeBoiiContextConsumer = ({children}) => {
  return (
    <ThemeBoiiContext.Consumer>
      {(context) => {
        if (context === undefined) throw new Error("Error: useThemeBoiiContext() can only be used inside of ThemeBoiiContext.");
        return children(context);
      }}
    </ThemeBoiiContext.Consumer>
  );
};

const useThemeBoiiContext = () => {
  const context = useContext(ThemeBoiiContext);
  if (context === undefined) throw new Error("Error: useThemeBoiiContext() can only be used inside of ThemeBoiiContext.");
  return context;
};

export {
  ThemeBoiiContextProvider,
  ThemeBoiiContextConsumer,
  useThemeBoiiContext,
  Themes,
  getThemeNames,
  getEditorThemeNames,
  getThemeByName,
};