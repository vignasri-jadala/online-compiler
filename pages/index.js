import Head from 'next/head'
import Model from "../components/Model";
import { ThemeBoiiContextProvider } from '../components/ThemeBoii';
import { EditorContextProvider } from "../components/Editor";
import { ConsoleContextProvider } from "../components/Console";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code & Run</title>
        <meta name="description" content="Online code editor, online compiler, online code runner." />
        <meta property="og:title" content="Code & Run" />
        <meta property="og:description" content="Online code editor, online compiler, online code runner." />
        <meta property="og:URL" content="https://code-n-run.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <ThemeBoiiContextProvider>
              <EditorContextProvider>
                <ConsoleContextProvider>
                  <Model />
                </ConsoleContextProvider>
              </EditorContextProvider>
          </ThemeBoiiContextProvider>
      </main>
    </div>
  );
};