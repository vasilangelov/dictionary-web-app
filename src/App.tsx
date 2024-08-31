import { Header } from "@/components/Header";
import { Font } from "@/constants/font";
import { useState } from "react";

import appClasses from "./App.module.scss";
import classNames from "classnames";

export const App: React.FC = () => {
  const [activeFont, setActiveFont] = useState(Font.SansSerif);

  return (
    <div
      className={classNames(
        appClasses["App"],
        appClasses[`App--${activeFont}`]
      )}
    >
      <Header font={activeFont} onFontSelect={setActiveFont} />
    </div>
  );
};
