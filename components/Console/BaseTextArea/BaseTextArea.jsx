import { useThemeBoiiContext } from "../../ThemeBoii";

const BaseTextArea = (props) => {
  const {theme} = useThemeBoiiContext();

  return (
    <div className="flex-1 w-auto h-auto px-3 py-2 BaseTextArea">
      <textarea
        className="w-full h-full px-3 py-2 rounded-lg resize-none textarea focus:outline-none BaseTextArea-Text"
        style={{
          backgroundColor: theme.input.backgroundColor,
          color: theme.input.color
        }}
        readOnly={props.readOnly ? true : false}
        value={props.value}
        onChange={!props.readOnly ? props.onChange : null}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default BaseTextArea;