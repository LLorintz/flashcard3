import { FormEvent, useEffect, useState } from "react"
import FlashcardList from "./components/FlashcardList"

import './app.css'
import { fetchQuestions } from "./api/api"
import { flashcardType } from "./types/types"
import { categoryType } from "./data/data"
import { fetchCategory } from "./api/api"
function App() {

  const [flashcards,setFlashcards]=useState<flashcardType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<categoryType[]>([])

  const [selectedCategory, setSelectedCategory] = useState<number>(9);
  const [amount, setAmount] = useState<number>(10);

  const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setAmount(Number(e.target.value))
  }

  const HandleSelectedCategory =(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedCategory(Number(e.target.value))
  }

  useEffect(()=>{
    const getQuestions= async ()=>{
      const questions =await fetchQuestions();
    
      if(questions.length>0) 
      setFlashcards(questions)
      setIsLoading(false)
    }
    getQuestions();
  },[])

  useEffect(()=>{
    const getCategories = async()=>{
      const cat = await fetchCategory();
      console.log(cat)
      setCategories(cat)
    }
    getCategories()
  },[])

 const handleSubmit = async(e:FormEvent)=>{
  e.preventDefault();
  const questions=await fetchQuestions(amount, selectedCategory)
  setFlashcards(questions)
 }

  return (
    <>
      <form className="header" onSubmit={handleSubmit} action="">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="id" value={selectedCategory} onChange={HandleSelectedCategory}>
            {categories.map(category=>(
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
            <label htmlFor="amount">Number of Questions</label>
            <input value={amount} onChange={handleAmountChange} type="number" id="amount" min="1" step="1" defaultValue={10}/>
        </div>
        <div className="form-group">
            <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        {isLoading ?
        (<div className="Loading">Loading...</div>):(<FlashcardList flashcards={flashcards}></FlashcardList>)}
        
      </div>
    </>
  )
}

export default App
