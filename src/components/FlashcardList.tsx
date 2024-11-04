import { flashcardType } from "../types/types"
import Flashcard from "./Flashcard"

type flashcardListProps={
    flashcards:flashcardType[]
}

const FlashcardList = ({flashcards}:flashcardListProps) => {
  return (
    <div className="card-grid">
        {flashcards.map((flashcard:flashcardType)=>(
              <Flashcard key={flashcard.id} flashcard={flashcard}></Flashcard>
        ))}
    </div>
  )
}

export default FlashcardList