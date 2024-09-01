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

export const App: React.FC = () => {
  const [activeFont, setActiveFont] = useState(Font.SansSerif);
  const [activeTheme, setActiveTheme] = useTheme();
  const [word, setWord] = useState<string>();

  const debouncedWord = useDebouncedValue(word?.trim());

  const { data } = useQuery({
    queryKey: [QueryKey.WordInfo, debouncedWord],
    enabled: !!debouncedWord,
    queryFn: async ({ signal }) =>
      getWordInfo({
        word: debouncedWord ?? "",
        signal,
      }),
  });

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

        <div>{JSON.stringify(data)}</div>
      </div>
    </div>
  );
};
