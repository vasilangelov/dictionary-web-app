import { Header } from "@/components/Header";
import { Font } from "@/constants/font";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";
import { useState } from "react";

import appClasses from "./App.module.scss";

export const App: React.FC = () => {
  const [activeFont, setActiveFont] = useState(Font.SansSerif);
  const [activeTheme, setActiveTheme] = useTheme();

  return (
    <div
      className={classNames(
        appClasses["App"],
        appClasses[`App--${activeFont}`]
      )}
      data-theme={activeTheme}
    >
      <div className={appClasses["App__container"]}>
        <Header
          font={activeFont}
          theme={activeTheme}
          onFontSelect={setActiveFont}
          onThemeChange={setActiveTheme}
        />
      </div>
    </div>
  );
};
