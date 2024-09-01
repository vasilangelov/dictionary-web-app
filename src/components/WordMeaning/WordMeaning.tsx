import { type FC } from "react";
import type { WordMeaning as WordMeaningType } from "@/types/word";

import wordMeaningClasses from "./WordMeaning.module.scss";

export type WordMeaningProps = {
  meaning: WordMeaningType;
};

export const WordMeaning: FC<WordMeaningProps> = ({ meaning }) => {
  const hasSynonyms = meaning.synonyms.length > 0;
  const hasAntonyms = meaning.antonyms.length > 0;

  return (
    <div>
      <p className={wordMeaningClasses["WordMeaning__speech-part"]}>
        {meaning.partOfSpeech}
      </p>

      <h3 className={wordMeaningClasses["WordMeaning__title"]}>Meaning</h3>

      <ul className={wordMeaningClasses["WordMeaning__definitions"]}>
        {meaning.definitions.map((definition, index) => (
          <li
            key={index}
            className={wordMeaningClasses["WordMeaning__definition"]}
          >
            <span
              className={wordMeaningClasses["WordMeaning__definition-group"]}
            >
              {definition.definition}
              {definition.example && (
                <span className={wordMeaningClasses["WordMeaning__example"]}>
                  {definition.example}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {hasSynonyms && (
        <div className={wordMeaningClasses["WordMeaning__list-group"]}>
          <h4 className={wordMeaningClasses["WordMeaning__list-group-heading"]}>
            Synonyms
          </h4>
          <ul className={wordMeaningClasses["WordMeaning__list-group-list"]}>
            {meaning.synonyms.map((synonym, index) => (
              <li
                key={index}
                className={wordMeaningClasses["WordMeaning__list-group-item"]}
              >
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasAntonyms && (
        <div className={wordMeaningClasses["WordMeaning__list-group"]}>
          <h4 className={wordMeaningClasses["WordMeaning__list-group-heading"]}>
            Antonyms
          </h4>
          <ul className={wordMeaningClasses["WordMeaning__list-group-list"]}>
            {meaning.antonyms.map((antonym, index) => (
              <li
                key={index}
                className={wordMeaningClasses["WordMeaning__list-group-item"]}
              >
                {antonym}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
