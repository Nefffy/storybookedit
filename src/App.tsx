import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropData } from "./index";
import { ThemeProvider } from "styled-components";
import {
  DesignSystemBase,
  theme as theme1,
  theme2,
} from "./stories/themes/theme_V1";
import "./App.css";

//themes:
import { useTheme } from "./customhooks/useTheme";

import Layout from "./pages/Layout";
import Overview from "./pages/Overview";
import Intro from "./pages/Intro";
import Content from "./stories/ui-components/composed/Content";




function App(props: PropData) {
  const header = props.header;
  const catData = props.data.cat;
  const labels = props.data.reg;

  //wrt. theming:
  setToLS("default", theme1);
  setToLS("autumn", theme2);
  //setToLS("vio", theme3);
  
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

 
  useEffect(() => {
    setSelectedTheme(theme);
  },[themeLoaded,theme]);

  const {setMode} = useTheme();

  //toggle between all available themes
  // no rerender?
  const themeSwitcher = () => {

    let mode = getFromLS('default');
    let localTheme = getFromLS('theme');
    //quick and dirty:
    if (!localTheme) localTheme = getFromLS('default');
    if(mode.coloring.primary[100] === localTheme.coloring.primary[100]){
      mode = getFromLS('autumn');
    }
    //synchronize with localStorage
    setMode(mode);

  
    //to force a rerender:
    setSelectedTheme(mode);
  };



  //simple routing
  //for more information see https://reactrouter.com/en/main/start/tutorial
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme} >
          <Routes>
            <Route element={<Layout header={header} ts={themeSwitcher}/>}>
              <Route index element={<Intro />} />
              <Route
                path="/overview"
                element={<Overview cats={catData} labels={labels} />}
              />
              <Route path="/content/:id" element={<Content data={catData} />} />
            </Route>
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;

//Theme-Switching in React:
// localStorage
export const setToLS = (key: string, value: DesignSystemBase) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key);
  if(value !== 'undefined' && value !== null)
  {
    return JSON.parse(value);
  }


};