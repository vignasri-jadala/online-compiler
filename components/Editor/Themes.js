const EditorThemes = [
    "ayu-dark",
    "ayu-mirage",
    "dracula",
    // "duotone-dark",
    // "duotone-light",
    "gruvbox-dark",
    "hopscotch",
    "icecoder",
    "juejin",
    "material",
    "material-darker",
    "material-ocean",
    "material-palenight",
    "monokai",
    "moxer",
    "neo",
    "nord",
    "paraiso-dark",
    "yonce",
  ];
  
  const genItemNames = () => {
    const items = [];
    EditorThemes.forEach(theme => items.push(getItemName(theme)));
    return items;
  }
  
  const getItemName = (editorTheme) => {
    return capitalize(removeHifen(editorTheme));
  };
  
  const removeHifen = (editorTheme) => {
    let ans = "";
    for (let i = 0; i < editorTheme.length; i++) {
      if (editorTheme[i] === "-") ans += " ";
      else ans += editorTheme[i];
    }
    return ans;
  };
  
  const capitalize = (removedHifen) => {
    let hehe = removedHifen.charAt(0).toUpperCase() + removedHifen.slice(1);
    let ans = "";
    for (let i = 1; i < removedHifen.length; i++) {
      if (removedHifen[i] === " ") {
        ans = hehe.slice(0, i) + " " + hehe.charAt(i + 1).toUpperCase() + hehe.slice(i + 2);
      }
    }
    return ans === "" ? hehe : ans;
  };
  
  export { EditorThemes, genItemNames, getItemName };