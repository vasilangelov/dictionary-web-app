import { Header } from "@/components/Header";
import { NoDefinitionsMessage } from "@/components/NoDefinitionsMessage";
import { WordInfo } from "@/components/WordInfo";
import { WordSearch } from "@/components/WordSearch";
import { Font } from "@/constants/font";
import { HTTPStatusCode } from "@/constants/http";
import { QueryKey } from "@/constants/queryKeys";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useTheme } from "@/hooks/useTheme";
import { getWordInfo } from "@/services/word";
import { HTTPError } from "@/types/http";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { useState } from "react";

import appClasses from "./App.module.scss";

export const App: React.FC = () => {
  const [activeFont, setActiveFont] = useState(Font.SansSerif);
  const [activeTheme, setActiveTheme] = useTheme();
  const [word, setWord] = useState<string>();

  const debouncedWord = useDebouncedValue(word?.trim());

  const {
    isSuccess: hasWordInfoLoaded,
    data: wordInfo,
    error: wordError,
  } = useQuery({
    queryKey: [QueryKey.WordInfo, debouncedWord],
    enabled: !!debouncedWord,
    placeholderData: keepPreviousData,
    queryFn: ({ signal }) =>
      getWordInfo({
        word: debouncedWord ?? "",
        signal,
      }),
  });

  const hasWordInfo = wordInfo !== null;
  const hasHTTPError =
    wordError instanceof HTTPError &&
    wordError.status === HTTPStatusCode.NotFound;

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

        <main>
          {hasWordInfoLoaded && hasWordInfo && <WordInfo wordInfo={wordInfo} />}

          {((hasWordInfoLoaded && !hasWordInfo) || hasHTTPError) && (
            <NoDefinitionsMessage />
          )}
        </main>

        {hasWordInfoLoaded && hasWordInfo && (
          <footer className={appClasses["App__footer"]}>
            <h2 className={appClasses["App__footer-title"]}>Source</h2>

            <a
              target="_blank"
              href={wordInfo.sourceUrl}
              className={appClasses["App__footer-link"]}
            >
              {wordInfo.sourceUrl}
            </a>
          </footer>
        )}
      </div>
    </div>
  );
};
