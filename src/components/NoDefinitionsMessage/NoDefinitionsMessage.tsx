import { type FC } from "react";

import noDefinitionsMessageClasses from "./NoDefinitionsMessage.module.scss";

export const NoDefinitionsMessage: FC = () => {
  return (
    <article className={noDefinitionsMessageClasses["NoDefinitionsMessage"]}>
      <div
        className={noDefinitionsMessageClasses["NoDefinitionsMessage__emoji"]}
      >
        😕
      </div>

      <h2
        className={noDefinitionsMessageClasses["NoDefinitionsMessage__heading"]}
      >
        No Definitions Found
      </h2>

      <p
        className={
          noDefinitionsMessageClasses["NoDefinitionsMessage__description"]
        }
      >
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </article>
  );
};
