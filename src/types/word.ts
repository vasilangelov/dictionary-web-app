import { WordInfoSchema } from "@/schemas/word";
import { type InferOutput } from "valibot";

export type WordInfo = InferOutput<typeof WordInfoSchema>;
