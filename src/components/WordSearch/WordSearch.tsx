import { Search } from "@/components/Search";
import { type FC } from "react";

import wordSearchClasses from "./WordSearch.module.scss";

type WordSearchProps = {
  word: string | undefined;
  onChange: (word: string) => void;
};

export const WordSearch: FC<WordSearchProps> = ({ word, onChange }) => {
  const hasError = word === "";

  return (
    <div className={wordSearchClasses["WordSearch"]}>
      <Search
        isInvalid={hasError}
        placeholder="Search for any word..."
        onChange={onChange}
      />
      <p role="alert" className={wordSearchClasses["WordSearch__error"]}>
        {hasError && "Whoops, can’t be empty…"}
      </p>
    </div>
  );
};
