import { flashcardType } from "../types/types";

export const SampleFlashcards: flashcardType[]=[
    {
        id:1,
        question: 'kutya?',
        answer:'dog'
    },
    {
        id:2,
        question: 'cica?',
        answer:'cat'
    }
]

export type  categoryType = {
    id:number,
    name: string,
}