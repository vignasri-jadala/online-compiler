import dynamic from "next/dynamic";
import SplitPane from "react-split-pane";
import { useThemeBoiiContext } from "../ThemeBoii";
import SideBar from "../Sidebar/Sidebar.jsx ";
import { Input, Output, Error } from "../Console";
import ScreenSizeNotSupported from "../ScreenSizeNotSupported";

const Editor = dynamic(
  import('../Editor/Editor'),
  { ssr: false }
);

const Model = () => {
  const {theme} = useThemeBoiiContext();

  return (
    <>
      <ScreenSizeNotSupported />
      <SplitPane className="Model" style={{backgroundColor: theme.backgroundColor}} split={"vertical"} minSize={90} allowResize={false}>
        <div className="flex flex-col w-full h-full pt-3 pb-3 pl-3 pr-1 Sidebar">
          <div className="flex flex-col flex-1 rounded-xl bg-purple-800">
            {/* Place components only inside this !!! */}
            <SideBar />
          </div>
        </div>
        <SplitPane split={"vertical"} defaultSize={1000} minSize={500}>
          <div className="flex flex-col w-full h-full pt-3 pb-3 pl-1 pr-1 Editor">
            <div className="flex flex-col flex-1 bg-purple-800 rounded-xl">
              {/* Place components only inside this !!! */}
              <Editor />
            </div>
          </div>
          <div className="Console">
            <SplitPane split={"horizontal"} defaultSize={300} minSize={200}>
              <div className="flex flex-col w-full h-full pt-3 pb-1 pl-1 pr-3">
                <div className="flex-1 bg-purple-800 rounded-xl">
                  {/* Place components only inside this !!! */}
                  <Input />
                </div>
              </div>
              <SplitPane split={"horizontal"} defaultSize={300} minSize={200}>
                <div className="flex flex-col w-full h-full pt-1 pb-1 pl-1 pr-3">
                  <div className="flex-1 bg-purple-800 rounded-xl">
                    {/* Place components only inside this !!! */}
                    <Output />
                  </div>
                </div>
                <div className="flex flex-col w-full h-full pt-1 pb-3 pl-1 pr-3">
                  <div className="flex-1 bg-purple-800 rounded-xl">
                    {/* Place components only inside this !!! */}
                    <Error />
                  </div>
                </div>
              </SplitPane>
            </SplitPane>
          </div>
        </SplitPane>
      </SplitPane>
    </>
  )
}

export default Model;