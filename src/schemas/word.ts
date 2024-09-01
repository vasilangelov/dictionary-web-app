import { array, object, optional, pipe, string, transform } from "valibot";

export const WordMeaningSchema = object({
  partOfSpeech: string(),
  definitions: array(
    object({
      definition: string(),
      example: optional(string()),
    })
  ),
  synonyms: array(string()),
  antonyms: array(string()),
});

export const WordInfoSchema = pipe(
  array(
    pipe(
      object({
        word: string(),
        phonetic: optional(string()),
        phonetics: array(
          object({
            text: optional(string()),
            audio: optional(string()),
          })
        ),
        meanings: array(WordMeaningSchema),
        sourceUrls: array(string()),
      }),
      transform((word) => {
        let phonetic = word.phonetics.find(
          (word) => !!word.text && !!word.audio
        ) as
          | {
              text: string;
              audio?: string;
            }
          | undefined;

        if (!phonetic && word.phonetic) {
          phonetic = {
            text: word.phonetic,
          };
        }

        if (!phonetic) {
          phonetic = word.phonetics.find(({ text }) => !!text) as
            | {
                text: string;
              }
            | undefined;
        }

        return {
          word: word.word,
          phonetic,
          meanings: word.meanings,
          sourceUrl: word.sourceUrls?.[0],
        };
      })
    )
  ),
  transform((array) => (array?.length ? array[0] : null))
);
