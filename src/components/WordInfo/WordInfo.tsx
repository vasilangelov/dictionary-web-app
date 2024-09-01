import { WordHeader } from "@/components/WordHeader";
import type { WordInfo as WordInfoType } from "@/types/word";
import { type FC } from "react";

export type WordHeaderProps = {
  wordInfo: WordInfoType;
};

export const WordInfo: FC<WordHeaderProps> = ({ wordInfo }) => {
  return (
    <div>
      <WordHeader wordInfo={wordInfo} />
    </div>
  );
};
