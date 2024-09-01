import { WordInfoSchema, WordMeaningSchema } from "@/schemas/word";
import { type InferOutput } from "valibot";

export type WordInfo = NonNullable<InferOutput<typeof WordInfoSchema>>;

export type WordMeaning = InferOutput<typeof WordMeaningSchema>;
