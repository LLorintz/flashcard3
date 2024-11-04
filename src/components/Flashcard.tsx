import { useState } from "react";
import { flashcardType } from "../types/types"

type cardProps ={
    flashcard:flashcardType;
}

const Flashcard = ({flashcard}:cardProps) => {
const [isFlipped,setIsFlipped] = useState(false)
const handleIsFlipped = ()=>{
    setIsFlipped(prev=>!prev)
}
    return (
    <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleIsFlipped}>
        <div className="front">
            {flashcard.question}
        </div>  
        <div className="back">
            {flashcard.answer}
        </div>
    </div>
  )
}

export default Flashcard