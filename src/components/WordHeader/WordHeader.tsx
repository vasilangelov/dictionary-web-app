import { AudioButton } from "@/components/AudioButton";
import { WordInfo } from "@/types/word";
import { type FC } from "react";

import wordHeaderClasses from "./WordHeader.module.scss";

export type WordHeaderProps = {
  wordInfo: WordInfo;
};

export const WordHeader: FC<WordHeaderProps> = ({ wordInfo }) => {
  const { word, phonetic } = wordInfo;

  return (
    <div className={wordHeaderClasses["WordHeader"]}>
      <div className={wordHeaderClasses["WordHeader__group"]}>
        <h2 className={wordHeaderClasses["WordHeader__word"]}>{word}</h2>
        {!!phonetic && (
          <p className={wordHeaderClasses["WordHeader__phonetic"]}>
            {phonetic.text}
          </p>
        )}
      </div>

      {!!phonetic?.audio && <AudioButton src={phonetic.audio} />}
    </div>
  );
};
