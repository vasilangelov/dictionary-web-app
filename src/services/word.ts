import { buildWordInfoEndpoint } from "@/constants/endpoints";
import { WordInfoSchema } from "@/schemas/word";
import { parse } from "valibot";

type GetWordInfoProps = {
  word: string;
  signal?: AbortSignal;
};

export const getWordInfo = async ({ word, signal }: GetWordInfoProps) => {
  const response = await fetch(buildWordInfoEndpoint(word), {
    signal,
  });

  if (!response.ok) {
    throw new Error();
  }

  return parse(WordInfoSchema, await response.json());
};
