import { WordHeader } from "@/components/WordHeader";
import { WordMeaning } from "@/components/WordMeaning";
import type { WordInfo as WordInfoType } from "@/types/word";
import { type FC } from "react";

import wordInfoClasses from "./WordInfo.module.scss";

export type WordHeaderProps = {
  wordInfo: WordInfoType;
};

export const WordInfo: FC<WordHeaderProps> = ({ wordInfo }) => {
  return (
    <div className={wordInfoClasses["WordInfo"]}>
      <WordHeader wordInfo={wordInfo} />

      <div className={wordInfoClasses["WordInfo__meanings"]}>
        {wordInfo.meanings.map((meaning, index) => (
          <WordMeaning key={index} meaning={meaning} />
        ))}
      </div>
    </div>
  );
};
