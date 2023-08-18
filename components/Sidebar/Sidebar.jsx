import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useEditorContext } from '../Editor';
import { useConsoleContext } from '../Console';
import { useThemeBoiiContext } from '../ThemeBoii';
import { getAPILanguageFromEditorMode, getRapidApiLanguageChoiceFromEditorMode } from '../Editor';
import { Modal, SidebarIcon } from "../AnimatedComponents";
import { Play, SettingsSVG, CodeforcesSVG, Github } from "../Icons";
import Settings from '../Settings';
// import CodeforcesMode from '../CodeforcesMode';

const SideBar = () => {
  const {
    code, mode,
    settingsVisible, setSettingsVisible,
    // codeforcesModeVisible, setCodeforcesModeVisible
  } = useEditorContext();
  const { input, setOutput, setErrors } = useConsoleContext();
  const { theme } = useThemeBoiiContext();
  const [versions, setVersions] = useState({ c: "10.2.0", cpp: "10.2.0", java: "15.0.2", py: "3.10.0", rs: "1.65.0" });

  useEffect(() => fetchLanguageRuntimeVersions(), []);

  const fetchLanguageRuntimeVersions = () => {
    const fetchedVersions = { c: "10.2.0", cpp: "10.2.0", java: "15.0.2", py: "3.10.0", rs: "1.65.0" };
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    };
    fetch("https://emkc.org/api/v2/piston/runtimes", options)
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach((runtime) => {
            if (runtime.language === "c") fetchedVersions.c = runtime.version;
            if (runtime.language === "c++") fetchedVersions.cpp = runtime.version;
            if (runtime.language === "java") fetchedVersions.java = runtime.version;
            if (runtime.language === "python") fetchedVersions.py = runtime.version;
            if (runtime.language === "rust") fetchedVersions.rs = runtime.version;
          });
          setVersions(fetchedVersions);
        },
        (error) => {
          console.log("Error while fetching language runtime versions: ", error);
        });
  };

  
  const runCodeWithPiston = () => {
    setOutput("fetching");
    setErrors("fetching");
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        language: getAPILanguageFromEditorMode(mode),
        version: versions[getAPILanguageFromEditorMode(mode)],
        files: [
          {
            name: "code.cpp",
            content: code
          }
        ],
        stdin: input,
        args: [],
        compile_timeout: 10000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
      })
    };
    fetch("https://emkc.org/api/v2/piston/execute", options)
      .then(res => res.json())
      .then(
        (result) => {
          setOutput(result.run.stdout);
          if (result.run.stderr === "") {
            setErrors("No Errors 😎");
          }
          else {
            if (result.run.stderr.search("No such file or directory") !== -1)
              setErrors("Compilation Error 😕\n");
            else
              setErrors(result.run.stderr);
            // if (result.output.error.signal === "SIGTERM") {
            //   setErrors("TLE (Time Limit: 2s) 😕\nCheck for any infinite loops\nOr try some better algorithm 😅");
            // }
            // else if (result.output.error.signal === null) {
            //   setErrors("Compilation Error: 😕\n" + result.output.stderr);
            // }
            // else {
            //   setErrors("Runtime Error: 🥲\n" + result.output.error.signal);
            // }
          }
        },
        (error) => {
          console.log("Error while fetching: ", error);
        });
  }


  /**
   * runCode() will no longer work because, the API stopped working as Heroku removed free tier.
   */
  // const runcode = () => {
  //   setOutput("fetching");
  //   setErrors("fetching");
  //   const options = {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       code: code,
  //       input: input,
  //       language: getAPILanguageFromEditorMode(mode)
  //     }),
  //   };
  //   fetch("https://code-execution-engine.herokuapp.com/run", options)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setOutput(result.output.stdout);
  //         if (result.output.error === null) {
  //           setErrors("No Errors 😎");
  //         }
  //         else {
  //           if (result.output.error.signal === "SIGTERM") {
  //             setErrors("TLE (Time Limit: 2s) 😕\nCheck for any infinite loops\nOr try some better algorithm 😅");
  //           }
  //           else if (result.output.error.signal === null) {
  //             setErrors("Compilation Error: 😕\n" + result.output.stderr);
  //           }
  //           else {
  //             setErrors("Runtime Error: 🥲\n" + result.output.error.signal);
  //           }
  //         }
  //       },
  //       (error) => {
  //         setOutput("");
  //         setErrors("Code Execution API error or maybe network error 😕");
  //         console.log("Error while fetching: ", error);
  //       });
  // }

  const runCodeUsingRapidAPI = () => {
    setOutput("fetching");
    setErrors("fetching");
    fetch("https://code-compiler.p.rapidapi.com/v2", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
      },
      body: new URLSearchParams({
        'LanguageChoice': getRapidApiLanguageChoiceFromEditorMode(mode),
        'Program': code,
        'Input': input
      }).toString()
      // body: JSON.stringify({
      //   LanguageChoice: getRapidApiLanguageChoiceFromEditorMode(mode),
      //   Program: code,
      //   Input: input
      // })
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Errors === null) {
            setOutput(result.Result);
            setErrors("No Errors 😎");
          }
          else {
            setOutput("");
            setErrors(result.Errors);
          }
        },
        (error) => {
          setOutput("");
          setErrors("Code Execution API error or maybe network error 😕");
          console.log("Error while fetching: ", error);
        }
      );
  };


  /**
   * handleRun() will no longer work because, the API stopped working.
   */
  // const handleRun = async (e) => {
  //   e.preventDefault();
  //   fetch("https://edit-and-run.herokuapp.com/execute", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       code: code,
  //       language: mode === "text/x-c++src" ? "cpp" : "py",
  //       input: input,
  //     })
  //   })
  //     .then((res) => { return res.json() })
  //     .then((body) => {
  //       if (body.error == null && body.output.slice(0, 12) != "./Playground") {
  //         console.log("body: ", body);
  //         setOutput(body.output);
  //         setErrors("No Errors 😎");
  //       }
  //       else {
  //         setErrors(body.output);
  //       }
  //     })
  //     .catch((error) => {
  //       setErrors(error);
  //     });
  // };

  return (
    <div
      className="flex-1 flex flex-col items-center rounded-xl Sidebar pt-2"
      style={{
        backgroundColor: theme.sidebar.backgroundColor,
      }}
    >
      {/* <a href="#">
        <Logo />
      </a> */}

      {/* Run */}
      <SidebarIcon
        // onClick={handleRun}
        // onClick={runcode}
        onClick={runCodeWithPiston}
        // onClick={runCodeUsingRapidAPI}
        hoverStrokeColor={theme.sidebarIcon.playIcon.hover.color}
      >
        <Play />
      </SidebarIcon>

      {/* Settings */}
      <SidebarIcon
        onClick={() => setSettingsVisible(true)}
        hoverStrokeColor={theme.sidebarIcon.settingsIcon.hover.color}
      >
        <SettingsSVG />
      </SidebarIcon>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {
          settingsVisible && <Modal close={() => setSettingsVisible(false)}>
            <Settings />
          </Modal>
        }
      </AnimatePresence>

      {/* Github */}
      <SidebarIcon
        onClick={() => window.open("https://github.com/vignasri-jadala/code-n-run", "_blank")}
        hoverStrokeColor={theme.sidebarIcon.playIcon.hover.color}
      >
        <Github />
      </SidebarIcon>

      {/* Codeforces Mode
      <SidebarIcon
        onClick={() => setCodeforcesModeVisible(true)}
        hoverStrokeColor={theme.sidebarIcon.settingsIcon.hover.color}
      >
        <CodeforcesSVG />
      </SidebarIcon>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {
          codeforcesModeVisible && <Modal close={() => setCodeforcesModeVisible(false)}>
            <CodeforcesMode />
          </Modal>
        }
      </AnimatePresence> */}
    </div>
  )
}

export default SideBar;