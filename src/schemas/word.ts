import { array, object, optional, pipe, string, transform } from "valibot";

const WordMeaningSchema = object({
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
        phonetic: string(),
        phonetics: array(
          object({
            text: string(),
            audio: optional(string()),
          })
        ),
        meanings: array(WordMeaningSchema),
        sourceUrls: array(string()),
      }),
      transform((word) => ({
        word: word.word,
        phonetic: word.phonetics.find(({ audio }) => !!audio) ?? {
          text: word.phonetic,
        },
        meanings: word.meanings,
        sourceUrl: word.sourceUrls?.[0],
      }))
    )
  ),
  transform((array) => (array?.length ? array[0] : null))
);
