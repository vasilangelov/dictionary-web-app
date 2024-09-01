import { Header } from "@/components/Header";
import { WordSearch } from "@/components/WordSearch";
import { Font } from "@/constants/font";
import { QueryKey } from "@/constants/queryKeys";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useTheme } from "@/hooks/useTheme";
import { getWordInfo } from "@/services/word";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { useState } from "react";

import appClasses from "./App.module.scss";
import { WordInfo } from "./components/WordInfo";

export const App: React.FC = () => {
  const [activeFont, setActiveFont] = useState(Font.SansSerif);
  const [activeTheme, setActiveTheme] = useTheme();
  const [word, setWord] = useState<string>();

  const debouncedWord = useDebouncedValue(word?.trim());

  const { isSuccess: hasWordInfoLoaded, data: wordInfo } = useQuery({
    queryKey: [QueryKey.WordInfo, debouncedWord],
    enabled: !!debouncedWord,
    queryFn: ({ signal }) =>
      getWordInfo({
        word: debouncedWord ?? "",
        signal,
      }),
  });

  const hasWordInfo = hasWordInfoLoaded && wordInfo !== null;

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

        <WordSearch word={word} onChange={setWord} />

        <main>{hasWordInfo && <WordInfo wordInfo={wordInfo} />}</main>
      </div>
    </div>
  );
};
